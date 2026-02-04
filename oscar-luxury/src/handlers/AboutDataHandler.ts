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

import { getAboutPageContents, getMenuContents, getPageContentBySlug } from "@services/wordPress";
import { getPageUrl, splitMenuItemsBySlug } from "@utils/commonUtils";

export const getAboutData = async () => {
  // https://oscarluxury.com/wp-json/custom/v1/menus
  // https://oscarluxury.com/wp-json/custom/v1/about-contents
  // https://oscarluxury.com/wp-json/wp/v2/pages?slug=streak-about

  const [menuContents, pageContents, aboutContents] = await Promise.all([getMenuContents(), getPageContentBySlug("streak-about"), getAboutPageContents()]);

  const aboutAcfContents = pageContents?.[0]?.acf ?? {};
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
    AppHead: { ...(aboutAcfContents?.app_head ?? {}), canonical_url: getPageUrl("about-us") },
    CommonHeader: { headerMenu: headerMenu ?? [] },
    CommonFooter: { inventoryMenu: inventoryMenu ?? [], footerQuickLinks: footerQuickLinks ?? [] },
    BreadcrumbsBanner: {
      title: aboutAcfContents?.breadcrumbs_banner?.title || "About us",
      description: aboutAcfContents?.breadcrumbs_banner?.description || "",
      bgImage: aboutAcfContents?.breadcrumbs_banner?.background_image || "/images/about/banner01.webp",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "About us", href: "/about-us" },
      ],
    },
    AboutDescription: { description: aboutAcfContents?.description ?? "" },
    AboutWhyChoose: aboutAcfContents?.our_values ?? {},
    HomeTestimonials: { customer_review: aboutContents?.customer_review || [] },
    AboutClients: { premium_client: aboutContents?.premium_client || [] },
  };
};

export default getAboutData;
