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

import { getMenuContents, getPageContentBySlug, getPlpFilters } from "@services/wordPress";
import { getPageUrl, splitMenuItemsBySlug } from "@utils/commonUtils";

export const getTradeInData = async () => {

  const [menuContents, pageContents] = await Promise.all([
    getMenuContents(),
    getPageContentBySlug("streak-trade-in"),
  ]);


  const plpFiltersResponse = await getPlpFilters();
  const categories = plpFiltersResponse?.categories ?? [];
  const condition = plpFiltersResponse?.condition ?? [];

  const tradeInAcfContents = pageContents?.[0]?.acf ?? {};
  const { headerMenu, inventoryMenu, footerQuickLinks } = splitMenuItemsBySlug(menuContents);

  return {
    common: {
      contact: {
        phone: "+971504004007",
        email: "sales@oscarluxury.com",
        location: {
          address: ["IST Plaza", "Sheikh Zayed Road", "Umm Al Sheif, Dubai", "United Arab Emirates"],
          googleMapUrl: "https://maps.app.goo.gl/4y66bhbPCrVKKjtk9",
        },
      },
    },
    AppHead: { ...(tradeInAcfContents?.app_head ?? {}), canonical_url: getPageUrl("trade-in") },
    CommonHeader: { headerMenu: headerMenu ?? [] },
    CommonFooter: { inventoryMenu: inventoryMenu ?? [], footerQuickLinks: footerQuickLinks ?? [] },
    BreadcrumbsBanner: {
      title: tradeInAcfContents?.breadcrumbs_banner?.title ?? "Trade Your Car",
      description: tradeInAcfContents?.breadcrumbs_banner?.description ?? "A refined trade-in process designed exclusively for luxury vehicles",
      bgImage: tradeInAcfContents?.breadcrumbs_banner?.background_image ?? "/images/trade-in/banner07.webp",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Trade In", href: "/trade-in" },
      ],
    },
    TradeIn: {
      categories,
      condition,
    },

  };
};

export default getTradeInData;
