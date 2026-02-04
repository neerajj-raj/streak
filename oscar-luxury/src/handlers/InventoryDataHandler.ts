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
 * @author Vishakh B S
 */
import { getMenuContents, getInventoryFilters } from "@services/wordPress";
import { getPageUrl, splitMenuItemsBySlug } from "@utils/commonUtils";

export const getInventoryData = async () => {
  const [menuContents, filters] = await Promise.all([getMenuContents(), getInventoryFilters()]);

  const { headerMenu, inventoryMenu, footerQuickLinks } = splitMenuItemsBySlug(menuContents);

  const appHead = {
    meta_title: "Search Cars",
    meta_description: "Explore our latest collection of luxury vehicles",
  };
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
    AppHead: { ...{ appHead }, canonical_url: getPageUrl("inventory") },
    CommonHeader: { headerMenu: headerMenu ?? [] },
    BreadcrumbsBanner: {
      title: "Inventory",
      description: "",
      bgImage: "/images/inventory/banner03.webp",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Inventory", href: "/inventory" },
      ],
    },
    InventoryFilter: { filters },
    CommonFooter: { inventoryMenu: inventoryMenu ?? [], footerQuickLinks: footerQuickLinks ?? [] },
  };
};

export default getInventoryData;
