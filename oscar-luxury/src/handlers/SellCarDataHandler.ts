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
 * @author Anagha Chandrababu
 */

import {getMenuContents, getPageContentBySlug} from "@services/wordPress";
import { getPageUrl, splitMenuItemsBySlug } from "@utils/commonUtils";

export const getSellCarData = async () => {
  // https://oscarluxury.com/wp-json/custom/v1/menus

  const [menuContents, pageContents] = await Promise.all([getMenuContents(), getPageContentBySlug("streak-sell-car")]);

  const sellCarAcfContents = pageContents?.[0]?.acf ?? {};
  const { headerMenu, inventoryMenu, footerQuickLinks } = splitMenuItemsBySlug(menuContents);
  return {
    AppHead: { ...(sellCarAcfContents?.app_head ?? {}), canonical_url: getPageUrl("sell-car") },
    CommonHeader: { headerMenu: headerMenu ?? [] },
    CommonFooter: { inventoryMenu: inventoryMenu ?? [], footerQuickLinks: footerQuickLinks ?? [] },
     BreadcrumbsBanner: {
       title: sellCarAcfContents?.breadcrumbs_banner?.title ?? "Sell Car",
      description: sellCarAcfContents?.breadcrumbs_banner?.description ?? "",
      bgImage: sellCarAcfContents?.breadcrumbs_banner?.background_image ?? "/images/sell/banner04.webp",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Sell Car", href: "/streak-sell-car" },
      ],
    },
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
  };
};

export default getSellCarData;
