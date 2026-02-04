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

import { getPdpDetailsBySlug, getMenuContents, getPageContentBySlug } from "@services/wordPress";
import { getSortedCategories, getPageUrl, replaceKeyWordFromTemplate, splitMenuItemsBySlug } from "@utils/commonUtils";

export const getPdpData = async (props: { url: string }) => {
  // https://oscarluxury.com/wp-json/custom/v1/menus
  // https://oscarluxury.com/wp-json/wp/v2/pages?slug=streak-pdp
  // https://oscarluxury.com/wp-json/custom/v1/ad-post?slug=mercedes-benz-a-class-amg-a-45

  const slug =
    props?.url
      ?.replace(/^\/|\/$/g, "")
      ?.split("/")
      ?.pop() ?? "";

  console.log("➡️ [PDP] Final Extracted Params:", { slug });

  const [menuContents, productData, pdpContent] = await Promise.all([getMenuContents(), getPdpDetailsBySlug(slug), getPageContentBySlug("streak-pdp")]);
  const { headerMenu, inventoryMenu, footerQuickLinks } = splitMenuItemsBySlug(menuContents);
  const sortedCategories = getSortedCategories(productData?.data?.taxonomies?.ad_cats);
  const pdpAcfContents = pdpContent?.[0]?.acf ?? {};
  const pageTitle = productData?.data?.title ?? "";
  const breadcrumbItems = [
    ...sortedCategories?.map((cat) => ({
      label: cat.name,
      href: `/inventory?cat_id=${cat.id}`,
    })),
    { label: pageTitle, href: "" },
  ];

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
      meta_title: replaceKeyWordFromTemplate("{{product_name}}", pdpAcfContents?.app_head?.meta_title, pageTitle),
      meta_description: replaceKeyWordFromTemplate("{{product_name}}", pdpAcfContents?.app_head?.meta_description, pageTitle),
      canonical_url: getPageUrl(`ad/${productData?.data?.slug}`),
    },
    CommonHeader: { headerMenu: headerMenu ?? [], isLightPage: true },
    CommonFooter: { inventoryMenu: inventoryMenu ?? [], footerQuickLinks: footerQuickLinks ?? [] },
    Breadcrumb: { className: "mb-6", items: breadcrumbItems ?? [] },
    PDPContent: { product: productData?.data ?? null, sortedCategories },
  };
};

export default getPdpData;
