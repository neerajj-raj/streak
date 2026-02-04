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

type DropdownProps = {
  id: string;
  value?: string;
  placeholder?: string;
  options: string[];
  search?: boolean;
  inputSize?: "sm" | "md" | "lg";
  onSelectCallback?: string;
};

export default function Dropdown({ id, value, placeholder = "Select", options, search = false, inputSize = "md" }: DropdownProps) {
  const heightClass = inputSize === "sm" ? "h-9 text-sm" : inputSize === "lg" ? "h-13 text-base" : "h-10 text-sm";

  return (
    <div className="relative w-full" id={`dropdown-wrapper-${id}`}>
      <button
        id={`btn-${id}`}
        type="button"
        className={`relative flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 text-left text-slate-900 outline-none transition-colors focus:border-amber-400 max-lg:text-xs ${heightClass}`}
      >
        <span id={`label-${id}`} className={`flex-1 truncate ${value ? "" : "text-slate-400"}`}>
          {value || placeholder}
        </span>
        <svg
          id={`icon-${id}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 h-4 w-4 text-slate-400 transition-transform duration-200"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div id={`menu-${id}`} className="absolute left-0 top-full z-[100] mt-1 hidden overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
        {search && (
          <div className="border-b border-slate-200 p-2">
            <div className="relative">
              <input
                id={`search-${id}`}
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-slate-300 py-1 pl-8 pr-2 text-sm focus:border-amber-400 focus:outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-2 top-1.5 h-4 w-4 text-slate-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        )}

        <div className="max-h-52 overflow-auto py-1">
          {options.map((option, index) => (
            <button key={index} data-value={option} className="dropdown-option w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">
              {option}
            </button>
          ))}
          {options.length === 0 && <div className="px-4 py-2 text-sm text-slate-400">No results</div>}
        </div>
      </div>

      <Script id={`script-${id}`} options={{ id } as any}>
        {(gDom, ctx) => {
          const wrapper = gDom.document.getElementById(`dropdown-wrapper-${ctx.id}`);
          const btn = gDom.document.getElementById(`btn-${ctx.id}`);
          const menu = gDom.document.getElementById(`menu-${ctx.id}`);
          const icon = gDom.document.getElementById(`icon-${ctx.id}`);
          const label = gDom.document.getElementById(`label-${ctx.id}`);
          const searchInput = gDom.document.getElementById(`search-${ctx.id}`) as HTMLInputElement;
          const options = wrapper?.querySelectorAll(".dropdown-option");

          if (!btn || !menu) return;

          // Helper: Update Position (Emulating Portal/Popper behavior)
          const updatePosition = () => {
            const rect = btn.getBoundingClientRect();
            // logic: open up if space below is tight
            const spaceBelow = window.innerHeight - rect.bottom;
            const menuHeight = 250; // Approx max height
            const openUp = spaceBelow < menuHeight + 12;

            menu.style.position = "fixed";
            menu.style.width = `${rect.width}px`;
            menu.style.left = `${rect.left}px`;

            if (openUp) {
              menu.style.top = "auto";
              menu.style.bottom = `${window.innerHeight - rect.top + 6}px`;
            } else {
              menu.style.bottom = "auto";
              menu.style.top = `${rect.bottom + 6}px`;
            }
          };

          // Toggle Menu
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isHidden = menu.classList.contains("hidden");

            if (isHidden) {
              // Close all other dropdowns first
              gDom.document.querySelectorAll('[id^="menu-"]').forEach((el) => el.classList.add("hidden"));
              gDom.document.querySelectorAll('[id^="icon-"]').forEach((el) => el.classList.remove("rotate-180"));

              // Open this one
              updatePosition(); // Calculate position immediately
              menu.classList.remove("hidden");
              icon?.classList.add("rotate-180");
              if (searchInput) searchInput.focus();

              // Add scroll listener to update position while scrolling
              window.addEventListener("scroll", updatePosition, true);
              window.addEventListener("resize", updatePosition);
            } else {
              menu.classList.add("hidden");
              icon?.classList.remove("rotate-180");
              window.removeEventListener("scroll", updatePosition, true);
              window.removeEventListener("resize", updatePosition);
            }
          });

          // Click Outside
          gDom.document.addEventListener("click", (e) => {
            if (!wrapper?.contains(e.target as Node) && !menu.contains(e.target as Node)) {
              menu.classList.add("hidden");
              icon?.classList.remove("rotate-180");
              window.removeEventListener("scroll", updatePosition, true);
            }
          });

          // Option Selection
          options?.forEach((opt) => {
            opt.addEventListener("click", () => {
              const val = opt.getAttribute("data-value");
              if (val && label) {
                label.innerText = val;
                label.classList.remove("text-slate-400");
                menu.classList.add("hidden");
                icon?.classList.remove("rotate-180");
                window.removeEventListener("scroll", updatePosition, true);

                const event = new CustomEvent("streak-dropdown-change", {
                  detail: { id: ctx.id, value: val },
                });
                gDom.document.dispatchEvent(event);
              }
            });
          });

          // Search
          if (searchInput) {
            searchInput.addEventListener("input", (e) => {
              const query = (e.target as HTMLInputElement).value.toLowerCase();
              options?.forEach((opt) => {
                const text = opt.textContent?.toLowerCase() || "";
                (opt as HTMLElement).style.display = text.includes(query) ? "block" : "none";
              });
            });
          }
        }}
      </Script>
    </div>
  );
}
