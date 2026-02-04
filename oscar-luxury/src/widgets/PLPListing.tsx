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
 * @author Minna Ancy Mathew
 */

import EyeIcon from "@common/icons/EyeIcon";
import CalendarClock from "@common/icons/CalendarClock";
import Package2 from "@common/icons/Package2";
import Tag from "@common/icons/Tag";
import ShieldCheck from "@common/icons/ShieldCheck";
import Wrench from "@common/icons/Wrench";
import MapPin from "@common/icons/MapPin";
import HandCoins from "@common/icons/HandCoins";
import ClockCheck from "@common/icons/ClockCheck";
import Pagination from "@common/components/Pagination";
import { Dynamic, Script } from "streak/components";
import { wpBaseUrl } from "@utils/config";

type Props = {
  data?: {
    taxonomy: string;
    slug: string;
    products?: any[];
    pagination?: {
      totalRecords?: number;
      totalPages: number;
      currentPage: number;
      recordsPerPage?: number;
    };
  };
};

const formatPrice = (price: string | null, type: string) => {
  if (!price || type === "No price") return "Price on Request";
  return `AED ${Number(price).toLocaleString()}`;
};

const buildLocation = (location: any) => {
  if (!location) return "";
  return [location.town, location.city, location.state, location.country].filter(Boolean).join(", ");
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return "";
  const date = new Date(dateStr.replace(" ", "T"));
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const getSortedCategories = (item: any) => {
  const categories: Array<Record<string, any>> = item?.taxonomies?.ad_cats ?? [];
  return categories?.sort((a, b) => a.id - b.id) ?? [];
};

const ProductCard = ({ item, index }: { item: Record<string, any>; index: number }) => {
  const location = buildLocation(item.location);
  const price = formatPrice(item.price, item.price_type);
  const hoverImage = item.gallery?.[1] || "/images/favicon/favicon.ico";
  const sortedCategories = getSortedCategories(item);
  const modelText = sortedCategories
    ?.map((each) => each?.name)
    ?.filter(Boolean)
    .join(" ");

  return (
    <div
      key={item.id || item.slug}
      id="product-template"
      data-template
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr]"
    >
      {/* IMAGE SECTION */}
      <a href={`/ad/${item.slug}`} className="block">
        <div className="relative h-52 xl:h-56 overflow-hidden">
          <img
            data-featured-image
            src={item.featured_image}
            alt={item.title}
            loading={index === 0 ? "eager" : "lazy"}
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
            className={`object-cover w-full h-full ${hoverImage ? "group-hover:opacity-0 transition duration-700" : ""}`}
          />

          <img
            data-hover-image
            src={hoverImage}
            alt={item.title}
            loading="lazy"
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
            className="absolute inset-0 object-cover w-full h-full opacity-0 group-hover:opacity-100 transition duration-700"
          />

          <div className="absolute bottom-2 left-2">
            <span data-photo-count className="inline-flex items-center bg-black/60 text-white gap-1 rounded-full px-3 py-1 text-xs font-semibold">
              {item.gallery?.length || 0} Photos
            </span>
          </div>
        </div>
      </a>

      {/* CENTER CONTENT */}
      <div className="p-5 space-y-3 min-w-0">
        <div data-brand className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          {sortedCategories?.[0]?.name || item.bread_crumb || ""}
        </div>

        <h2 className="text-lg font-semibold text-slate-900">
          <a data-title href={`/ad/${item.slug}`} className="block w-full truncate underline-offset-2 hover:underline">
            {item.title || ""}
          </a>
        </h2>

        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 mt-0.5 text-gray-500" />
          <span data-location className="text-sm text-gray-500">
            {location || ""}
          </span>
        </div>

        <p data-description className="text-sm text-gray-500 truncate">
          {item.paragraph || ""}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          {/* MODEL */}
          <div className="flex gap-2">
            <CalendarClock className="h-4 w-4 mt-1 text-gray-500" />
            <div>
              <div className="text-sm font-semibold">Model</div>
              <div data-model className="text-sm text-gray-500 mt-1">
                {modelText}
              </div>
            </div>
          </div>

          {/* CONDITION */}
          <div className="flex gap-2">
            <Wrench className="h-4 w-4 mt-1 text-gray-500" />
            <div>
              <div className="text-sm font-semibold">Condition</div>
              <div data-condition className="text-sm text-gray-500 mt-1">
                {item.private_meta?._carspot_ad_condition || ""}
              </div>
            </div>
          </div>

          {/* WARRANTY */}
          <div className="flex gap-2">
            <ShieldCheck className="h-4 w-4 mt-1 text-gray-500" />
            <div>
              <div className="text-sm font-semibold">Warranty</div>
              <div data-warranty className="text-sm text-gray-500 mt-1">
                {item.private_meta?._carspot_ad_warranty === "Yes" ? "Available" : "No"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-col border-s border-slate-100">
        <div className="flex flex-wrap gap-y-2 gap-x-4 px-5 py-3 mb-auto">
          <div className="flex items-center gap-1 rounded-full border border-slate-100 px-4 py-2 shadow-xs">
            <Package2 className="w-4 h-4 text-gray-500" />
            <span data-ad-type className="text-sm">
              {item.private_meta?._carspot_ad_type || ""}
            </span>
          </div>

          <div className="flex items-center gap-1 rounded-full border border-slate-100 px-4 py-2 shadow-xs">
            <EyeIcon className="w-4 h-4 text-gray-500" />
            <span data-visits className="text-sm">
              {item.visits || ""}
            </span>
          </div>

          <div className="flex items-center gap-1 rounded-full border border-slate-100 px-4 py-2 shadow-xs">
            <Tag className="w-4 h-4 text-gray-500" />
            <span data-condition-panel className="text-sm">
              {item.private_meta?._carspot_ad_condition || ""}
            </span>
          </div>

          <div className="flex items-center gap-1 rounded-full border border-slate-100 px-4 py-2 shadow-xs">
            <HandCoins className="w-4 h-4 text-gray-500" />
            <span data-price-type className="text-sm">
              {item.price_type || ""}
            </span>
          </div>

          <div className="flex items-center gap-1 rounded-full border border-slate-100 px-4 py-2 shadow-xs">
            <ClockCheck className="h-4 w-4 mt-1 text-gray-500" />
            <span data-date className="text-sm">
              {formatDate(item.date)}
            </span>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-slate-100 bg-slate-50 px-5 py-3">
          <span data-price className="text-sm font-bold text-slate-700">
            {price}
          </span>

          <a href={`/ad/${item.slug}`} className="text-sm font-semibold">
            Show Details
          </a>
        </div>
      </div>
    </div>
  );
};

const PLPListing = (props: Props) => {
  const products = props?.data?.products || [];
  const pagination = props?.data?.pagination;

  if (!products.length) {
    return <div className="container py-10 text-center text-gray-500">No products found</div>;
  }

  const topProducts = products?.slice(0, 2);
  const restProducts = products?.slice(2);

  return (
    <section className="w-full bg-white py-12 lg:py-20 xl:py-24">
      <div className="container">
        <div className="xl:w-11/12 xl:mx-auto">
          <div id="plp-list" className="grid grid-cols-1 gap-4 lg:gap-8">
            {topProducts?.map((item: any, index: number) => (
              <ProductCard item={item} index={index} />
            ))}
            <Dynamic id="lazy-category-cards">
              {restProducts?.map((item: any, index: number) => (
                <ProductCard item={item} index={index + 2} />
              ))}
            </Dynamic>
          </div>
          {pagination && pagination.totalPages > 1 && <Pagination totalPages={Number(pagination.totalPages)} />}
        </div>
      </div>

      <Script id="category-listing" options={{ wpBaseUrl, totalPages: pagination?.totalPages || 1, taxonomy: props?.data?.taxonomy, slug: props?.data?.slug }}>
        {(gDom: any, options: any) => {
          const ad_cats = options?.taxonomy;
          const slug = options?.slug;
          const nextBtn = gDom.geById("pagination-next") as HTMLButtonElement | null;
          const prevBtn = gDom.geById("pagination-previous") as HTMLButtonElement | null;
          const pageNumbersParent = gDom.geById("pagination-numbers") as HTMLDivElement | null;

          const formatPrice = (price: string | null, type: string) => {
            if (!price || type === "No price") return "Price on Request";
            return `AED ${Number(price).toLocaleString()}`;
          };

          const buildLocation = (location: any) => {
            if (!location) return "";
            return [location.town, location.city, location.state, location.country].filter(Boolean).join(", ");
          };

          const formatDate = (dateStr: string) => {
            if (!dateStr) return "";
            const date = new Date(dateStr.replace(" ", "T"));
            return date.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            });
          };

          const getSortedCategories = (item: any) => {
            const categories: Array<Record<string, any>> = item?.taxonomies?.ad_cats ?? [];
            return categories?.sort((a, b) => a.id - b.id) ?? [];
          };

          const setText = (root: HTMLElement, selector: string, value: string | number) => {
            const el = root.querySelector(selector);
            if (el) el.textContent = String(value);
          };

          const renderResults = (products: any) => {
            const grid = document.getElementById("plp-list");
            const template = document.getElementById("product-template");

            if (!grid || !template) return;
            const cloneArray: HTMLElement[] = [];

            products?.forEach((item: Record<string, any>) => {
              const location = buildLocation(item.location);
              const price = formatPrice(item.price, item.price_type);
              const hoverImage = item.gallery?.[1] || "/images/favicon/favicon.ico";
              const photoCount = item.gallery?.length || 0;
              const sortedCategories = getSortedCategories(item);
              const modelText = sortedCategories
                ?.map((each) => each?.name)
                ?.filter(Boolean)
                .join(" ");

              const clone = template.cloneNode(true) as HTMLElement;

              // LINKS
              clone?.querySelectorAll("a").forEach((a) => {
                a.href = `/ad/${item.slug}`;
              });

              // IMAGES
              const featuredImg = clone?.querySelector("[data-featured-image]");
              if (featuredImg && featuredImg instanceof HTMLImageElement) {
                featuredImg.src = item.featured_image;
                featuredImg.alt = item.title;
              }

              const hoverImg = clone?.querySelector("[data-hover-image]");
              if (hoverImage && hoverImg && hoverImg instanceof HTMLImageElement) {
                hoverImg.src = hoverImage;
                hoverImg.alt = item.title;
              }

              // PHOTO COUNT
              const photoEl = clone?.querySelector("[data-photo-count]");
              if (photoEl && photoEl instanceof HTMLElement) {
                photoEl.textContent = `${photoCount || 0} Photos`;
              }

              // TEXT
              setText(clone, "[data-brand]", sortedCategories?.[0]?.name || item.bread_crumb || "");
              setText(clone, "[data-title]", item.title);
              setText(clone, "[data-location]", location || "");
              setText(clone, "[data-description]", item.paragraph || "");
              setText(clone, "[data-model]", modelText || "");
              setText(clone, "[data-condition]", item.private_meta?._carspot_ad_condition || "");
              setText(clone, "[data-condition-panel]", item.private_meta?._carspot_ad_condition || "");
              setText(clone, "[data-warranty]", item.private_meta?._carspot_ad_warranty === "Yes" ? "Available" : "No");
              setText(clone, "[data-ad-type]", item.private_meta?._carspot_ad_type || "");
              setText(clone, "[data-visits]", item.visits || 0);
              setText(clone, "[data-price-type]", item.price_type || "");
              setText(clone, "[data-date]", formatDate(item.date));
              setText(clone, "[data-price]", price);

              cloneArray.push(clone);
            });

            if (cloneArray?.length > 0) {
              grid.replaceChildren(...cloneArray);
            }

            template.remove();

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          };

          const getPages = (current: number, total: number) => {
            if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
            const pages: (number | "...")[] = [1];
            if (current > 3) pages.push("...");
            const start = Math.max(2, current - 1);
            const end = Math.min(total - 1, current + 1);
            for (let i = start; i <= end; i++) pages.push(i);
            if (current < total - 2) pages.push("...");
            pages.push(total);
            return pages;
          };

          const renderPaginationNumbers = (currentPage: number) => {
            const container = document.getElementById("pagination-numbers");
            if (!container) return;

            const pages = getPages(currentPage, options?.totalPages);

            container.innerHTML = "";

            pages.forEach((page, i) => {
              // DOTS
              if (page === "...") {
                const span = document.createElement("span");
                span.className = "px-2 text-sm text-slate-400";
                span.textContent = "…";
                container.appendChild(span);
                return;
              }

              // BUTTON
              const button = document.createElement("button");
              button.dataset.page = String(page);
              button.textContent = String(page);

              button.className =
                "h-9 min-w-9 rounded-lg border px-3 text-sm font-medium transition text-center leading-9 " +
                (page === currentPage ? "border-slate-900 bg-slate-900 text-white pointer-events-none" : "border-slate-200 text-slate-700 hover:bg-slate-100");

              container.appendChild(button);
            });
          };

          const updatePaginationUi = (currentPage: number) => {
            if (prevBtn && nextBtn) {
              document.body.setAttribute("current-page", String(currentPage));
              renderPaginationNumbers(currentPage);
              if (currentPage === 1) {
                prevBtn.disabled = true;
                nextBtn.disabled = false;
              } else if (currentPage === options?.totalPages) {
                nextBtn.disabled = true;
                prevBtn.disabled = false;
              } else {
                prevBtn.disabled = false;
                nextBtn.disabled = false;
              }
            }
          };

          const fetchProducts = async (currentPage = 1) => {
            try {
              const url = `${options?.wpBaseUrl}/wp-json/custom/v1/product-list?taxonomy=${ad_cats}&slug=${slug}&page=${currentPage}`;
              const res = await fetch(url);

              if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
              }

              const response = await res.json();
              renderResults(response?.data);
              updatePaginationUi(currentPage);
            } catch (error) {
              console.error("Fetch error:", error);
            }
          };

          if (nextBtn) {
            nextBtn.onclick = async (e: any) => {
              e.preventDefault();
              const currentPage = Number(document.body.getAttribute("current-page")) || 1;
              if (currentPage + 1 <= options?.totalPages) {
                await fetchProducts(currentPage + 1);
              }
            };
          }

          if (prevBtn) {
            prevBtn.onclick = async (e: any) => {
              e.preventDefault();
              const currentPage = Number(document.body.getAttribute("current-page")) || 1;
              if (currentPage - 1 >= 1) {
                await fetchProducts(currentPage - 1);
              }
            };
          }

          pageNumbersParent?.addEventListener("click", async (e: any) => {
            e.preventDefault();
            const btn = e.target.closest("button[data-page]");
            if (!btn) return;

            const page = Number(btn.dataset.page);
            await fetchProducts(page);
          });

          const loadLazyCards = () => {
            gDom.loadDynamicComponent("lazy-category-cards", () => {
              console.log("lazy-category-cards loaded");
            });
          };

          if (!gDom.ftr) {
            loadLazyCards();
          } else {
            let isAlreadyTriggered = false;
            const handler = () => {
              if (isAlreadyTriggered) return;
              isAlreadyTriggered = true;
              ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach((e) => document?.removeEventListener(e, handler));
              loadLazyCards();
            };

            ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach((e) => document?.addEventListener(e, handler, { passive: true }));
          }
        }}
      </Script>
    </section>
  );
};

export default PLPListing;
