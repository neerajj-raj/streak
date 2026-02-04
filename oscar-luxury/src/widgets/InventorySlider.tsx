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

import ChevronSingleLeft from "@common/icons/ChevronSingleLeft";
import ChevronSingleRight from "@common/icons/ChevronSingleRight";
import { Dynamic, Script } from "streak/components";

const InventorySlider = (props: { images: string[]; title: string }) => {
  const { images, title } = props;

  const featuredImages = images?.slice(0, 1);
  const restImages = images?.slice(1);

  const featuredThumbImages = images?.slice(0, 5);
  const restThumbImages = images?.slice(5);

  return (
    <div className="w-full" id="inventory-slider">
      <h1 className="mb-4 font-semibold text-xl xl:hidden">{title ?? ""}</h1>
      <div className="group relative overflow-hidden rounded-xl">
        <div className="overflow-hidden" data-main>
          <div className="flex">
            {featuredImages?.map((src, i) => (
              <a aria-label={`image-${i}`} key={i} href={src} data-fancybox="gallery" className="relative min-w-full aspect-16/10 bg-slate-100 cursor-zoom-in!">
                <img
                  src={src}
                  alt=""
                  fetchPriority={i === 0 ? "high" : "low"}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="object-cover"
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                />
              </a>
            ))}

            <Dynamic id="lazy-pdp-imgs">
              {restImages?.map((src, i) => (
                <a
                  aria-label={`image-r-${i}`}
                  key={`r-${i}`}
                  href={src}
                  data-fancybox="gallery"
                  className="relative min-w-full aspect-16/10 bg-slate-100 cursor-zoom-in!"
                >
                  <img
                    src={src}
                    alt=""
                    fetchPriority="low"
                    loading="lazy"
                    className="object-cover"
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                  />
                </a>
              ))}
            </Dynamic>
          </div>
        </div>

        <button
          data-main-prev
          aria-label="prev"
          className="absolute left-0 rounded-tr-xl rounded-br-xl px-1 py-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-white/50 hover:bg-white/90 max-lg:hidden"
        >
          <ChevronSingleLeft className="h-6 w-6 text-gray-700" />
        </button>

        <button
          data-main-next
          aria-label="next"
          className="absolute right-0 rounded-tl-xl rounded-bl-xl px-1 py-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-white/50 hover:bg-white/90 max-lg:hidden"
        >
          <ChevronSingleRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      <div className="relative flex items-center mt-4 max-lg:-mx-4 max-lg:px-4 max-lg:overflow-hidden">
        {images?.length > 5 && (
          <button
            data-thumbs-prev
            disabled
            aria-label="thumb-prev"
            className="pe-8 absolute left-0 z-10 h-full flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition bg-linear-to-r from-white via-white/50 to-transparent max-lg:hidden"
          >
            <ChevronSingleLeft className="h-6 w-6 opacity-80 hover:opacity-100" />
          </button>
        )}

        {/* Thumbnail Navigation */}
        <div className="lg:overflow-hidden flex-1 lg:px-1 [--thumbs:4] sm:[--thumbs:4.5] lg:[--thumbs:5.5]" data-thumbs>
          <div className="flex gap-2 lg:gap-3">
            {featuredThumbImages?.map((src, i) => (
              <button
                key={i}
                data-thumb
                className="relative aspect-4/3 shrink-0 rounded-lg border transition hover:border-slate-600"
                style={{ flex: "0 0 calc(100% / var(--thumbs))" }}
                aria-label={`button-${i}`}
              >
                <img
                  src={src}
                  alt=""
                  loading={i < 5 ? "eager" : "lazy"}
                  sizes="200px"
                  className="object-cover rounded-lg border transition hover:border-slate-600"
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
              </button>
            ))}

            <Dynamic id="lazy-thumb-imgs">
              {restThumbImages?.map((src, i) => (
                <button
                  key={`rest-${i}`}
                  data-thumb
                  className="relative aspect-4/3 shrink-0 rounded-lg border transition hover:border-slate-600"
                  style={{ flex: "0 0 calc(100% / var(--thumbs))" }}
                  aria-label={`button-r-${i}`}
                >
                  <img
                    src={src}
                    alt=""
                    loading={i < 5 ? "eager" : "lazy"}
                    sizes="200px"
                    className="object-cover rounded-lg border transition hover:border-slate-600"
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
                </button>
              ))}
            </Dynamic>
          </div>
        </div>

        {images?.length > 5 && (
          <button
            data-thumbs-next
            aria-label="thumb-next"
            className="ps-8 absolute right-0 z-10 h-full flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition bg-linear-to-r from-transparent via-white/50 to-white max-lg:hidden"
          >
            <ChevronSingleRight className="h-6 w-6 opacity-80 hover:opacity-100" />
          </button>
        )}
      </div>
      <Script id="PdpInfo">
        {(gDom: any) => {
          const loadFancyboxCss = () => {
            if (document.getElementById("fancybox-css")) return;

            const link = document.createElement("link");
            link.id = "fancybox-css";
            link.rel = "stylesheet";
            link.href = "/styles/fancybox.css";

            document.head.appendChild(link);
          };

          const initInventorySlider = () => {
            const slider = gDom.geById("inventory-slider") as HTMLDivElement;
            const mainRoot = slider.querySelector("[data-main]") as HTMLDivElement;
            const thumbsRoot = slider.querySelector("[data-thumbs]") as HTMLDivElement;

            const mainPrevBtn = slider.querySelector("[data-main-prev]") as HTMLButtonElement;
            const mainNextBtn = slider.querySelector("[data-main-next]") as HTMLButtonElement;
            const thumbsPrevBtn = slider.querySelector("[data-thumbs-prev]") as HTMLButtonElement;
            const thumbsNextBtn = slider.querySelector("[data-thumbs-next]") as HTMLButtonElement;

            const mainApi = EmblaCarousel(mainRoot, { loop: true });
            const thumbsApi = EmblaCarousel(thumbsRoot, {
              dragFree: true,
              containScroll: "trimSnaps",
            });

            function updateThumbButtons() {
              thumbsPrevBtn.disabled = !thumbsApi.canScrollPrev();
              thumbsNextBtn.disabled = !thumbsApi.canScrollNext();
            }

            function syncActive() {
              const index = mainApi.selectedScrollSnap();

              thumbsApi.scrollTo(index);

              slider.querySelectorAll("[data-thumb]").forEach((el, i) => {
                const button = el as HTMLButtonElement;
                if (i === index) {
                  button.style.borderColor = "#f6b111";
                } else {
                  button.style.borderColor = "#C8D5E2";
                }
              });
            }

            mainApi.on("select", syncActive);
            thumbsApi.on("scroll", updateThumbButtons);
            thumbsApi.on("reInit", updateThumbButtons);

            mainPrevBtn.addEventListener("click", () => mainApi.scrollPrev());
            mainNextBtn.addEventListener("click", () => mainApi.scrollNext());

            thumbsPrevBtn.addEventListener("click", () => thumbsApi.scrollPrev());
            thumbsNextBtn.addEventListener("click", () => thumbsApi.scrollNext());

            slider.querySelectorAll("[data-thumb]").forEach((btn, i) => {
              btn.addEventListener("click", () => mainApi.scrollTo(i));
            });

            syncActive();
            updateThumbButtons();

            Fancybox.bind('[data-fancybox="gallery"]', {
              Thumbs: false,
              Toolbar: { display: ["close"] },

              on: {
                init: () => {
                  loadFancyboxCss();
                },
              },
            });
          };

          // Start
          gDom.loadPackage("js/embla-carousel.umd.js").then(() => {
            gDom.loadPackage("js/fancybox.umd.js").then(() => {
              initInventorySlider();
            });
          });

          const loadLazyCards = () => {
            gDom.loadDynamicComponent("lazy-pdp-imgs", () => {
              console.log("lazy-pdp-imgs loaded");
            });
            gDom.loadDynamicComponent("lazy-thumb-imgs", () => {
              console.log("lazy-thumb-imgs loaded");
            });
          };

          if (!gDom.ftr) {
            loadFancyboxCss();
            loadLazyCards();
          } else {
            let isAlreadyTriggered = false;
            const handler = () => {
              if (isAlreadyTriggered) return;
              isAlreadyTriggered = true;
              ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach((e) => document?.removeEventListener(e, handler));
              loadFancyboxCss();
              loadLazyCards();
            };

            ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach((e) => document?.addEventListener(e, handler, { passive: true }));
          }
        }}
      </Script>
    </div>
  );
};

export default InventorySlider;
