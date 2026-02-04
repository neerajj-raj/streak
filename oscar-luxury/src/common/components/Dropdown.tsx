import { Script } from "streak/components";

type DropdownProps = {
  id: string;
  value?: string;
  placeholder?: string;
  options: string[];
  search?: boolean;
  inputSize?: "sm" | "md" | "lg";
  onSelectCallback?: string; // Name of a global function or event to dispatch
};

export default function Dropdown({ id, value, placeholder = "Select", options, search = false, inputSize = "md" }: DropdownProps) {
  const heightClass = inputSize === "sm" ? "h-9 text-sm" : inputSize === "lg" ? "h-13 text-base" : "h-10 text-sm";

  return (
    <div className="relative w-full" id={`dropdown-wrapper-${id}`}>
      <button
        id={`btn-${id}`}
        type="button"
        className={`relative flex w-full items-center rounded-lg border border-slate-300 bg-white px-4 text-left text-slate-900 outline-none transition-colors focus:border-amber-400 max-lg:text-xs ${heightClass}`}
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

      <div id={`menu-${id}`} className="absolute left-0 top-full z-50 mt-1 hidden w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
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

      {/* FIX: Cast options to 'any' to bypass strict function-type check */}
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

          // Toggle Menu
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isHidden = menu.classList.contains("hidden");
            if (isHidden) {
              // Close other dropdowns
              gDom.document.querySelectorAll('[id^="menu-"]').forEach((el) => el.classList.add("hidden"));
              gDom.document.querySelectorAll('[id^="icon-"]').forEach((el) => el.classList.remove("rotate-180"));

              menu.classList.remove("hidden");
              icon?.classList.add("rotate-180");
              if (searchInput) searchInput.focus();
            } else {
              menu.classList.add("hidden");
              icon?.classList.remove("rotate-180");
            }
          });

          // Click Outside
          gDom.document.addEventListener("click", (e) => {
            if (!wrapper?.contains(e.target as Node)) {
              menu.classList.add("hidden");
              icon?.classList.remove("rotate-180");
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

                // Dispatch Custom Event
                const event = new CustomEvent("streak-dropdown-change", {
                  detail: { id: ctx.id, value: val },
                });
                gDom.document.dispatchEvent(event);
              }
            });
          });

          // Search Functionality
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
