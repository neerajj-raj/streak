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
import type { ComponentType, HTMLAttributes } from "react";
type AnchorVariant = "primary" | "secondary" | "light" | "outline" | "outline-secondary" | "outline-white" | "link";
type AnchorSize = "sm" | "md" | "default";

type AnchorProps = Omit<HTMLAttributes<HTMLAnchorElement>, "type"> & {
  variant?: AnchorVariant;
  size?: AnchorSize;
  icon?: ComponentType<{ className?: string }>;
  iconClass?: string;
  href: string;
};

export function Anchor({ variant = "primary", size = "default", icon: Icon, iconClass = "", className = "", children, href, ...props }: AnchorProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-60";

  const padded =
    size === "sm" ? "h-9 rounded-lg px-4 text-xs" : size === "md" ? "h-10 rounded-lg px-4 text-sm" : "rounded-lg 2xl:rounded-xl px-10 py-3 2xl:py-4";

  const iconSize = size === "sm" ? "h-3.5 w-3.5" : size === "md" ? "h-4 w-4" : "h-4 w-4";

  const classesToIgnore: string[] = [];

  let finalClass = [
    base,
    variant !== "link" && padded,
    variant === "primary" && "w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary-light",
    variant === "secondary" && "w-full md:w-auto bg-secondary text-secondary-foreground hover:bg-secondary-light",
    variant === "light" && "w-full md:w-auto bg-gray-100 text-gray-700 hover:bg-gray-200",
    variant === "outline" && "w-full md:w-auto border border-primary text-primary-dark hover:bg-primary/5",
    variant === "outline-secondary" && "w-full md:w-auto border border-gray-800 text-gray-800 hover:bg-secondary/5",
    variant === "outline-white" && "w-full md:w-auto border border-white text-white hover:bg-white/10",
    variant === "link" && "font-bold text-gray-900 hover:text-secondary",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (/(^|\s)!\S+/.test(className)) {
    const finalClasses = finalClass.split(" ").filter((eachCN) => {
      let cleanedCN = (eachCN && eachCN.trim()) || "";
      if (cleanedCN) {
        if (cleanedCN.startsWith("!")) {
          classesToIgnore.push(cleanedCN.substring(1));
          return false;
        }
        return true;
      }
      return false;
    });

    finalClass = finalClasses.filter((cn) => !classesToIgnore.includes(cn)).join(" ");
  }

  return (
    <a {...props} href={href || "/"} className={finalClass} type="button">
      {Icon && <Icon className={`${iconSize} ${iconClass}`} aria-hidden="true" />}
      {children}
    </a>
  );
}
