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

import { getHomePageContents, getMenuContents, getPageContentBySlug, getSearchFilters } from "@services/wordPress";
import { getPageUrl, splitMenuItemsBySlug } from "@utils/commonUtils";

export const getHomeData = async () => {
  // https://oscarluxury.com/wp-json/custom/v1/menus
  // https://oscarluxury.com/wp-json/custom/v1/home-contents
  // https://oscarluxury.com/wp-json/wp/v2/pages?slug=streak-home
  // https://oscarluxury.com/wp-json/custom/v1/home-search
  // https://oscarluxury.com/wp-json/custom/v1/search?query=ss

  const [menuContents, homeContents, pageContents, searchFilters] = await Promise.all([
    getMenuContents(),
    getHomePageContents(),
    getPageContentBySlug("streak-home"),
    getSearchFilters(),
  ]);
  const homeAcfContents = pageContents?.[0]?.acf?.home ?? {};
  const { headerMenu, inventoryMenu, footerQuickLinks } = splitMenuItemsBySlug(menuContents);

  return {
    AppHead: { ...(homeAcfContents?.app_head ?? {}), canonical_url: getPageUrl() },
    AnimationHelpers: { isHomePage: true },
    HomeHeroBanner: { ...(homeAcfContents?.home_hero_banner ?? {}), searchFilters: searchFilters ?? {} },
    FeaturedDealers: { featured_luxury_car: homeContents?.featured_luxury_car ?? [] },
    BrowseBrands: { brands: homeContents?.brands || [] },
    CommonHeader: { headerMenu: headerMenu ?? [] },
    CommonFooter: { inventoryMenu: inventoryMenu ?? [], footerQuickLinks: footerQuickLinks ?? [] },
    HomeTestimonials: { customer_review: homeContents?.customer_review || [] },
    InsideShowroom: {
      showroom: homeContents?.showroom || [],
    },
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
  };
};

export default getHomeData;
