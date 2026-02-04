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

import ChevronLeft from "@common/icons/ChevronLeft";
import { hasArrayElements } from "@utils/commonUtils";
import { Script } from "streak/components";

interface AboutClientsProps {
  data: {
    premium_client: Array<{
      name: string;
      logo: string;
      url: string;
    }>;
  };
}

const AboutClients = (props: AboutClientsProps) => {
  const { premium_client } = props?.data || {};

  return (
    hasArrayElements(premium_client) && (
      <section className="w-full py-12 lg:py-20 xl:py-24 overflow-hidden">
        <div className="container">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center">
            <div className="xl:w-1/3 text-center xl:text-left">
              <h2 className="text-2xl md:text-4xl xl:text-5xl font-secondary font-extrabold">
                Our Premium <span className="text-secondary-dark">Clients</span>
              </h2>
            </div>
            <div className="relative xl:w-2/3 overflow-hidden">
              <button
                aria-label="previous"
                id="client_previous_button"
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow rounded-full p-2"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button aria-label="next" id="client_next_button" className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow rounded-full p-2">
                <ChevronLeft style={{ rotate: "180deg" }} className="h-5 w-5 rotate-180 text-gray-700" />
              </button>
              <div className="flex w-max gap-4 will-change-transform" id="clients-scroll-view">
                {premium_client.map((brand, index) => (
                  <a key={index} href={brand.url} className="flex flex-col items-center justify-center px-4 py-6 min-w-[180px]">
                    <div className="relative h-14 w-28">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        loading="lazy"
                        className="object-contain"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                      />
                    </div>
                    <span className="mt-4 text-sm font-semibold text-gray-800">{brand.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Script id="AboutClients">
          {(gDom: any) => {
            const scrollView = gDom.geById("clients-scroll-view") as HTMLDivElement;
            const previousButton = gDom.geById("client_previous_button") as HTMLButtonElement;
            const nextButton = gDom.geById("client_next_button") as HTMLButtonElement;

            if (!scrollView) return;

            // Clone content once for infinite scroll
            scrollView.innerHTML += scrollView.innerHTML;

            const speed = 0.4;
            const ease = 0.08;
            let currentX = 0;
            let targetX = 0;
            let raf: number;

            const contentWidth = scrollView.scrollWidth / 2;

            previousButton.onclick = () => {
              targetX += 240;
            };

            nextButton.onclick = () => {
              targetX -= 240;
            };

            const animate = () => {
              targetX -= speed;
              currentX += (targetX - currentX) * ease;

              // Modulo wrap
              if (currentX <= -contentWidth) {
                currentX += contentWidth;
                targetX += contentWidth;
              }

              if (currentX > 0) {
                currentX -= contentWidth;
                targetX -= contentWidth;
              }

              scrollView.style.transform = `translateX(${currentX}px)`;
              raf = requestAnimationFrame(animate);
            };

            const start = () => {
              cancelAnimationFrame(raf);
              raf = requestAnimationFrame(animate);
            };

            if (!gDom.ftr) {
              start();
            } else {
              let triggered = false;
              const handler = () => {
                if (triggered) return;
                triggered = true;

                ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach((e) => document.removeEventListener(e, handler));

                start();
              };

              ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach((e) => document.addEventListener(e, handler, { passive: true }));
            }
          }}
        </Script>
      </section>
    )
  );
};

export default AboutClients;
