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
 * @author Ram
 */


import { getMenuContents, getPageContentBySlug } from "@services/wordPress";
import { getPageUrl, splitMenuItemsBySlug } from "@utils/commonUtils";

export const getContactData = async () => {
 

  const [menuContents, pageContents] = await Promise.all([getMenuContents(), getPageContentBySlug("streak-contact")]);

  const contactAcfContents = pageContents?.[0]?.acf ?? {};
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
    AppHead: { ...(contactAcfContents?.app_head ?? {}), canonical_url: getPageUrl("contact") },
    CommonHeader: { headerMenu: headerMenu ?? [] },
    CommonFooter: { inventoryMenu: inventoryMenu ?? [], footerQuickLinks: footerQuickLinks ?? [] },
    BreadcrumbsBanner: {
      title: contactAcfContents?.breadcrumbs_banner?.title ?? "Contact us",
      description: contactAcfContents?.breadcrumbs_banner?.description ?? "",
      bgImage: contactAcfContents?.breadcrumbs_banner?.background_image ?? "/images/about/banner01.webp",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Contact", href: "/contact-us" },
      ],
    },
  };
};

export default getContactData;
