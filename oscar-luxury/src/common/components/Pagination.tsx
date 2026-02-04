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
"use client";

import ChevronLeft from "@common/icons/ChevronLeft";
import ChevronRight from "@common/icons/ChevronRight";
import clsx from "clsx";

type PaginationProps = {
  totalPages: number;
};

function getPages(current: number, total: number) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "...")[] = [1];
  if (current > 3) pages.push("...");
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (current < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

export default function Pagination({ totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;
  const pages = getPages(1, totalPages);

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-8 flex-wrap">
      {/* PREVIOUS */}
      <button
        disabled
        aria-label="prev"
        id="pagination-previous"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100 disabled:opacity-40"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* PAGE NUMBERS */}
      <div id="pagination-numbers" className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
        {pages.map((page, i) =>
          page === "..." ? (
            <span key={`dots-${i}`} className="px-2 text-sm text-slate-400">
              …
            </span>
          ) : (
            <button
              key={page}
              aria-label={`go to ${page}`}
              data-page={page}
              className={clsx(
                "h-9 min-w-9 rounded-lg border px-3 text-sm font-medium transition text-center leading-9",
                page === 1 ? "border-slate-900 bg-slate-900 text-white pointer-events-none" : "border-slate-200 text-slate-700 hover:bg-slate-100"
              )}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* NEXT */}
      <button
        id="pagination-next"
        aria-label="next"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100 disabled:opacity-40"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
