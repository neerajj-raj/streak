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
import { Script } from "streak/components";
import { wpBaseUrl } from "@utils/config";

export default function InventoryList() {
  return (
    <div className="relative min-h-[400px]">
      <div id="inventory-grid" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 transition-opacity duration-200">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse rounded-2xl border border-slate-200 bg-white h-[400px]">
            <div className="h-52 bg-slate-200 w-full rounded-t-2xl"></div>
            <div className="p-5 space-y-3">
              <div className="h-4 bg-slate-200 w-1/3 rounded"></div>
              <div className="h-6 bg-slate-200 w-3/4 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      <div
        id="inventory-empty"
        className="hidden flex h-64 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center"
      >
        <h3 className="text-lg font-semibold text-slate-900">No cars found</h3>
        <p className="mt-1 text-sm text-slate-500">Try adjusting your filters to find what you're looking for.</p>
      </div>

      <div id="inventory-pagination" className="mt-8"></div>

      <Script
        id="inventory-list-logic"
        options={{
          apiBase: wpBaseUrl,
          endpoint: "/wp-json/custom/v1/search-inventory",
        }}
      >
        {(gDom, ctx) => {
          const doc = gDom.document;
          const grid = doc.getElementById("inventory-grid");
          const emptyState = doc.getElementById("inventory-empty");
          const paginationContainer = doc.getElementById("inventory-pagination");
          const listHeader = doc.getElementById("inventory-list-header");

          const getSoldOutBadgeHtml = () => `
            <span class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold bg-slate-900 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3" aria-hidden="true">
                <path d="M4.929 4.929 19.07 19.071" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              Sold Out
            </span>
          `;

          const btnBase =
            "inline-flex items-center justify-center gap-2 font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-60";

          const btnLink = "font-bold text-gray-900 hover:text-secondary";

          const btnProps = "text-sm font-semibold";

          const showDetailsClass = `${btnBase} ${btnLink} ${btnProps}`;

          const generateCardHtml = (item: TypeInventoryItem) => {
            const isSoldOut = item.is_sold === true;

            const formattedPrice =
              item.price_type === "on_call" ? "Price On Call" : `${item.currency || "AED"} ${new Intl.NumberFormat("en-US").format(item.price)}`;

            return `
              <div class="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition ${isSoldOut ? "opacity-70" : ""}">
                <a href="${item.permalink}" class="block">
                  <div class="relative h-52 xl:h-56 overflow-hidden">
                    <img 
                      src="${item.image}" 
                      alt="${item.title}" 
                      loading="lazy" 
                      decoding="async" 
                      width="2560" height="1708"
                      class="h-full w-full object-cover ${item.hover_image ? "group-hover:opacity-0" : ""}" 
                    />
                    
                    ${
                      item.hover_image
                        ? `
                      <img 
                        src="${item.hover_image}" 
                        alt="${item.title}" 
                        loading="lazy" 
                        decoding="async"
                        width="2560" height="1708" 
                        class="absolute left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" 
                      />
                    `
                        : ""
                    }
                    
                    ${
                      isSoldOut
                        ? `
                      <div class="absolute left-3 top-3 flex flex-col gap-1">
                        ${getSoldOutBadgeHtml()}
                      </div>
                    `
                        : ""
                    }
                  </div>
                </a>

                <div class="p-5">
                  <div class="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    ${item.make ? `<span class="transition hover:text-slate-800">${item.make}</span>` : ""}
                    ${item.model ? `<span class="transition hover:text-slate-800"> ${item.model}</span>` : ""}
                  </div>

                  <h3 class="mt-1 text-sm font-semibold text-slate-900">
                    <a href="${item.permalink}" class="block w-full truncate underline-offset-2 hover:underline">
                      ${item.title}
                    </a>
                  </h3>
                </div>

                ${
                  formattedPrice || isSoldOut
                    ? `
                  <div class="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-5 py-3">
                    <span class="text-sm font-bold text-slate-700">${isSoldOut ? "" : formattedPrice}</span>
                    <a href="${item.permalink}">
                      <button class="${showDetailsClass}">
                        Show Details
                      </button>
                    </a>
                  </div>
                `
                    : ""
                }
              </div>
            `;
          };

          const getPages = (current: number, total: number) => {
            if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
            const pages: any[] = [1];
            if (current > 3) pages.push("...");
            const start = Math.max(2, current - 1);
            const end = Math.min(total - 1, current + 1);
            for (let i = start; i <= end; i++) pages.push(i);
            if (current < total - 2) pages.push("...");
            pages.push(total);
            return pages;
          };

          const renderPagination = (current: number, total: number) => {
            if (!paginationContainer) return;

            if (total <= 1) {
              paginationContainer.innerHTML = "";
              return;
            }

            const pages = getPages(current, total);

            const containerClass = "flex items-center justify-center gap-1 sm:gap-2 flex-wrap";
            const navBtnClass =
              "flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed";
            const pageBtnBase = "h-9 min-w-9 rounded-lg border px-3 text-sm font-medium transition";
            const activePageClass = "border-slate-900 bg-slate-900 text-white";
            const inactivePageClass = "border-slate-200 text-slate-700 hover:bg-slate-100";
            const dotsClass = "px-2 text-sm text-slate-400";

            let html = `<div class="${containerClass}">`;

            // Prev Button
            html += `
              <button class="${navBtnClass}" ${current === 1 ? "disabled" : ""} data-page="${current - 1}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
            `;

            // Page Numbers
            pages.forEach((p) => {
              if (p === "...") {
                html += `<span class="${dotsClass}">…</span>`;
              } else {
                const isActive = p === current;
                html += `
                  <button class="${pageBtnBase} ${isActive ? activePageClass : inactivePageClass}" data-page="${p}">
                    ${p}
                  </button>
                `;
              }
            });

            // Next Button
            html += `
              <button class="${navBtnClass}" ${current === total ? "disabled" : ""} data-page="${current + 1}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            `;

            html += `</div>`;
            paginationContainer.innerHTML = html;
          };

          const fetchInventory = async () => {
            if (!grid) return;

            const urlParams = new URLSearchParams(doc.location.search);
            // Ensure API defaults
            const queryString = urlParams.toString();
            const fetchUrl = `${ctx.apiBase}${ctx.endpoint}${queryString ? `?${queryString}` : ""}`;

            try {
              // Visual loading indicator
              grid.classList.add("opacity-50");

              const response = await fetch(fetchUrl);
              const json: TypeInventoryResponse = await response.json();
              const items = json.data || [];
              const pagination = json.pagination || { current_page: 1, total_pages: 1 };

              grid.classList.remove("opacity-50");

              if (items.length === 0) {
                grid.innerHTML = "";
                grid.classList.add("hidden");
                emptyState?.classList.remove("hidden");
                if (paginationContainer) paginationContainer.innerHTML = "";
              } else {
                emptyState?.classList.add("hidden");
                grid.classList.remove("hidden");

                // Render Items
                const htmlBuffer = items.map(generateCardHtml).join("");
                grid.innerHTML = htmlBuffer;

                // Render Pagination
                renderPagination(pagination.current_page, pagination.total_pages);
              }
            } catch (error) {
              console.error("Failed to load inventory:", error);
              grid.classList.remove("opacity-50");
              if (grid)
                grid.innerHTML = `<div class='col-span-full flex h-64 items-center justify-center text-red-500'>Unable to load inventory. Please try again later.</div>`;
            }
          };

          // --- EVENT LISTENERS ---

          // Pagination Click Delegation
          if (paginationContainer) {
            paginationContainer.addEventListener("click", (e) => {
              const btn = (e.target as Element).closest("button");
              if (!btn || btn.disabled) return;

              const page = btn.getAttribute("data-page");
              if (page) {
                // Update URL without reload
                const url = new URL(doc.location.href);
                url.searchParams.set("page", page);
                window.history.pushState({}, "", url);

                // Scroll to top of listHeader
                listHeader?.scrollIntoView({ behavior: "smooth" });

                // Trigger fetch
                fetchInventory();
              }
            });
          }

          // Initial Load
          fetchInventory();
        }}
      </Script>
    </div>
  );
}
