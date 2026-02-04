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

export const getTermsData = async () => {
  // https://oscarluxury.com/wp-json/custom/v1/menus
  // https://oscarluxury.com/wp-json/wp/v2/pages?slug=streak-terms

  const [menuContents, pageContents] = await Promise.all([getMenuContents(), getPageContentBySlug("streak-terms")]);

  const termsAcfContents = pageContents?.[0]?.acf ?? {};
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
    AppHead: { ...(termsAcfContents?.app_head ?? {}), canonical_url: getPageUrl("terms-and-conditions") },
    CommonHeader: { headerMenu: headerMenu ?? [] },
    CommonFooter: { inventoryMenu: inventoryMenu ?? [], footerQuickLinks: footerQuickLinks ?? [] },
    BreadcrumbsBanner: {
      title: termsAcfContents?.breadcrumbs_banner?.title || "Terms & Conditions",
      description: termsAcfContents?.breadcrumbs_banner?.description || "",
      bgImage: termsAcfContents?.breadcrumbs_banner?.background_image || "/images/terms/banner09.webp",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
      ],
    },
  };
};

export default getTermsData;
