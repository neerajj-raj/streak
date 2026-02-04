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
 * @author Neeraj
 */

import ChevronSingleRight from "@common/icons/ChevronSingleRight";
import HomeIcon from "@common/icons/HomeIcon";

type BreadcrumbItem = {
  label: string;
  href?: string;
};
interface BreadcrumbsBannerProps {
  data: {
    title: string;
    description?: string;
    bgImage: string;
    breadcrumbs: BreadcrumbItem[];
  };
}

const BreadcrumbsBanner = (props: BreadcrumbsBannerProps) => {
  const { title, description, bgImage, breadcrumbs } = props?.data || {};

  return (
    <section className="relative flex h-60 md:h-80 w-full items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={title}
          fetchPriority="high"
          className="object-cover"
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
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/50" />
      </div>
      <div className="relative container py-6 md:py-10">
        <div className="max-w-3xl space-y-2 md:space-y-4">
          <h1 className="font-secondary text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">{title}</h1>
          {description && <p className="text-sm leading-relaxed text-gray-400 md:text-xl">{description}</p>}
          <nav className="flex items-stretch text-sm">
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-stretch">
                {index === 0 ? (
                  <a href={item.href || "/"} className="flex items-center gap-2 pr-2 font-medium text-gray-300 transition-colors hover:text-white">
                    <HomeIcon className="h-3 w-3" />
                    {item.label}
                  </a>
                ) : item.href ? (
                  <a href={item.href} className="flex items-center px-2 font-medium text-gray-300 transition-colors hover:text-white">
                    {item.label}
                  </a>
                ) : (
                  <span className="flex items-center px-2 font-semibold text-white">{item.label}</span>
                )}
                {index < breadcrumbs.length - 1 && <ChevronSingleRight className="h-full w-4 text-gray-300" />}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbsBanner;
