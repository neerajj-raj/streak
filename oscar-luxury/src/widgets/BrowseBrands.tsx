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
import CarFront from "@common/icons/CarFront";
import ChevronSingleLeft from "@common/icons/ChevronSingleLeft";
import ChevronSingleRight from "@common/icons/ChevronSingleRight";
import SearchIcon from "@common/icons/SearchIcon";
import { hasArrayElements } from "@utils/commonUtils";
import { Script } from "streak/components";

type BrandProps = { brand_name: string; brand_url: string; brand_icon: string };
interface BrowseBrandsProps {
  data: {
    brands: BrandProps[];
  };
}

const BrandCard = ({ brand }: { brand: BrandProps }) => (
  <a
    href={brand?.brand_url}
    className="group relative flex flex-col items-center justify-center rounded-2xl border border-transparent bg-white px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:shadow-lg"
  >
    <div className="relative h-14 w-28">
      <img
        src={brand.brand_icon}
        alt={brand.brand_name}
        loading="lazy"
        className="object-contain transition duration-300 group-hover:scale-110"
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
    <span className="mt-4 text-sm font-semibold text-gray-800 transition-colors group-hover:text-primary">{brand.brand_name}</span>
    <span className="mt-1 text-xs text-gray-400 opacity-0 transition group-hover:opacity-100 max-lg:hidden">View Vehicles</span>
    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-orange-400/0 transition group-hover:ring-orange-400/30" />
  </a>
);

const BrowseBrands = (props: BrowseBrandsProps) => {
  const brandsPerPage = 12;
  const { brands } = props?.data || [];

  const pages: BrandProps[][] = [];

  for (let i = 0; i < brands.length; i += brandsPerPage) {
    pages.push(brands.slice(i, i + brandsPerPage));
  }

  return (
    hasArrayElements(pages) && (
      <section brand-card-template className="w-full py-12 lg:py-20 xl:py-24 border-b border-slate-100" id="home-browse-brands">
        <div className="container">
          <div className="mb-8 lg:mb-10 text-center">
            <div className="inline-flex items-center gap-2 mb-3 max-md:hidden">
              <span className="w-3 h-3 rounded-full border-3 border-primary animate-pulse" />
              <span className="text-sm font-semibold tracking-[0.35em] uppercase">Choose Your Brand</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-secondary font-extrabold text-black tracking-wide xl:text-5xl">
              Browse by <span className="text-secondary-dark">Brand</span>
            </h2>
            <p className="mt-4 text-gray-600">Select a brand to explore available vehicles.</p>
          </div>

          <div className="mx-auto mb-8 lg:mb-10 xl:mb-16 max-w-xl">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="brandSearchInput"
                type="text"
                placeholder="Search brands..."
                className="w-full rounded-xl border border-gray-200 py-4 pl-14 pr-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="relative overflow-hidden h-auto" embla-viewport="true" id="brand-carousel-parent">
            <div className="flex items-start gap-4 pt-1" embla-container="true">
              {pages?.map((page, pageIndex) => (
                <div id="embla-slide-template" key={pageIndex} className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 shrink-0 w-full lg:px-16 md:px-14">
                  {page.map((brand) => (
                    <div key={brand.brand_name} id="brand-card-template">
                      <BrandCard brand={brand} />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Carousel buttons */}
            <button
              style={{ display: pages?.length === 1 ? "none" : "" }}
              aria-label="Previous brands"
              className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow hover:bg-secondary/10 hidden md:flex backdrop-blur"
            >
              <ChevronSingleLeft className="h-5 w-5 text-gray-700" />
            </button>

            <button
              style={{ display: pages?.length === 1 ? "none" : "" }}
              aria-label="Next brands"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow hover:bg-secondary/10 hidden md:flex backdrop-blur"
            >
              <ChevronSingleRight className="h-5 w-5 text-gray-700" />
            </button>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-3" id="brands_dots_container" style={{ display: pages?.length === 1 ? "none" : "" }}>
              {pages.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 transition-all duration-300 ${index === 0 ? "w-10 rounded-full bg-primary" : "w-2 rounded-full bg-gray-300"}`}
                />
              ))}
            </div>
          </div>

          {/* No Results */}
          <div id="browse_brands_no_results" className="w-full flex-col items-center justify-center text-center" style={{ display: "none" }}>
            <div className="relative mb-6 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CarFront className="w-16 h-16 text-primary animate-car-float" strokeWidth="1.5" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Brand not found</h3>
            <p className="text-slate-800">
              Looks like <span className="font-semibold text-secondary" id="searched-element"></span> is still on the road, not in our garage yet.
            </p>
          </div>
        </div>
        <Script id="BrowseBrands" options={{ brands, brandsPerPage }}>
          {(gDom: any, options: Record<string, any>) => {
            gDom
              .loadPackage("js/embla-carousel.umd.js")
              .then(() => {
                const section = gDom.geById("home-browse-brands");
                if (!section) return;

                // Search
                let debounceTimer: any;
                const brands = options?.brands;
                const brandsPerPage = options?.brandsPerPage;
                const input = gDom.geById("brandSearchInput") as HTMLInputElement;
                const slideTemplate = gDom.geById("embla-slide-template") as HTMLElement;
                const cardTemplate = gDom.geById("brand-card-template") as HTMLElement;
                const brandCarouselParent = gDom.geById("brand-carousel-parent") as HTMLDivElement;
                const dotContainer = gDom.geById("brands_dots_container") as HTMLDivElement;
                const noResultsEl = gDom.geById("browse_brands_no_results") as HTMLElement;

                // Embla structure (based on given HTML)
                const emblaViewport = section.querySelector("[embla-viewport]");
                const emblaContainer = section?.querySelector("[embla-container]");

                // Controls
                const prevBtn = section.querySelector('[aria-label="Previous brands"]');
                const nextBtn = section.querySelector('[aria-label="Next brands"]');

                // Dots container (last div with buttons)
                const dotsContainer = section.querySelector(".mt-6.flex.justify-center.gap-3");

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

                  buttons.forEach((btn: any, index: number) => {
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

                const filterBrands = (value: string) => {
                  const filteredBrands = brands.filter((b: BrandProps) => b.brand_name.toLowerCase().includes(value?.toLowerCase()));
                  if (filteredBrands.length === 0) {
                    const searchedElement = gDom.geById("searched-element") as HTMLElement;
                    brandCarouselParent.style.display = "none";
                    noResultsEl.style.display = "";
                    searchedElement.textContent = value || "";
                    return;
                  }

                  noResultsEl.style.display = "none";
                  brandCarouselParent.style.display = "";
                  const pages: BrandProps[] = [];

                  for (let i = 0; i < filteredBrands.length; i += brandsPerPage) {
                    pages.push(filteredBrands.slice(i, i + brandsPerPage));
                  }

                  /* -----------------------------
                   * Build DOM off-screen
                   * ----------------------------- */
                  const fragment = document.createDocumentFragment();

                  pages.forEach((page: any) => {
                    const slide = slideTemplate.cloneNode(true) as HTMLElement;
                    const cardsFragment = document.createDocumentFragment();

                    page.forEach((brand: BrandProps) => {
                      const cardWrapper = cardTemplate.cloneNode(true) as HTMLElement;
                      const link = cardWrapper.querySelector("a") as HTMLAnchorElement;
                      const img = cardWrapper.querySelector("img");
                      const label = cardWrapper.querySelector("span");

                      if (!img || !label || !link) return;

                      link.href = brand.brand_url;
                      cardWrapper.dataset.brand = brand.brand_name.toLowerCase();
                      img.src = brand.brand_icon;
                      img.alt = brand.brand_name;
                      label.textContent = brand.brand_name;

                      cardsFragment.appendChild(cardWrapper);
                    });

                    slide.replaceChildren(cardsFragment);
                    fragment.appendChild(slide);
                  });

                  /* -----------------------------
                   * Replace everything at once
                   * ----------------------------- */
                  emblaContainer.replaceChildren(fragment);

                  /* -----------------------------
                   * Re-init Embla
                   * ----------------------------- */
                  embla.reInit({
                    loop: pages.length > 1,
                    align: "center",
                  });

                  /* -----------------------------
                   * Rebuild dots
                   * ----------------------------- */
                  if (pages.length === 1) {
                    dotContainer.style.display = "none";
                    prevBtn.style.display = "none";
                    nextBtn.style.display = "none";
                  } else {
                    dotContainer.style.display = "";
                    prevBtn.style.display = "";
                    nextBtn.style.display = "";
                    const dotsFragment = document.createDocumentFragment();

                    embla.scrollSnapList().forEach((_: unknown, index: any) => {
                      const btn = document.createElement("button");
                      btn.className = "h-3 w-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300";
                      btn.addEventListener("click", () => embla.scrollTo(index));
                      dotsFragment.appendChild(btn);
                    });

                    dotsContainer.replaceChildren(dotsFragment);
                    updateDots();
                  }
                };

                input?.addEventListener("input", () => {
                  clearTimeout(debounceTimer);
                  debounceTimer = setTimeout(() => {
                    filterBrands(input.value);
                  }, 100); // debounce delay
                });

                updateDots();
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

export default BrowseBrands;
