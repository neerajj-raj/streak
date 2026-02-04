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

import { getMenuContents, getPageContentBySlug } from "@services/wordPress";
import { getPageUrl, splitMenuItemsBySlug } from "@utils/commonUtils";

export const getBlogDetailsData = async () => {
  // https://oscarluxury.com/wp-json/custom/v1/menus

  const [menuContents] = await Promise.all([getMenuContents()]);

  const { headerMenu, inventoryMenu, footerQuickLinks } = splitMenuItemsBySlug(menuContents);

  return {
    common: {
      contact: {
        phone: "+971504004007",
        email: "Sales@oscarluxury.com",
        location: {
          address: ["IST Plaza", "Sheikh Zayed Road", "Umm Al Sheif, Dubai", "United Arab Emirates"],
          googleMapUrl: "https://maps.app.goo.gl/4y66bhbPCrVKKjtk9",
        },
      },
    },
    AppHead: {
      meta_title: "How to choose the right luxury car for UAE roads - Oscar Luxury Auto",
      meta_description: "How to choose the right luxury car for UAE roads - Oscar Luxury Auto UAE",
      canonical_url: getPageUrl("blog-details"),
    },
    CommonHeader: { headerMenu: headerMenu ?? [] },
    CommonFooter: { inventoryMenu: inventoryMenu ?? [], footerQuickLinks: footerQuickLinks ?? [] },
    BreadcrumbsBanner: {
      title: "How to choose the right luxury car for UAE roads",
      description: "",
      bgImage: "/images/blogs/blog-1-banner.webp",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blogs", href: "/blogs" },
        { label: "How to choose the right luxury car for UAE roads", href: "" },
      ],
    },
  };
};

export default getBlogDetailsData;
