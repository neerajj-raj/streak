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
 * @author !ndrajit
 */
import { hasArrayElements } from "@utils/commonUtils";
import { Script } from "streak/components";

interface HomeTestimonialsProps {
  data: {
    customer_review: Array<{
      company_name: string;
      rating: string;
      title: string;
      description: string;
      author: string;
      date: string;
    }>;
  };
}

type StarIconProps = {
  className?: string;
  style?: React.CSSProperties;
  filled?: boolean;
};

const StarIcon = ({ className, style, filled = true }: StarIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={style}
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

const Rating = ({ value, max = 5 }: any) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.25 && value % 1 < 0.75;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="mb-4 flex justify-center gap-1">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <StarIcon key={`full-${i}`} className="h-4 w-4 text-primary" filled />
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <div className="relative h-4 w-4">
          {/* Outline star (full) */}
          <StarIcon className="absolute inset-0 h-4 w-4 text-primary" filled={false} />

          {/* Half-filled star */}
          <StarIcon className="absolute inset-0 h-4 w-4 text-primary" filled style={{ clipPath: "inset(0 50% 0 0)" }} />
        </div>
      )}

      {/* Empty stars (outline only) */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <StarIcon key={`empty-${i}`} className="h-4 w-4 text-primary" filled={false} />
      ))}
    </div>
  );
};

const HomeTestimonials = (props: HomeTestimonialsProps) => {
  const { data } = props || {};
  const { customer_review: customerReview } = data || {};

  return (
    hasArrayElements(customerReview) && (
      <section className="relative overflow-hidden py-12 lg:py-20 xl:py-24" id="section-home-testimonials">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-secondary/10 blur-[120px]" />
        </div>
        <div className="container">
          <div className="relative mx-auto max-w-5xl">
            <div className="mb-8 lg:mb-10 xl:mb-16 text-center">
              <h2 className="text-2xl md:text-4xl font-secondary font-extrabold text-gray-900 tracking-wide xl:text-5xl">
                What Our <span className="text-secondary-dark">Clients Say</span>
              </h2>
              <div className="inline-flex items-center gap-2 mt-3 xl:mt-6 max-md:hidden">
                <span className="w-3 h-3 rounded-full border-3 border-primary animate-pulse" />
                <span className="text-sm font-semibold tracking-[0.35em] uppercase text-gray-500">Trusted across the luxury automotive circle</span>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden" embla-viewport="true">
                <div className="flex" style={{ transform: "translate3d(0px, 0px, 0px)" }} embla-container="true">
                  {customerReview?.map((review, index) => (
                    <div className="flex-[0_0_100%] px-4 flex justify-center" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                      <div className="max-w-3xl text-center">
                        <span className="mb-3 block text-sm font-semibold tracking-wide text-secondary">{review.company_name}</span>
                        <Rating value={Math.min(Math.max(Number(review.rating), 0), 5)} />

                        <h3 className="mb-4 text-2xl font-bold text-gray-900">{review.title}</h3>
                        <p className="mb-8 text-lg leading-relaxed text-gray-600">{review.description}</p>
                        <div className="flex flex-col items-center gap-3 text-sm">
                          <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full">
                              <img
                                alt="Ahmed R."
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
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
                                src="/images/avatar.webp"
                              />
                            </div>
                            <div className="font-semibold text-gray-900">{review.author}</div>
                          </div>
                          <div className="text-gray-600">{review.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition hover:bg-secondary/10 max-lg:hidden backdrop-blur"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition hover:bg-secondary/10 max-lg:hidden backdrop-blur"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
            <div className="mt-12 flex justify-center gap-3">
              <button aria-label="Go to slide 1" className="h-3 transition-all duration-300 w-10 rounded-full bg-primary" />
              <button aria-label="Go to slide 2" className="h-3 transition-all duration-300 w-3 rounded-full bg-gray-300 hover:bg-gray-400" />
              <button aria-label="Go to slide 3" className="h-3 transition-all duration-300 w-3 rounded-full bg-gray-300 hover:bg-gray-400" />
            </div>
          </div>
        </div>
        <Script id="HomeTestimonials">
          {(gDom: any) => {
            gDom
              .loadPackage("js/embla-carousel.umd.js")
              .then(() => {
                const section = document.getElementById("section-home-testimonials");
                if (!section) return;

                let autoplayInterval: number | null = null;
                const AUTOPLAY_DELAY = 5000;

                // Embla structure (based on given HTML)
                const emblaViewport = section.querySelector("[embla-viewport]");
                const emblaContainer = section?.querySelector("[embla-container]");

                // Controls
                const prevBtn = section.querySelector('[aria-label="Previous testimonial"]');
                const nextBtn = section.querySelector('[aria-label="Next testimonial"]');

                // Dots container (last div with buttons)
                const dotsContainer = section.querySelector(".mt-12.flex.justify-center");

                if (!emblaViewport || !emblaContainer || !dotsContainer) return;

                const embla = gDom.EmblaCarousel(emblaViewport, {
                  loop: true,
                  align: "center",
                });

                /* -----------------------------
                 * Create dots
                 * ----------------------------- */
                const scrollSnaps = embla.scrollSnapList();
                dotsContainer.innerHTML = "";

                scrollSnaps.forEach((_: unknown, index: number) => {
                  const button = document.createElement("button");
                  button.ariaLabel = `Go to slide ${index + 1}`;
                  button.className = "h-3 w-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300";
                  button.addEventListener("click", () => embla.scrollTo(index));
                  dotsContainer.appendChild(button);
                });

                /* -----------------------------
                 * Update dots UI
                 * ----------------------------- */
                const updateDots = () => {
                  const selectedIndex = embla.selectedScrollSnap();
                  const buttons = dotsContainer.querySelectorAll("button");

                  buttons.forEach((btn, index) => {
                    if (index === selectedIndex) {
                      btn.className = "h-3 w-10 rounded-full bg-primary transition-all duration-300";
                    } else {
                      btn.className = "h-3 w-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300";
                    }
                  });
                };

                /* -----------------------------
                 * Prev / Next buttons
                 * ----------------------------- */
                prevBtn?.addEventListener("click", () => embla.scrollPrev());
                nextBtn?.addEventListener("click", () => embla.scrollNext());

                /* -----------------------------
                 * Bind events
                 * ----------------------------- */
                embla.on("select", updateDots);
                embla.on("reInit", updateDots);

                const stopAutoplay = () => {
                  if (autoplayInterval) {
                    clearInterval(autoplayInterval);
                    autoplayInterval = null;
                  }
                };

                const startAutoplay = () => {
                  stopAutoplay();
                  autoplayInterval = setInterval(() => {
                    if (embla.canScrollNext()) {
                      embla.scrollNext();
                    } else {
                      embla.scrollTo(0);
                    }
                  }, AUTOPLAY_DELAY);
                };

                updateDots();
                startAutoplay();
              })
              .catch((err: any) => {
                console.error(err);
              });
          }}
        </Script>
      </section>
    )
  );
};

export default HomeTestimonials;
