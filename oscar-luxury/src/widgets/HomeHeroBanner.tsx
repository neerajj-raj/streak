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

import { Dynamic, Script } from "streak/components";
import { wpBaseUrl } from "@utils/config";
import CarIcon from "@common/icons/CarIcon";
import SearchIcon from "@common/icons/SearchIcon";
import ChevronDown from "@common/icons/ChevronDown";
import HandCoins from "@common/icons/HandCoins";
import RepeatIcon from "@common/icons/RepeatIcon";
import CloseIcon from "@common/icons/CloseIcon";
import { Button } from "@common/components/Button";
import SparklesIcon from "@common/icons/SparklesIcon";
import PaletteIcon from "@common/icons/PaletteIcon";
import Droplets from "@common/icons/Droplets";
import Layers from "@common/icons/Layers";
import ShieldIcon from "@common/icons/ShieldIcon";
import ChevronsRight from "@common/icons/ChevronsRight";
import { Anchor } from "@common/components/Anchor";

type filterOption = {
  id: number;
  name: string;
  slug: string;
  parent: number;
  count: number;
};

interface HomeHeroBannerProps {
  data: {
    video: string;
    poster: string;
    searchFilters: {
      years: filterOption[];
      categories: filterOption[];
    };
  };
}

interface bannerTabProps {
  tab: string;
  heading: string;
  description: string;
  icon: any;
  gradient: string;
  gradientsBg: string;
}

const bannerTabs: bannerTabProps[] = [
  {
    tab: "buy",
    heading: "Find Your Dream Car",
    description: "Search through our exclusive collection",
    icon: CarIcon,
    gradient: "bg-gradient-to-br from-rose-500 to-orange-500",
    gradientsBg: "max-lg:bg-linear-to-t max-lg:from-orange-100 max-lg:to-rose-200",
  },
  {
    tab: "sell",
    heading: "Sell Your Luxury Car",
    description: "Get the best price instantly",
    icon: SparklesIcon,
    gradient: "bg-gradient-to-br from-indigo-500 to-sky-500",
    gradientsBg: "max-lg:bg-linear-to-t max-lg:from-sky-100 max-lg:to-indigo-200",
  },
  {
    tab: "trade in",
    heading: "Trade Your Vehicle",
    description: "Upgrade to a premium vehicle",
    icon: RepeatIcon,
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
    gradientsBg: "max-lg:bg-linear-to-t max-lg:from-teal-100 max-lg:to-emerald-200",
  },
  {
    tab: "services",
    heading: "Explore Our Services",
    description: "Discover our range of automotive services",
    icon: Layers,
    gradient: "bg-gradient-to-br from-fuchsia-500 to-pink-500",
    gradientsBg: "max-lg:bg-linear-to-t max-lg:from-pink-100 max-lg:to-fuchsia-200",
  },
];

const HomeHeroBanner = (props: HomeHeroBannerProps) => {
  const { video, poster, searchFilters } = props?.data || {};

  return (
    <section className="relative w-full h-[calc(100vh-var(--topbar-height))] lg:min-h-[760px]" id="home_hero_banner_section">
      {poster ? (
        <img src={poster} alt="Banner Poster" data-video-src={video} className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
      ) : (
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline aria-hidden="true" role="presentation">
          <source src={video} type="video/mp4" />
          <track kind="captions" src="/captions/dummy.vtt" srcLang="en" label="English" default />
        </video>
      )}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-transparent lg:from-black/80 lg:via-black/60 lg:to-transparent"></div>
      <div className="relative container z-10 flex flex-col items-center justify-center gap-6 xl:gap-12 h-full max-xl:flex-col max-lg:justify-between">
        <div className="lg:hidden">&nbsp;</div>
        <div className="w-full max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white tracking-wide bg-black/30 backdrop-blur-lg mb-6">
            <span className="w-3 h-3 rounded-full border-3 border-primary animate-pulse" />
            Premium Collections Available
          </div>
          <h1 className="text-4xl 2xl:text-5xl font-extrabold text-white font-secondary tracking-wide leading-14">
            Drive the feeling of <span className="text-primary">Luxury</span>
          </h1>
          <p className="text-slate-300 mt-4 xl:mt-4 max-lg:hidden">
            Seamless trade-ins, trusted bank financing, and fast car registration <br /> — all handled by experienced professionals.
          </p>
        </div>
        <BannerSearch years={searchFilters?.years} categories={searchFilters?.categories} />
      </div>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce max-lg:hidden z-10"
        role="button"
        aria-label="Go to next section"
        id="banner-scroll-icon"
      >
        <span className="text-xs text-white uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-linear-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

const TabIcon = (props: { icon: any; gradient: string }) => {
  const Icon = props?.icon;
  return (
    <div className={`max-lg:p-2 flex items-center justify-center rounded-full ${props?.gradient}`}>
      <Icon className="w-4 h-4 text-white" />
    </div>
  );
};

const BannerSearch = ({ years, categories }: { years: filterOption[]; categories: filterOption[] }) => {
  return (
    <div className="w-full max-w-4xl max-lg:relative">
      <div className="flex gap-1 mb-0 max-lg:gap-0.5 max-md:-mx-4 max-md:gap-px" id="banner_header_tab">
        {bannerTabs?.map((each, index) => (
          <button
            key={each.tab}
            data-bannertab={each.tab}
            data-gradientbg={each.gradientsBg}
            className={`relative px-2 lg:px-10 py-3 xl:text-lg rounded-t-xl font-bold capitalize transition-all duration-300 max-lg:flex-1 max-lg:rounded-none ${
              index === 0
                ? `bg-white text-black shadow-xl ${each.gradientsBg}`
                : `bg-white/20 backdrop-blur-md text-gray-300 hover:bg-white/30 max-lg:text-black ${each.gradientsBg}`
            }`}
          >
            <div className="flex flex-col items-center gap-1 lg:flex-row lg:gap-2">
              <span className="lg:hidden">
                <TabIcon icon={each?.icon} gradient={each?.gradient} />
              </span>
              <span>{each?.tab}</span>
            </div>
            <div
              className={`${
                index === 0 ? "max-lg:hidden" : "hidden"
              } tab-indicator absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full`}
            />
          </button>
        ))}
      </div>
      <div
        id="banner_search_container"
        className="lg:rounded-3xl lg:rounded-tl-none lg:text-sm bg-white lg:shadow-xl max-md:-mx-4 p-6 md:p-8 2xl:p-10 max-lg:absolute max-lg:left-0 max-lg:right-0 max-lg:bottom-21.25 max-lg:rounded-tl-2xl max-lg:rounded-tr-2xl lg:block max-lg:hidden"
      >
        <button
          type="button"
          id="mobile_close_button"
          className="absolute right-0 -top-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/50 lg:hidden"
        >
          <CloseIcon className="w-5 h-5 text-black" size={24} />
        </button>

        <div className="flex justify-between items-start flex-wrap gap-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <CarIcon className="w-5 h-5 text-primary-dark" />
            </div>
            <div id="banner_heading">
              <h2 className="lg:text-lg font-semibold text-black">{bannerTabs?.[0]?.heading}</h2>
              <p className="max-md:text-xs text-gray-600">{bannerTabs?.[0]?.description}</p>
            </div>
          </div>

          {/* BUY TAB Button */}
          <Anchor
            id="buy_view_all_cars_btn"
            variant="link"
            icon={ChevronsRight}
            href="/inventory"
            className="mb-5 inline-flex items-center justify-center text-center"
          >
            View All Cars
          </Anchor>
        </div>

        {/* BUY */}
        <div className="banner_tab_view space-y-4" banner-tab-view="buy">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                id="keyword_input"
                type="text"
                className="w-full px-6 py-4 rounded-xl bg-gray-100 placeholder-gray-600"
                placeholder="What are you looking for?"
                autoComplete="off"
              />

              {/* For search suggestion */}
              <div id="serach_suggestion_parent_div" className="absolute z-20 w-full bg-white rounded-2xl shadow-lg overflow-hidden mt-2">
                <div id="keyword_results" className="max-h-40 overflow-y-auto"></div>
              </div>
            </div>

            <div className="relative" data-type="brand" id="brand_dropdown">
              <div className="dropdown-toggle px-6 py-4 rounded-xl bg-gray-100 flex justify-between items-center cursor-pointer">
                <span className="dropdown-selected text-gray-600">Select brand</span>
                <ChevronDown className="dropdown-chevrondown w-5 h-5 text-gray-600" />
                <CloseIcon style={{ display: "none" }} className="dropdown-close-icon w-5 h-5 text-gray-500 hover:text-gray-700" size={24} />
              </div>

              <div className="dropdown-options absolute z-20 w-full bg-white rounded-2xl shadow-lg overflow-hidden" style={{ display: "none" }}>
                <Dynamic id="brand-element">
                  <div className="p-3">
                    <input
                      className="dropdown-search w-full px-6 py-4 rounded-xl bg-gray-100  placeholder-gray-600"
                      placeholder="Search brand"
                      autoComplete="off"
                    />
                  </div>
                  <div className="max-h-40 overflow-y-auto">
                    {categories?.map((category) => (
                      <div
                        className="dropdown-option px-4 py-3 hover:bg-gray-100 cursor-pointer"
                        key={category?.id}
                        data-id={category?.id}
                        data-name={category?.name}
                      >
                        {category?.name}
                      </div>
                    ))}
                    <div style={{ display: "none" }} className="no_options_found px-4 py-6 text-center text-sm text-gray-500">
                      No brands found
                    </div>
                  </div>
                </Dynamic>
              </div>
            </div>

            <div className="relative" data-type="year" id="year_dropdown">
              <div className="dropdown-toggle px-6 py-4 rounded-xl bg-gray-100 flex justify-between items-center cursor-pointer">
                <span className="dropdown-selected text-gray-600">Select year</span>
                <ChevronDown className="dropdown-chevrondown w-5 h-5 text-gray-600" />
                <CloseIcon style={{ display: "none" }} size={24} className="dropdown-close-icon w-5 h-5 text-gray-500 hover:text-gray-700" />
              </div>
              <div className="dropdown-options absolute z-20 w-full bg-white rounded-2xl shadow-lg overflow-hidden" style={{ display: "none" }}>
                <Dynamic id="year-element">
                  <div className="max-h-40 overflow-y-auto">
                    {years?.map((year) => (
                      <div className="dropdown-option px-4 py-3 hover:bg-gray-100 cursor-pointer" key={year?.id} data-id={year?.id} data-name={year?.name}>
                        {year?.name}
                      </div>
                    ))}
                  </div>
                </Dynamic>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center gap-4 pt-3">
            <div className="hidden md:block h-px flex-1 bg-linear-to-r from-transparent via-slate-200 to-transparent" />
            <Button icon={SearchIcon} id="buy_search_button" className="rounded-full! px-7">
              Search Vehicles
            </Button>
            <div className="hidden md:block h-px flex-1 bg-linear-to-l from-transparent via-slate-200 to-transparent" />
          </div>
        </div>

        {/* For adding a critical classname*/}
        <div style={{ display: "none" }} className="grid grid-cols-2 text-sm text-center md:grid-cols-3 gap-3"></div>

        <Dynamic id="lazy-tabs">
          <LazyBannerTabs />
        </Dynamic>
      </div>
      <Script id="BannerSearch" options={{ wpBaseUrl, bannerTabs }}>
        {(gDom: any, options: { wpBaseUrl: string; bannerTabs: bannerTabProps[] }) => {
          const rootSection = gDom.geById("home_hero_banner_section");
          const brandDropDown = gDom.geById("brand_dropdown") as HTMLDivElement;
          const yearDropDown = gDom.geById("year_dropdown") as HTMLDivElement;
          const buySearchButton = gDom.geById("buy_search_button") as HTMLButtonElement;
          const bannerHeaderTab = gDom.geById("banner_header_tab") as HTMLDivElement;
          const bannerHeading = gDom.geById("banner_heading") as HTMLDivElement;
          const resultsBox = gDom.geById("keyword_results") as HTMLElement;
          const bannerSearchContainer = gDom.geById("banner_search_container") as HTMLDivElement;
          const mobileCloseButton = gDom.geById("mobile_close_button") as HTMLButtonElement;
          const buyViewAllCarsButton = gDom.geById("buy_view_all_cars_btn") as HTMLButtonElement;
          const searchSuggestionParent = gDom.geById("serach_suggestion_parent_div") as HTMLDivElement;
          const bannerScrollIcon = gDom.geById("banner-scroll-icon") as HTMLDivElement;

          const DROPDOWN_HEIGHT = 220;
          const searchParams = new URLSearchParams({
            ad_title: "",
            cat_id: "",
            year_from: "",
          });

          // Mobile viewport detection
          let isDesktop = window.innerWidth >= 1024;
          let isMobileOpen = false;

          const updateViewport = () => {
            isDesktop = window.innerWidth >= 1024;
            // Show container on desktop, hide on mobile unless opened
            if (isDesktop) {
              bannerSearchContainer.classList.remove("max-lg:hidden");
              bannerSearchContainer.style.display = "";
            } else if (!isMobileOpen) {
              bannerSearchContainer.classList.add("max-lg:hidden");
            }
          };

          window.addEventListener("resize", updateViewport);

          // Mobile close button handler
          mobileCloseButton.onclick = (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            isMobileOpen = false;
            if (!isDesktop) {
              bannerSearchContainer.classList.add("max-lg:hidden");
              // Reset active tab visually on mobile
              bannerHeaderTab.querySelectorAll<HTMLButtonElement>("button[data-bannertab]").forEach((btn) => {
                const indicator = btn.querySelector(".tab-indicator");
                const inactiveClasses = `relative px-2 lg:px-10 py-3 xl:text-lg rounded-t-xl font-bold capitalize transition-all duration-300 max-lg:flex-1 max-lg:rounded-none bg-white/20 backdrop-blur-md text-gray-300 hover:bg-white/30 max-lg:text-black ${btn?.dataset?.gradientbg ?? ""}`;
                btn.className = inactiveClasses;
                indicator?.classList.add("hidden");
              });
            }
          };

          const setDropdownDirection = (dropdown: HTMLElement) => {
            const toggle = dropdown.querySelector(".dropdown-toggle");
            const options = dropdown.querySelector(".dropdown-options") as HTMLElement;

            if (!toggle || !options) return;

            const rect = toggle.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;

            if (spaceBelow < DROPDOWN_HEIGHT) {
              // Open upwards
              options.style.bottom = "100%"; // bottom-full
              options.style.marginBottom = "0.5rem"; // mb-2
              options.style.marginTop = "0rem";
            } else {
              // Open downwards
              options.style.bottom = "auto";
              options.style.marginBottom = "0rem";
              options.style.marginTop = "0.5rem"; // mt-2
            }
          };

          const handleDropDownAction = (dropdown: HTMLElement) => {
            const options = dropdown.querySelector(".dropdown-options") as HTMLElement;
            const selectedText = dropdown.querySelector(".dropdown-selected") as HTMLSpanElement;
            const searchInput = dropdown.querySelector(".dropdown-search") as HTMLInputElement;
            const chevrondown = dropdown.querySelector(".dropdown-chevrondown") as HTMLElement;
            const closeIcon = dropdown.querySelector(".dropdown-close-icon") as HTMLElement;
            const isOpen = options.dataset.open === "true";
            const noOptionsFoundDiv = dropdown.querySelector(".no_options_found") as HTMLDivElement | null;

            // Close all dropdowns
            document.querySelectorAll<HTMLElement>(".dropdown-options").forEach((opt) => {
              opt.style.display = "none";
              opt.dataset.open = "false";
            });

            const resetSearchBox = () => {
              if (searchInput) {
                searchInput.value = "";
                options.querySelectorAll(".dropdown-option").forEach((item: any) => {
                  item.style.display = "";
                });
              }
            };

            if (!isOpen) {
              // Set direction BEFORE opening
              resetSearchBox();
              setDropdownDirection(dropdown);
              options.style.display = "block";
              options.dataset.open = "true";
            }

            // Search (only if exists)
            searchInput?.addEventListener("input", (e: any) => {
              let visibleCount = 0;
              const value = e.target.value.toLowerCase();
              options.querySelectorAll(".dropdown-option").forEach((item: any) => {
                const isMatch = item.dataset.name.toLowerCase().includes(value);
                item.style.display = isMatch ? "block" : "none";
                if (isMatch) visibleCount++;
              });

              if (noOptionsFoundDiv) noOptionsFoundDiv.style.display = visibleCount === 0 ? "" : "none";
            });

            // Select option (event delegation)
            options.addEventListener("click", (e: any) => {
              const item = e.target.closest(".dropdown-option");
              if (!item) return;

              selectedText.textContent = item.dataset.name;
              selectedText.classList.replace("text-gray-600", "text-black");
              options.style.display = "none";
              options.dataset.open = "false";

              const param = dropdown.dataset.type === "brand" ? { key: "cat_id", value: item.dataset.id } : { key: "year_from", value: item.dataset.name };
              searchParams.set(param?.key, param?.value);

              chevrondown.style.display = "none";
              closeIcon.style.display = "";
            });

            closeIcon.onclick = (e: any) => {
              e.stopPropagation();
              selectedText.textContent = dropdown.dataset.type === "brand" ? "Select brand" : "Select year";
              selectedText.classList.replace("text-black", "text-gray-600");
              chevrondown.style.display = "";
              closeIcon.style.display = "none";
              const param = dropdown.dataset.type === "brand" ? { key: "cat_id", value: "" } : { key: "year_from", value: "" };
              searchParams.set(param?.key, param?.value);
            };

            options?.addEventListener("click", (e: any) => {
              e.stopPropagation();
            });
          };

          brandDropDown.onclick = (e: any) => {
            e.stopPropagation();
            gDom.loadDynamicComponent("brand-element", () => {
              handleDropDownAction(gDom.geById("brand_dropdown"));
            });
          };

          yearDropDown.onclick = (e: any) => {
            e.stopPropagation();
            gDom.loadDynamicComponent("year-element", () => {
              handleDropDownAction(gDom.geById("year_dropdown"));
            });
          };

          const handleKeywordSearch = () => {
            const input = gDom.geById("keyword_input") as HTMLInputElement;

            if (!input || !resultsBox) return;

            let debounceTimer: any;

            input.addEventListener("input", () => {
              const keyword = input.value.trim();

              clearTimeout(debounceTimer);

              searchParams.set("ad_title", keyword ?? "");
              if (keyword.length < 2) {
                resultsBox.classList.add("hidden");
                resultsBox.innerHTML = "";
                return;
              }

              debounceTimer = setTimeout(() => {
                fetchResults(keyword);
              }, 100);
            });

            const fetchResults = async (keyword: string) => {
              // Handle Direction
              const rect = searchSuggestionParent.getBoundingClientRect();
              const spaceBelow = window.innerHeight - rect.bottom;

              if (spaceBelow < DROPDOWN_HEIGHT) {
                // Open upwards
                searchSuggestionParent.style.bottom = "100%"; // bottom-full
                searchSuggestionParent.style.marginBottom = "0.5rem"; // mb-2
                searchSuggestionParent.style.marginTop = "0rem";
              } else {
                // Open downwards
                searchSuggestionParent.style.bottom = "auto";
                searchSuggestionParent.style.marginBottom = "0rem";
                searchSuggestionParent.style.marginTop = "0.5rem"; // mt-2
              }

              try {
                resultsBox.classList.remove("hidden");
                resultsBox.innerHTML = `<div class="block px-4 py-3 text-gray-400">Searching...</div>`;

                const querySuggestionUrl = `${options?.wpBaseUrl}/wp-json/custom/v1/search?query=${encodeURIComponent(keyword)}`;
                const res = await fetch(querySuggestionUrl);

                const data = await res.json();

                renderResults(data?.suggestions ?? []);
              } catch (err) {
                resultsBox.innerHTML = `<div class="block px-4 py-3 text-red-500">Failed to load</div>`;
              }
            };

            const renderResults = (items: any[]) => {
              resultsBox.innerHTML = "";
              if (!items || items.length === 0) {
                resultsBox.innerHTML = `<div class="block px-4 py-3 text-gray-400">No results found</div>`;
                return;
              }
              items.forEach((item) => {
                const div = document.createElement("div");
                div.className = "px-4 py-3 hover:bg-gray-100 cursor-pointer";
                div.dataset.keyword = item.value;
                div.textContent = item.value;
                resultsBox.appendChild(div);
              });
            };

            // Handle click on result
            resultsBox.addEventListener("click", (e) => {
              const item = (e.target as HTMLElement).closest("[data-keyword]") as HTMLElement;
              if (!item) return;

              input.value = item.textContent ?? "";
              resultsBox.classList.add("hidden");

              searchParams.set("ad_title", item.dataset.keyword ?? "");
            });
          };

          buySearchButton.onclick = (e: any) => {
            e.preventDefault();
            const queryString = searchParams?.toString();
            window.location.href = `/inventory?${queryString}`;
          };

          bannerHeaderTab.onclick = (e) => {
            e.preventDefault();
            const button = (e.target as HTMLElement).closest<HTMLButtonElement>("button[data-bannertab]");
            if (!button) return;

            const activeTabKey = button.dataset.bannertab;

            // Open mobile container when tab is clicked
            if (!isDesktop) {
              isMobileOpen = true;
              bannerSearchContainer.classList.remove("max-lg:hidden");
            }

            gDom.loadDynamicComponent("lazy-tabs", () => {
              /* ---------- Toggle tab button styles ---------- */
              bannerHeaderTab.querySelectorAll<HTMLButtonElement>("button[data-bannertab]").forEach((btn) => {
                const indicator = btn.querySelector(".tab-indicator");

                const activeClasses =
                  "relative px-2 lg:px-10 py-3 xl:text-lg rounded-t-xl font-bold capitalize transition-all duration-300 max-lg:flex-1 max-lg:rounded-none bg-white text-black shadow-xl";
                const inactiveClasses = `relative px-2 lg:px-10 py-3 xl:text-lg rounded-t-xl font-bold capitalize transition-all duration-300 max-lg:flex-1 max-lg:rounded-none bg-white/20 backdrop-blur-md text-gray-300 hover:bg-white/30 max-lg:text-black ${btn?.dataset?.gradientbg ?? ""}`;

                if (btn === button) {
                  btn.className = activeClasses;
                  indicator?.classList.remove("hidden", "max-lg:hidden");
                } else {
                  btn.className = inactiveClasses;
                  indicator?.classList.add("hidden");
                }
              });

              /* ---------- Update View all cars button ---------- */
              buyViewAllCarsButton.style.display = activeTabKey === "buy" ? "" : "none";

              /* ---------- Update heading + description ---------- */
              const activeTab = options?.bannerTabs?.find(({ tab }) => tab === activeTabKey);

              const h2 = bannerHeading.querySelector<HTMLHeadingElement>("h2");
              const p = bannerHeading.querySelector<HTMLParagraphElement>("p");

              h2 && (h2.textContent = activeTab?.heading ?? "");
              p && (p.textContent = activeTab?.description ?? "");

              /* ---------- Toggle tab views ---------- */
              document.querySelectorAll<HTMLElement>(".banner_tab_view").forEach((view) => {
                view.style.display = view.getAttribute("banner-tab-view") === activeTabKey ? "" : "none";
              });
            });
          };

          // Close all modals on outside click
          document.addEventListener("click", (e: any) => {
            document.querySelectorAll(".dropdown-options").forEach((opt: any) => {
              opt.style.display = "none";
              opt.dataset.open = "false";
            });
            if (resultsBox) {
              resultsBox.classList.add("hidden");
              resultsBox.innerHTML = "";
            }
          });

          const playVideoBanner = () => {
            const posterImage = rootSection.querySelector("img");
            const videoSrc = posterImage?.getAttribute("data-video-src");
            if (videoSrc) {
              const videoEl = document.createElement("video");
              const source = document.createElement("source");

              videoEl.className = "absolute inset-0 w-full h-full object-cover";
              videoEl.muted = true;
              videoEl.loop = true;
              videoEl.playsInline = true;
              videoEl.preload = "metadata";
              videoEl.autoplay = true;
              videoEl.role = "presentation";
              videoEl.ariaHidden = "true";

              source.src = videoSrc;
              source.type = "video/mp4";

              videoEl.appendChild(source);

              videoEl.addEventListener("canplay", () => {
                posterImage?.remove();
              });

              posterImage?.parentNode?.insertBefore(videoEl, posterImage.nextSibling);
            }
          };

          bannerScrollIcon.onclick = () => {
            const header = gDom.geById("header") as HTMLDivElement;
            window.scrollTo({
              top: window.innerHeight - header?.offsetHeight,
              behavior: "smooth",
            });
          };

          if (!gDom.ftr) {
            playVideoBanner();
          } else {
            let isAlreadyTriggered = false;
            const handler = () => {
              if (isAlreadyTriggered) return;
              isAlreadyTriggered = true;
              ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach((e) => document?.removeEventListener(e, handler));
              playVideoBanner();
            };

            ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach((e) => document?.addEventListener(e, handler, { passive: true }));
          }

          handleKeywordSearch();
          updateViewport();
        }}
      </Script>
    </div>
  );
};

const LazyBannerTabs = () => {
  return (
    <>
      {/* SELL */}
      <div className="banner_tab_view space-y-4" style={{ display: "none" }} banner-tab-view="sell">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            id="sell_car_model"
            type="text"
            className="px-6 py-4 rounded-xl bg-gray-100 placeholder-gray-600"
            placeholder="Your car model"
            autoComplete="off"
          />
          <input
            id="sell_manuf_year"
            type="text"
            className="px-6 py-4 rounded-xl bg-gray-100 placeholder-gray-600"
            placeholder="Manufacturing year"
            autoComplete="off"
          />
        </div>
        <div className="relative flex items-center justify-center gap-4 pt-3">
          <div className="hidden md:block h-px flex-1 bg-linear-to-r from-transparent via-slate-200 to-transparent" />
          <Button id="get_best_offer" icon={HandCoins} className="rounded-full! px-7">
            Get Best Offer
          </Button>
          <div className="hidden md:block h-px flex-1 bg-linear-to-l from-transparent via-slate-200 to-transparent" />
        </div>
      </div>

      {/* TRADE */}
      <div className="banner_tab_view space-y-4" style={{ display: "none" }} banner-tab-view="trade in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            id="trade_car_model"
            type="text"
            className="px-6 py-4 rounded-xl bg-gray-100 placeholder-gray-600"
            placeholder="Current car model"
            autoComplete="off"
          />
          <input
            id="trade_car_want"
            type="text"
            className="px-6 py-4 rounded-xl bg-gray-100 placeholder-gray-600"
            placeholder="Car you want"
            autoComplete="off"
          />
        </div>
        <div className="relative flex items-center justify-center gap-4 pt-3">
          <div className="hidden md:block h-px flex-1 bg-linear-to-r from-transparent via-slate-200 to-transparent" />
          <Button id="find_trade_options" icon={RepeatIcon} className="rounded-full! px-7">
            Find Trade Options
          </Button>
          <div className="hidden md:block h-px flex-1 bg-linear-to-l from-transparent via-slate-200 to-transparent" />
        </div>
      </div>

      {/* SERVICES */}
      <div className="banner_tab_view grid grid-cols-2 text-sm text-center md:grid-cols-3 gap-3" style={{ display: "none" }} banner-tab-view="services">
        {[
          ["Custom Body Kit", CarIcon, "from-rose-500 to-orange-500"],
          ["Interior Detailing", SparklesIcon, "from-indigo-500 to-sky-500"],
          ["Ceramic Coating", ShieldIcon, "from-emerald-500 to-teal-500"],
          ["Vinyl Wrapping", PaletteIcon, "from-fuchsia-500 to-pink-500"],
          ["Exterior Detailing", Droplets, "from-cyan-500 to-blue-500"],
          ["Paint Protection Film", Layers, "from-amber-500 to-yellow-500"],
        ].map(([label, Icon, gradient]: any) => (
          <a
            key={label}
            href="/contact-us"
            className="px-2 py-4 font-bold flex flex-col items-center gap-2 border rounded-xl bg-primary/5 border-black/10 hover:bg-primary/20 transition-colors"
          >
            <div className={`w-10 h-10 rounded-full bg-linear-to-br ${gradient} flex items-center justify-center`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            {label}
          </a>
        ))}
      </div>
      <Script id="LazyBannerTabs">
        {(gDom: any) => {
          const getBestOffer = gDom.geById("get_best_offer") as HTMLButtonElement;
          const findTradeOptions = gDom.geById("find_trade_options") as HTMLButtonElement;

          const handleRedirection = (url: string, request: { key: string; value: string }[]) => {
            const searchParams = new URLSearchParams();
            request.forEach((each) => {
              searchParams.set(each.key, each.value);
            });
            window.location.href = `${url}?${searchParams.toString()}`;
          };

          getBestOffer.onclick = (e: any) => {
            e?.preventDefault();
            const request = [
              {
                key: "model",
                value: gDom.geById("sell_car_model")?.value ?? "",
              },
              {
                key: "year",
                value: gDom.geById("sell_manuf_year")?.value ?? "",
              },
            ];
            handleRedirection("/sell-car", request);
          };

          findTradeOptions.onclick = (e: any) => {
            e?.preventDefault();
            const request = [
              {
                key: "model",
                value: gDom.geById("trade_car_model")?.value ?? "",
              },
              {
                key: "want",
                value: gDom.geById("trade_car_want")?.value ?? "",
              },
            ];
            handleRedirection("/trade-in", request);
          };
        }}
      </Script>
    </>
  );
};

export default HomeHeroBanner;
