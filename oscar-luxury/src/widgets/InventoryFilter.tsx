/*
 * Copyright(c) 2026 Oscar.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Oscar ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Oscar.
 *
 *
 * @author Vishakh B S
 */
import Dropdown from "@common/components/Dropdown";
import Input from "@common/components/Input";
import Option from "@common/components/Option";
import { Button } from "@common/components/Button";
import { Script } from "streak/components";
import PlusIcon from "@common/icons/PlusIcon";
import MinusIcon from "@common/icons/MinusIcon";
import XIcon from "@common/icons/XIcon";
import ChevronsRight from "@common/icons/ChevronsRight";

const isSectionOpen = (key: string) => ["make", "price"].includes(key);

interface InventoryFilterPageData {
  filters: TypeInventoryFilterResponse;
  mobileOpen?: boolean;
}

interface InventoryFilterProps {
  data: InventoryFilterPageData;
}

export default function InventoryFilter(inventoryFilterProps: InventoryFilterProps) {
  const {
    filters = {
      categories: [],
      years: [],
      locations: [],
      engine_types: [],
      engine_capacity: [],
      color_family: [],
      car_insurance: [],
      car_assembly: [],
      transmissions: [],
      body_type: [],
      car_type: [],
      condition: [],
    },
    mobileOpen = false,
  } = inventoryFilterProps.data;

  const radiusOptions = ["5 KM", "10 KM", "50 KM", "100 KM"];

  // -- Render Helper --
  const renderSection = (id: string, title: string, children: React.ReactNode) => (
    <div className="border-b border-slate-100 filter-section" id={`section-${id}`}>
      <button
        type="button"
        className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 py-3 xl:py-3.5 hover:text-secondary section-toggle"
        data-target={`content-${id}`}
      >
        {title}
        <span className="icon-plus text-slate-400">
          <PlusIcon className="h-4 w-4 text-slate-400" />
        </span>
        <span className="icon-minus text-slate-400 hidden">
          <MinusIcon className="h-4 w-4 text-slate-400" />
        </span>
      </button>

      <div
        id={`content-${id}`}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isSectionOpen(id) ? "grid-rows-[1fr] opacity-100 open" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="mt-1 mb-4 space-y-4 px-1">{children}</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        id="mobile-filter-backdrop"
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      {/* Filter Container */}
      <div
        id="inventory-filter-container"
        className={`w-full lg:sticky lg:top-20 bg-white max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:z-50 max-lg:h-full max-lg:w-[300px] max-lg:p-4 max-lg:overflow-y-auto max-lg:transition-transform max-lg:duration-300 ${mobileOpen ? "translate-x-0" : "max-lg:-translate-x-full"}`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center mb-3 lg:hidden">
          <h4 className="text-lg font-semibold">Filters</h4>
          <button id="btn-close-mobile-filter" className="bg-slate-100 rounded-lg p-2">
            <XIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Desktop Header */}
        <div className="mb-2 border-b border-slate-100 pt-3 pb-6 max-lg:hidden">
          <h3 className="font-bold xl:text-xl">Filters</h3>
        </div>

        {/* 1. MAKE */}
        {renderSection("make", "Select Make", <Dropdown id="filter-make" placeholder="Select Make" search options={filters.categories.map((c) => c.name)} />)}

        {/* 2. LOCATIONS */}
        {renderSection(
          "locations",
          "Ads by Location",
          <div className="flex flex-col gap-3">
            {filters.locations.slice(0, 5).map((loc) => (
              <Button key={loc.id} variant="link" className="justify-start filter-link" data-param={`country_id=${loc.id}`}>
                <ChevronsRight className="h-4 w-4 text-slate-400 mr-2" />
                {loc.name} <span className="text-gray-500 ml-1">({loc.count})</span>
              </Button>
            ))}
          </div>
        )}

        {/* 3. PRICE (Dual Range Slider) */}
        {renderSection(
          "price",
          "Price",
          <>
            <p className="text-sm text-slate-500 mb-2">
              Price (AED) <span id="price-display-min">0</span> – <span id="price-display-max">0</span>
            </p>

            {/* Slider Component Wrapper */}
            <div className="relative h-6 w-full mb-4 mt-2 select-none" id="price-slider-container">
              {/* Visual Track (Gray Background) */}
              <div
                className="absolute left-0 right-0 h-1.5 bg-slate-200 rounded-full pointer-events-none"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              />

              {/* Active Range (Solid Blue) */}
              <div id="visual-range" className="absolute h-1.5 bg-[#3b82f6] rounded-full pointer-events-none" />

              {/* Visual Thumbs (Solid Blue Circles - Matching Design) */}
              <div id="visual-thumb-min" className="absolute w-5 h-5 bg-[#3b82f6] rounded-full cursor-pointer shadow-md z-20 pointer-events-none" />
              <div id="visual-thumb-max" className="absolute w-5 h-5 bg-[#3b82f6] rounded-full cursor-pointer shadow-md z-20 pointer-events-none" />

              {/* Ghost Inputs (Invisible but interactive) */}
              {/* Added 'price-slider' class as requested, though styling is handled inline/tailwind */}
              <input
                type="range"
                id="slider-min"
                min="0"
                max="10000000"
                step="1000"
                className="price-slider absolute top-0 left-0 w-full h-full appearance-none bg-transparent pointer-events-none z-30 opacity-0 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6"
              />
              <input
                type="range"
                id="slider-max"
                min="0"
                max="10000000"
                step="1000"
                className="price-slider absolute top-0 left-0 w-full h-full appearance-none bg-transparent pointer-events-none z-30 opacity-0 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6"
              />
            </div>

            {/* Inputs + Apply */}
            <div className="flex items-center gap-2 mb-2">
              <Input id="input-min-price" type="number" inputSize="sm" placeholder="Min" />
              <span className="text-slate-400">–</span>
              <Input id="input-max-price" type="number" inputSize="sm" placeholder="Max" />
            </div>
            <div className="mt-4">
              <Button id="btn-apply-price" variant="secondary" size="sm">
                Apply
              </Button>
            </div>
          </>
        )}

        {/* 4. MILEAGE */}
        {renderSection(
          "mileage",
          "Ad Mileage (Km)",
          <>
            <div className="flex items-center gap-2">
              <Input id="input-min-mileage" type="number" inputSize="sm" placeholder="From" />
              <span className="text-slate-400">–</span>
              <Input id="input-max-mileage" type="number" inputSize="sm" placeholder="To" />
            </div>
            <div className="mt-2">
              <Button id="btn-apply-mileage" variant="secondary" size="sm">
                Apply
              </Button>
            </div>
          </>
        )}

        {/* 5. YEAR */}
        {renderSection(
          "year",
          "Year",
          <>
            <div className="grid grid-cols-2 gap-4">
              <Dropdown id="year-from" inputSize="sm" placeholder="From" search options={filters.years.map((y) => y.name)} />
              <Dropdown id="year-to" inputSize="sm" placeholder="To" search options={filters.years.map((y) => y.name)} />
            </div>
            <div className="mt-2">
              <Button id="btn-apply-year" variant="secondary" size="sm">
                Apply
              </Button>
            </div>
          </>
        )}

        {/* 6. TRANSMISSION */}
        {renderSection(
          "transmission",
          "Transmission",
          <div className="flex flex-col gap-2 filter-group" data-param="transmission">
            {filters.transmissions.map((t) => (
              <Option key={t.id} type="radio" name="transmission" label={t.name} value={t.name} id={`trans-${t.id}`} />
            ))}
          </div>
        )}

        {/* 7. ENGINE TYPE */}
        {renderSection(
          "engine_type",
          "Engine Type",
          <div className="flex flex-col gap-2 filter-group" data-param="engine_type">
            {filters.engine_types.map((t) => (
              <Option key={t.id} type="radio" name="engine_type" label={t.name} value={t.name} id={`eng-${t.id}`} />
            ))}
          </div>
        )}

        {/* 8. ENGINE CAPACITY */}
        {renderSection(
          "engine_capacity",
          "Engine Capacity (CC)",
          <div className="flex flex-col gap-2 filter-group" data-param="engine_capacity">
            {filters.engine_capacity.map((e) => (
              <Option key={e.id} type="radio" name="engine_capacity" label={e.name} value={e.name} id={`cap-${e.id}`} />
            ))}
          </div>
        )}

        {/* 9. BODY TYPE */}
        {renderSection(
          "body_type",
          "Body Type",
          <div className="flex flex-col gap-2 filter-group" data-param="body_type">
            {filters.body_type.map((b) => (
              <Option key={b.id} type="radio" name="body_type" label={b.name} value={b.name} id={`body-${b.id}`} />
            ))}
          </div>
        )}

        {/* 10. COLOR FAMILY */}
        {renderSection(
          "color_family",
          "Color Family",
          <div className="flex flex-col gap-2 filter-group" data-param="color_family">
            {filters.color_family.map((c) => (
              <Option key={c.id} type="radio" name="color_family" label={c.name} value={c.name} id={`color-${c.id}`} />
            ))}
          </div>
        )}

        {/* 11. CAR TYPE */}
        {renderSection(
          "car_type",
          "Car Type",
          <div className="flex flex-col gap-2 filter-group" data-param="car_type">
            {filters.car_type.map((ct) => (
              <Option key={ct.id} type="radio" name="car_type" label={ct.name} value={ct.name} id={`cartype-${ct.id}`} />
            ))}
          </div>
        )}

        {/* 12. CAR INSURANCE */}
        {renderSection(
          "car_insurance",
          "Car Insurance",
          <div className="flex flex-col gap-2 filter-group" data-param="car_insurance">
            {filters.car_insurance.map((ci) => (
              <Option key={ci.id} type="radio" name="car_insurance" label={ci.name} value={ci.name} id={`insurance-${ci.id}`} />
            ))}
          </div>
        )}

        {/* 13. CAR ASSEMBLY */}
        {renderSection(
          "car_assembly",
          "Car Assembly",
          <div className="flex flex-col gap-2 filter-group" data-param="car_assembly">
            {filters.car_assembly.map((ca) => (
              <Option key={ca.id} type="radio" name="car_assembly" label={ca.name} value={ca.name} id={`assembly-${ca.id}`} />
            ))}
          </div>
        )}

        {/* 14. CONDITION */}
        {renderSection(
          "condition",
          "Condition",
          <div className="flex flex-col gap-2 filter-group" data-param="condition">
            {filters.condition.map((cond) => (
              <Option key={cond.id} type="radio" name="condition" label={cond.name} value={cond.name} id={`cond-${cond.id}`} />
            ))}
          </div>
        )}

        {/* 15. LOCATION RADIUS */}
        {renderSection(
          "location_radius",
          "Location with Radius",
          <>
            <div className="grid grid-cols-[1fr_38%] gap-4">
              <Dropdown id="loc-radius-city" search placeholder="Location" options={filters.locations.filter((l) => l.count > 0).map((l) => l.name)} />
              <Dropdown id="loc-radius-dist" placeholder="Radius" options={radiusOptions} />
            </div>
            <div className="mt-2">
              <Button size="sm" variant="secondary" id="btn-apply-radius">
                Apply
              </Button>
            </div>
          </>
        )}
      </div>
      <Script id="inventory-filter-script">
        {(gDom) => {
          const doc = gDom.document;

          // --- 1. UTILS ---
          const updateURL = (params: Record<string, string | null>) => {
            const url = new URL(doc.location.href);
            Object.entries(params).forEach(([key, val]) => {
              if (val && val !== "") url.searchParams.set(key, val);
              else url.searchParams.delete(key);
            });
            url.searchParams.set("page", "1");
            doc.location.href = url.toString();
          };

          // --- 2. ACCORDION ---
          doc.querySelectorAll(".section-toggle").forEach((btn) => {
            btn.addEventListener("click", () => {
              const targetId = btn.getAttribute("data-target");
              const content = doc.getElementById(targetId!);
              const iconPlus = btn.querySelector(".icon-plus");
              const iconMinus = btn.querySelector(".icon-minus");

              if (content) {
                const isOpen = content.classList.contains("grid-rows-[1fr]");
                if (isOpen) {
                  content.classList.replace("grid-rows-[1fr]", "grid-rows-[0fr]");
                  content.classList.remove("opacity-100");
                  iconPlus?.classList.remove("hidden");
                  iconMinus?.classList.add("hidden");
                } else {
                  content.classList.replace("grid-rows-[0fr]", "grid-rows-[1fr]");
                  content.classList.add("opacity-100");
                  iconPlus?.classList.add("hidden");
                  iconMinus?.classList.remove("hidden");
                }
              }
            });
          });

          // --- 3. FILTER RADIOS ---
          doc.querySelectorAll(".filter-group input").forEach((input: any) => {
            input.addEventListener("change", () => {
              const paramKey = input.closest(".filter-group")?.getAttribute("data-param");
              if (paramKey) updateURL({ [paramKey]: input.value });
            });
          });

          // --- 4. DROPDOWNS ---
          let yearFromVal: string | null = null;
          let yearToVal: string | null = null;

          doc.addEventListener("streak-dropdown-change", (e: any) => {
            const { id, value } = e.detail;
            if (id === "filter-make") updateURL({ cat_id: value });
            if (id === "year-from") yearFromVal = value;
            if (id === "year-to") yearToVal = value;
          });

          // --- 5. PRICE SLIDER ---
          const minSlider = doc.getElementById("slider-min") as HTMLInputElement;
          const maxSlider = doc.getElementById("slider-max") as HTMLInputElement;
          const sliderContainer = doc.getElementById("price-slider-container");
          const visualRange = doc.getElementById("visual-range") as HTMLElement | null;
          const visualThumbMin = doc.getElementById("visual-thumb-min") as HTMLElement | null;
          const visualThumbMax = doc.getElementById("visual-thumb-max") as HTMLElement | null;

          const minInput = doc.getElementById("input-min-price") as HTMLInputElement;
          const maxInput = doc.getElementById("input-max-price") as HTMLInputElement;
          const priceDisplayMin = doc.getElementById("price-display-min");
          const priceDisplayMax = doc.getElementById("price-display-max");

          if (minSlider && maxSlider && minInput && maxInput) {
            const TRACK_PADDING_PERCENT = 3;
            const TRACK_USABLE_PERCENT = 100 - TRACK_PADDING_PERCENT * 2;
            let visualLocked = true;

            const sliderMinVal = parseInt(minSlider.min);
            const sliderMaxVal = parseInt(maxSlider.max);

            const getURLNumber = (key: string, fallback: number) => {
              const v = new URLSearchParams(doc.location.search).get(key);
              const n = Number(v);
              return Number.isFinite(n) ? n : fallback;
            };

            const urlParams = new URLSearchParams(doc.location.search);
            const hasMinParam = urlParams.has("min_price");
            const hasMaxParam = urlParams.has("max_price");

            let safeMin: number;
            let safeMax: number;

            if (!hasMinParam && !hasMaxParam) {
              safeMin = sliderMinVal;
              safeMax = sliderMaxVal;
            } else {
              const baselineMin = getURLNumber("min_price", sliderMinVal);
              const baselineMax = getURLNumber("max_price", sliderMaxVal);

              safeMin = Math.max(sliderMinVal, Math.min(baselineMin, sliderMaxVal));
              safeMax = Math.max(safeMin, Math.min(baselineMax, sliderMaxVal));
            }

            minSlider.value = String(safeMin);
            maxSlider.value = String(safeMax);
            minInput.value = String(safeMin);
            maxInput.value = String(safeMax);

            const thumbOffset = (el: HTMLElement | null) => (el ? el.offsetWidth / 2 : 0);

            const updateUI = () => {
              let min = parseInt(minSlider.value);
              let max = parseInt(maxSlider.value);

              if (min > max) [min, max] = [max, min];

              min = Math.max(sliderMinVal, Math.min(min, sliderMaxVal));
              max = Math.max(sliderMinVal, Math.min(max, sliderMaxVal));

              const minPercent = TRACK_PADDING_PERCENT + (min / sliderMaxVal) * TRACK_USABLE_PERCENT;
              const maxPercent = TRACK_PADDING_PERCENT + (max / sliderMaxVal) * TRACK_USABLE_PERCENT;

              if (!visualLocked) {
                if (visualRange) {
                  visualRange.style.left = `${minPercent}%`;
                  visualRange.style.width = `${maxPercent - minPercent}%`;
                }

                if (visualThumbMin) {
                  visualThumbMin.style.left = `calc(${minPercent}% - ${thumbOffset(visualThumbMin)}px)`;
                }

                if (visualThumbMax) {
                  visualThumbMax.style.left = `calc(${maxPercent}% - ${thumbOffset(visualThumbMax)}px)`;
                }
              }

              if (doc.activeElement !== minInput) minInput.value = String(min);
              if (doc.activeElement !== maxInput) maxInput.value = String(max);
              if (priceDisplayMin) priceDisplayMin.innerText = min.toLocaleString();
              if (priceDisplayMax) priceDisplayMax.innerText = max.toLocaleString();
            };

            if (visualRange && visualThumbMin && visualThumbMax) {
              [visualRange, visualThumbMin, visualThumbMax].forEach((el) => {
                el.style.top = "50%";
                el.style.transform = "translateY(-50%)";
              });
            }

            [minSlider, maxSlider].forEach((el) => el.addEventListener("input", updateUI));

            sliderContainer?.addEventListener("click", (e) => {
              if ((e.target as HTMLElement).tagName === "INPUT") return;

              const rect = sliderContainer.getBoundingClientRect();
              const rawPercent = ((e.clientX - rect.left) / rect.width) * 100;

              const usablePercent = Math.min(TRACK_USABLE_PERCENT, Math.max(0, rawPercent - TRACK_PADDING_PERCENT));

              const value = Math.round((usablePercent / TRACK_USABLE_PERCENT) * sliderMaxVal);
              const clampedValue = Math.max(sliderMinVal, Math.min(value, sliderMaxVal));

              const curMin = parseInt(minSlider.value);
              const curMax = parseInt(maxSlider.value);

              if (Math.abs(clampedValue - curMin) < Math.abs(clampedValue - curMax)) {
                minSlider.value = String(clampedValue);
              } else {
                maxSlider.value = String(clampedValue);
              }

              updateUI();
            });

            minInput.addEventListener("input", () => {
              const v = Number(minInput.value);
              if (!Number.isFinite(v)) return;
              minSlider.value = String(v);
              updateUI();
            });

            maxInput.addEventListener("input", () => {
              const v = Number(maxInput.value);
              if (!Number.isFinite(v)) return;
              maxSlider.value = String(v);
              updateUI();
            });

            updateUI();
            requestAnimationFrame(() => {
              visualLocked = false;
              updateUI();
            });
          }

          // --- 6. APPLY BUTTONS ---
          doc.getElementById("btn-apply-price")?.addEventListener("click", () => {
            const v1 = parseInt(minInput.value || "0");
            const v2 = parseInt(maxInput.value || "10000000");
            updateURL({
              min_price: String(Math.min(v1, v2)),
              max_price: String(Math.max(v1, v2)),
            });
          });

          doc.getElementById("btn-apply-mileage")?.addEventListener("click", () => {
            const minM = (doc.getElementById("input-min-mileage") as HTMLInputElement)?.value;
            const maxM = (doc.getElementById("input-max-mileage") as HTMLInputElement)?.value;
            updateURL({ mileage_from: minM, mileage_to: maxM });
          });

          doc.getElementById("btn-apply-year")?.addEventListener("click", () => {
            updateURL({ year_from: yearFromVal, year_to: yearToVal });
          });

          // --- 7. MOBILE TOGGLE ---
          doc.addEventListener("streak-toggle-filters", () => {
            const container = doc.getElementById("inventory-filter-container");
            const backdrop = doc.getElementById("mobile-filter-backdrop");
            container?.classList.remove("-translate-x-full");
            container?.classList.add("translate-x-0");
            backdrop?.classList.remove("opacity-0", "pointer-events-none");
            backdrop?.classList.add("opacity-100");
          });

          doc.getElementById("btn-close-mobile-filter")?.addEventListener("click", () => {
            const container = doc.getElementById("inventory-filter-container");
            const backdrop = doc.getElementById("mobile-filter-backdrop");
            container?.classList.add("-translate-x-full");
            container?.classList.remove("translate-x-0");
            backdrop?.classList.add("opacity-0", "pointer-events-none");
            backdrop?.classList.remove("opacity-100");
          });

          doc.getElementById("mobile-filter-backdrop")?.addEventListener("click", () => {
            doc.getElementById("btn-close-mobile-filter")?.click();
          });
        }}
      </Script>
    </>
  );
}
