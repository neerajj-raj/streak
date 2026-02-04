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

import { Script } from "streak/components";
import { Anchor } from "./Anchor";

interface WhatsappButtonProps {
  isHomePage?: boolean;
}

const WhatsappButton = (props: WhatsappButtonProps) => {
  const { isHomePage } = props || {};

  return (
    <div id="WhatsappButtonRoot" className={`fixed right-4 z-999 transition-all duration-500 ease-out ${isHomePage ? "max-lg:bottom-25" : ""}  bottom-4`}>
      <Anchor
        href="https://wa.me/+971504004007"
        className="group flex gap-0 items-center
          bg-green-500! text-white
          rounded-full! py-3! px-3!
          transition-all duration-300 ease-out
          hover:shadow-lg"
      >
        <img src="/images/whatsapp.svg" alt="WhatsApp Logo" width={24} height={24} loading="lazy"/>
        <span
          className="max-w-0 overflow-hidden whitespace-nowrap
          opacity-0 -ms-2 group-hover:ms-0
          transition-all duration-600 ease-out
          group-hover:max-w-[140px] group-hover:opacity-100"
        >
          WhatsApp
        </span>
      </Anchor>
      <Script id="WhatsappButton" options={{ isHomePage }}>
        {(gDom: any, options: any) => {
          const root = gDom.geById("WhatsappButtonRoot") as HTMLDivElement;

          gDom.addEventListener("scrolling", () => {
            if (!options?.isHomePage) return;
            if (window.scrollY > 120) {
              root?.classList?.remove("max-lg:bottom-25");
            } else {
              root?.classList?.add("max-lg:bottom-25");
            }
          });
        }}
      </Script>
    </div>
  );
};

export default WhatsappButton;
