import { Button } from "@common/components/Button";
import Dropdown from "@common/components/Dropdown";
import Input from "@common/components/Input";
import { Script } from "streak/components";

// Sort Options Mapping (Display Label -> API Key)
const SORT_MAP: Record<string, string> = {
  "Newest To Oldest": "date-desc",
  "Oldest To New": "date-asc",
  "Alphabetically [a-z]": "title-asc",
  "Alphabetically [z-a]": "title-desc",
  "Highest price": "price-desc",
  "Lowest price": "price-asc",
};

// Reverse map for initial value display
const getLabelFromSort = (sortKey?: string) => {
  return Object.keys(SORT_MAP).find((key) => SORT_MAP[key] === sortKey) || "Newest To Oldest";
};

interface InventoryListHeaderProps {
  currentSort?: string;
  currentSearch?: string;
}

export default function InventoryListHeader({ currentSort, currentSearch }: InventoryListHeaderProps) {
  const sortLabel = getLabelFromSort(currentSort);

  return (
    <div className="mb-6 flex max-lg:flex-col gap-4 border-b border-slate-100 pb-6">
      <div className="flex items-center justify-between flex-1">
        <div className="flex items-center flex-1">
          {/* Mobile Filter Toggle (Hidden on Desktop) */}
          <div className="w-10 me-3 lg:hidden">
            <button id="btn-open-filter" className="bg-slate-100 p-3 rounded-lg">
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
                className="h-4 w-4 shrink-0"
              >
                <path d="M14 17H5" />
                <path d="M19 7h-9" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
            </button>
          </div>
          <h3 className="font-semibold xl:text-xl">Latest Cars to Explore</h3>
        </div>

        {/* Clear Filters Button */}
        <div>
          <Button id="btn-clear-filters" variant="link" size="md" className="text-xs text-slate-600">
            Clear All Filters
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
              className="h-4 w-4"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        {/* Search Input */}
        <div className="w-full lg:w-48 xl:w-60">
          <Input
            id="inventory-search-input"
            type="text"
            defaultValue={currentSearch}
            placeholder="Search by Keyword"
            endIcon={
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
                className="h-4 w-4 cursor-pointer"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
            }
          />
        </div>

        {/* Sort Dropdown */}
        <div className="w-full lg:w-48 xl:w-60">
          <Dropdown id="sort-dropdown" placeholder="Sort by" value={sortLabel} options={Object.keys(SORT_MAP)} />
        </div>
      </div>

      <Script id="inventory-header-script" options={{ sortMap: SORT_MAP } as any}>
        {(gDom, ctx) => {
          const searchInput = gDom.document.getElementById("inventory-search-input") as HTMLInputElement;
          const clearBtn = gDom.document.getElementById("btn-clear-filters");
          const filterBtn = gDom.document.getElementById("btn-open-filter");
          const map = ctx.sortMap;

          // Helper to update URL params
          const updateParam = (key: string, value: string | null) => {
            const url = new URL(gDom.document.location.href);
            if (value) {
              url.searchParams.set(key, value);
            } else {
              url.searchParams.delete(key);
            }
            // Reset to page 1 on filter change
            url.searchParams.set("page", "1");
            gDom.document.location.href = url.toString();
          };

          // 1. Handle Search (Enter Key)
          if (searchInput) {
            searchInput.addEventListener("keydown", (e) => {
              if (e.key === "Enter") {
                updateParam("ad_title", searchInput.value.trim());
              }
            });
          }

          // 2. Handle Dropdown Sort (Listening to Custom Event from Dropdown)
          gDom.document.addEventListener("streak-dropdown-change", (e: any) => {
            if (e.detail && e.detail.id === "sort-dropdown") {
              const selectedLabel = e.detail.value;
              const apiValue = map[selectedLabel];
              if (apiValue) {
                updateParam("sort", apiValue);
              }
            }
          });

          // 3. Handle Clear Filters
          if (clearBtn) {
            clearBtn.addEventListener("click", () => {
              const url = new URL(gDom.document.location.href);
              url.search = ""; // Wipes all params
              gDom.document.location.href = url.toString();
            });
          }

          // 4. Handle Mobile Filter Toggle
          if (filterBtn) {
            filterBtn.addEventListener("click", () => {
              // Dispatch event for the sidebar to listen to, or toggle class directly
              gDom.document.dispatchEvent(new CustomEvent("streak-toggle-filters"));
            });
          }
        }}
      </Script>
    </div>
  );
}
