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

import ChevronSingleRight from "@common/icons/ChevronSingleRight";
import HomeIcon from "@common/icons/HomeIcon";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  data: {
    items: BreadcrumbItem[];
    className?: string;
  };
};

const Breadcrumb = (props: BreadcrumbProps) => {
  const { items, className = "" } = props.data || {};
  return (
    <nav className={className}>
      <ol className="flex items-center text-sm text-gray-600 overflow-hidden">
        <li className="flex items-center shrink-0">
          <a href="/" className="flex items-center gap-2 font-medium transition-colors hover:text-black" aria-label="home">
            <HomeIcon className="h-3 w-3" />
            <span className="hidden sm:inline">Home</span>
          </a>
        </li>
        {items?.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center min-w-0">
              <span className="px-2 shrink-0">
                <ChevronSingleRight className="h-4 w-4 text-gray-500" />
              </span>
              {isLast ? (
                <span className="font-medium text-gray-900 truncate max-w-[180px] sm:max-w-none">{item.label}</span>
              ) : (
                <a href={item.href || "#"} className="font-medium transition-colors hover:text-black truncate max-w-[120px] sm:max-w-none">
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
