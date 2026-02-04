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
 * @author Ram
 */

import Car from "@common/icons/CarIcon";
import ChevronDown from "@common/icons/ChevronDown";
import clsx from "clsx";
import Dropdown from "@common/components/ContactDropdown";
import { Script } from "streak/components";
import { Dynamic } from "streak/components";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  id: string;
  label: string;
  icon: React.ElementType;
  faqs: FaqItem[];
};

type FaqProps = {
  data: FaqCategory[];
};

const FaqWidget = (props: FaqProps) => {
  let carY = 0;
  let FaqCategories = props?.data;
  let activeCategory = FaqCategories[0]?.id;
  const visibleCategories = FaqCategories.slice(0, 6);

  return (
    <>
      <section className="py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4">
          {/* Mobile Dropdown */}
          <div className="lg:hidden">
            <Dropdown
              placeholder="Select category"
              options={FaqCategories.map((c) => c.label)}
              dropid="faq"

            />
          </div>


          <aside className="hidden lg:flex ">
            <div className="sticky top-24 w-90">
              <div className="absolute left-0 top-0 bottom-0 border-l-2 border-dotted border-gray-300" />
              <div id="car-icon"
                className="absolute z-20 left-3 -translate-x-1/2 transition-top duration-500 ease-in-out"
              >
                <Car className="w-6 h-6 text-primary drop-shadow-md rotate-90" />
              </div>
              <div className="category-parent flex flex-col gap-3 pl-10">
                {visibleCategories.map((cat, index) => {
                  const Icon = cat.icon;
                  const active = cat.id === activeCategory;

                  return (
                    <button
                      id={cat.id}
                      className={clsx(
                        "category group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2",
                        active
                          ? "bg-primary text-slate-800 shadow-md scale-[1.03]"
                          : "bg-white text-gray-600 hover:bg-orange-100 hover:text-slate-800",
                      )}
                    >
                      <div
                        className={clsx(
                          "category-icon-wrapper flex items-center justify-center w-9 h-9 rounded-full transition-colors",
                          active
                            ? "bg-white/30"
                            : "bg-gray-100 group-hover:bg-orange-200",
                        )}
                      >
                        <Icon
                          className={clsx(
                            "category-icon w-5 h-5 transition-colors",
                            active
                              ? "text-slate-800"
                              : "text-gray-600 group-hover:text-slate-800",
                          )}
                        />
                      </div>

                      <span className="font-semibold text-left">{cat.label}</span>
                    </button>
                  );
                })}
                
                <Dynamic id="more_category">
                  <div id="add-category" className="flex flex-col gap-3">
                    {FaqCategories.slice(6, FaqCategories.length).map((cat) => {
                      const Icon = cat.icon;

                      return (
                        <button
                          key={cat.id}
                          id={cat.id}
                          className={clsx(
                            "category group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2 bg-white text-gray-600 hover:bg-orange-100 hover:text-slate-800"
                          )}
                        >
                          <div
                            className={clsx(
                              "category-icon-wrapper flex items-center justify-center w-9 h-9 rounded-full transition-colors bg-gray-100 group-hover:bg-orange-200"
                            )}
                          >
                            <Icon
                              className={clsx(
                                "category-icon w-5 h-5 transition-colors text-gray-600 group-hover:text-slate-800"
                              )}
                            />
                          </div>

                          <span className="font-semibold text-left">{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </Dynamic>

                {FaqCategories.length > 6 && (

                  <button
                    id="see-more"
                    type="button"
                    className="mt-2 flex items-center gap-2 text-sm text-secondary font-medium hover:underline"
                  >
                    {`Show ${FaqCategories.length - 6} more`}
                  </button>
                )}
              </div>
            </div>
          </aside>
          <div className="hidden grid-rows-[0fr] grid-rows-[1fr] rotate-180"></div>

          {FaqCategories?.map((cat, index) => (

            <>
              <div
                data-wrap={`${cat?.id}`}
                className={clsx("space-y-4 lg:pl-6 pr-2 overflow-y-auto max-h-[80vh]", activeCategory === cat?.id ? "" : "hidden")}>
                <div className="sticky top-0 z-10 bg-white pb-4">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                    {cat?.label}
                  </h2>
                </div>

                {cat?.faqs.map((faq, index) => {
                  const open = false;
                  return (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                      data-key={`${index}`}
                    >
                      <button
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-linear-to-b hover:from-gray-50/70 hover:to-white"
                      >
                        <span className="font-semibold text-gray-900">
                          {faq.question}
                        </span>
                        <div data-icon={`${index}`}>
                          <ChevronDown
                            className={clsx(
                              "h-5 w-5 shrink-0 transition-transform duration-300"
                            )}
                          />
                        </div>
                      </button>
                      <div
                        data-grid
                        className={clsx(
                          "grid transition-all duration-300 ease-in-out",
                          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                        )}
                      >
                        <div className="overflow-hidden" data-value={`${index}`}>
                          <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ))}
        </div>

      </section>
      <Script id="FaqWidget" options={{ FaqCategories: FaqCategories, activeCategory: activeCategory } as any}>
        {(gDom: any, options: any) => {
          let { FaqCategories, activeCategory } = options;
          let isExpanded = false;
          let isLoaded = false;
          const carHeight = 24;

          const carIcon = document.getElementById("car-icon") as HTMLElement;
          const categoryParent = document.querySelector(".category-parent") as HTMLElement;
          const seeMore = document.getElementById("see-more") as HTMLElement;
          const dropdownvalue = document.getElementById("faq") as HTMLElement;
          const dropdown = document.getElementById(`dropdownReffaq`) as HTMLElement;

          const setCarPos = (activeId: string) => {
            const el = document.getElementById(activeId);
            if (!el || !carIcon) return;

            const y =
              el.offsetTop +
              el.offsetHeight / 2 -
              carHeight / 2;

            carIcon.style.top = `${y}px`;
          };


          const setActiveCategory = (newCategoryId: string) => {
            const oldCategoryId = activeCategory;
            const oldCategory = activeCategory
              ? document.getElementById(activeCategory)
              : null;

            if (oldCategory) {
              oldCategory.classList.remove(
                "bg-primary",
                "text-slate-800",
                "shadow-md",
                "scale-[1.03]"
              );
              oldCategory.classList.add(
                "bg-white",
                "text-gray-600",
                "hover:bg-orange-100",
                "hover:text-slate-800"
              );

              const oldIconWrapper = oldCategory.querySelector(".category-icon-wrapper");
              const oldIcon = oldCategory.querySelector(".category-icon");

              oldIconWrapper?.classList.remove("bg-white/30");
              oldIconWrapper?.classList.add("bg-gray-100", "group-hover:bg-orange-200");

              oldIcon?.classList.remove("text-slate-800");
              oldIcon?.classList.add("text-gray-600", "group-hover:text-slate-800");
            }
            const newCategory = document?.getElementById(newCategoryId);
            if (newCategory) {
              newCategory.classList.add(
                "bg-primary",
                "text-slate-800",
                "shadow-md",
                "scale-[1.03]"
              );
              newCategory.classList.remove(
                "bg-white",
                "text-gray-600",
                "hover:bg-orange-100",
                "hover:text-slate-800"
              );

              const newIconWrapper = newCategory.querySelector(".category-icon-wrapper");
              const newIcon = newCategory.querySelector(".category-icon");

              newIconWrapper?.classList.add("bg-white/30");
              newIconWrapper?.classList.remove("bg-gray-100", "group-hover:bg-orange-200");

              newIcon?.classList.add("text-slate-800");
              newIcon?.classList.remove("text-gray-600", "group-hover:text-slate-800");

            }
            activeCategory = newCategoryId;
            showCategory(activeCategory, oldCategoryId);
            setCarPos(activeCategory);
            updateDropdown();
          };

          const showCategory = (newCategoryId: string, oldCategoryId: string) => {
            const oldCat = document.querySelector(
              `[data-wrap="${oldCategoryId}"]`
            ) as HTMLElement | null;

            const newCat = document.querySelector(
              `[data-wrap="${newCategoryId}"]`
            ) as HTMLElement | null;

            oldCat?.classList.add("hidden");
            newCat?.classList.remove("hidden");
          };

          const changeCategory = (e: Event) => {
            const target = e.target as HTMLElement;

            const closestEl = target.closest(".category") as HTMLElement;

            if (!closestEl) return;

            const catId: string = closestEl?.getAttribute("id")!;

            setActiveCategory(catId);
          };
          const LoadMore = () => {
            isExpanded = !isExpanded;

            const addCategory = document.getElementById("add-category");

            if (isExpanded) {
              if (!isLoaded) {
                gDom.loadDynamicComponent("more_category", () => {
                  console.log("more_category loaded");
                  isLoaded = true;
                  setActiveCategory(activeCategory);
                });
              }

              addCategory?.classList.remove("hidden");
              seeMore.textContent = "Show less";
            } else {
              addCategory?.classList.add("hidden");
              seeMore.textContent = `Show ${FaqCategories.length - 6} more`;
            }
          };

          const updateDropdown = () => {
            const active = FaqCategories.find(
              (cat: FaqCategory) => cat.id === activeCategory
            );

            dropdownvalue.textContent = active?.label || "";
            dropdownvalue.classList.remove("text-slate-400");
          };
          const handleDropDownClick = (e: any) => {
            const optionBtn = e.target.closest("button[data-value]");
            if (!optionBtn) return;

            const value = optionBtn.dataset.value;

            const currentCat = FaqCategories.find(
              (cat: FaqCategory) => cat.label === value
            );

            setActiveCategory(currentCat.id);
          };

          function handleFaqToggle(e: Event) {
            const button = (e.target as HTMLElement).closest("button");
            if (!button) return;

            const faqItem = button.closest("[data-key]") as HTMLElement | null;
            const wrap = button.closest("[data-wrap]") as HTMLElement | null;
            if (!faqItem || !wrap) return;

            const grid = faqItem.querySelector("[data-grid]") as HTMLElement | null;
            const icon = faqItem.querySelector("[data-icon] svg") as HTMLElement | null;
            if (!grid) return;

            const isOpen = grid.classList.contains("grid-rows-[1fr]");

            if (isOpen) {
              grid.classList.remove("grid-rows-[1fr]");
              grid.classList.add("grid-rows-[0fr]");
              icon?.classList.remove("rotate-180");
              return;
            }

            wrap.querySelectorAll("[data-grid]").forEach((g) => {
              g.classList.remove("grid-rows-[1fr]");
              g.classList.add("grid-rows-[0fr]");
            });

            wrap.querySelectorAll("[data-icon] svg").forEach((i) => {
              i.classList.remove("rotate-180");
            });
            grid.classList.remove("grid-rows-[0fr]");
            grid.classList.add("grid-rows-[1fr]");
            icon?.classList.add("rotate-180");
          }


          categoryParent?.addEventListener("click", changeCategory);
          seeMore?.addEventListener("click", LoadMore);
          document.addEventListener("click", handleFaqToggle);
          dropdown.addEventListener("click", (e) => { handleDropDownClick(e) });
          gDom.addEventListener("resize", () => { setCarPos(activeCategory) });

          requestAnimationFrame(() => setCarPos(activeCategory));
          updateDropdown();
        }}

      </Script>
    </>
  );

}
export default FaqWidget;