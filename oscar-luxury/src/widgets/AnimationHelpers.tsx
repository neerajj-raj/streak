/*
 * Copyright(c) 2025 Oscar.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Oscar ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Oscar.
 *
 *
 * @author Neeraj
 */

import WhatsappButton from "@common/components/WhatsappButton";
import { Script } from "streak/components";

interface AnimationHelpersProps {
  data: {
    isHomePage?: boolean;
  };
}

const AnimationHelpers = (props: AnimationHelpersProps) => {
  return (
    <>
      <WhatsappButton isHomePage={props?.data?.isHomePage} />
      <Script id="AnimationHelpers">
        {(gDom: any) => {
          gDom.triggeredEvents = {};

          const triggerCustomEvent = (name: string, detail: any = {}) => {
            gDom.triggeredEvents[name] = detail;
            detail.triggeredEvents = Object.keys(gDom.triggeredEvents);
            const event = new CustomEvent(name, { detail });
            window.dispatchEvent(event);
          };

          const scrollToHash = () => {
            const hash = window?.location?.hash;
            if (hash) {
              const id = hash.replace("#", "");
              const el = document.getElementById(id);
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                // retry in case element loads later
                setTimeout(scrollToHash, 50);
              }
            }
          };

          const triggerScrollFadeLoad = () => {
            scrollToHash();
            window.addEventListener("load", () => {
              triggerCustomEvent("pageLoaded");
            });

            window.addEventListener(
              "scroll",
              () => {
                triggerCustomEvent("scrolling");
              },
              { passive: true }
            );
          };

          if (gDom.ftr) {
            setTimeout(triggerScrollFadeLoad, 2000);
          } else {
            triggerScrollFadeLoad();
          }
        }}
      </Script>
    </>
  );
};

export default AnimationHelpers;
