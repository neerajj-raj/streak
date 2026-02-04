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

// TODO: Remove this file before going live
import { Button } from "@common/components/Button";

const BADGE_CONFIG = {
  premium: {
    label: "Premium",
    className: "bg-primary text-black",
    // Simple Star Icon SVG
    icon: (
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
        className="h-3 w-3"
        aria-hidden="true"
      >
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </svg>
    ),
  },
  bestSeller: {
    label: "Best Seller",
    className: "bg-amber-400 text-black",
    // Sparkles Icon SVG
    icon: (
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
        className="h-3 w-3"
        aria-hidden="true"
      >
        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
        <path d="M20 2v4" />
        <path d="M22 4h-4" />
        <circle cx="4" cy="20" r="2" />
      </svg>
    ),
  },
  soldOut: {
    label: "Sold Out",
    className: "bg-slate-900 text-white",
    // Ban Icon SVG
    icon: (
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
        className="h-3 w-3"
        aria-hidden="true"
      >
        <path d="M4.929 4.929 19.07 19.071" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
};

interface ProductCardProps {
  item: TypeInventoryItem;
}

export default function ProductCard({ item }: ProductCardProps) {
  // Logic to determine badges based on API status
  const badges: (keyof typeof BADGE_CONFIG)[] = [];

  if (item.is_sold) {
    badges.push("soldOut");
  }
  // Example logic: You can map other API flags here
  // if (item.price > 500000) badges.push("premium");

  const isSoldOut = item.is_sold;

  // Format Price: "AED 289,000"
  const formattedPrice = item.price_type === "on_call" ? "Price On Call" : `${item.currency || "AED"} ${new Intl.NumberFormat("en-US").format(item.price)}`;

  const hoverImage = item.hover_image;

  return (
    <div className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white transition ${isSoldOut ? "opacity-70" : ""}`}>
      <a href={item.permalink} className="block">
        <div className="relative h-52 xl:h-56 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            width="2560"
            height="1708"
            className={`h-full w-full object-cover ${hoverImage ? "group-hover:opacity-0" : ""}`}
          />

          {hoverImage && (
            <img
              src={hoverImage}
              alt={item.title}
              loading="lazy"
              decoding="async"
              width="2560"
              height="1708"
              className="absolute left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
          )}

          {badges.length > 0 && (
            <div className="absolute left-3 top-3 flex flex-col gap-1">
              {badges.map((b) => (
                <span key={b} className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${BADGE_CONFIG[b].className}`}>
                  {BADGE_CONFIG[b].icon}
                  {BADGE_CONFIG[b].label}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {item.make && <span className="transition hover:text-slate-800">{item.make}</span>}
          {item.model && <span className="transition hover:text-slate-800"> {item.model}</span>}
        </div>

        <h3 className="mt-1 text-sm font-semibold text-slate-900">
          <a href={item.permalink} className="block w-full truncate underline-offset-2 hover:underline">
            {item.title}
          </a>
        </h3>
      </div>

      {(formattedPrice || isSoldOut) && (
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-5 py-3">
          <span className="text-sm font-bold text-slate-700">{isSoldOut ? "" : formattedPrice}</span>

          <a href={item.permalink}>
            <Button variant="link" className="text-sm font-semibold">
              Show Details
            </Button>
          </a>
        </div>
      )}
    </div>
  );
}
