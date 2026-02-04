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

import { getPLPContentBySlug, getMenuContents, getPageContentBySlug } from "@services/wordPress";
import { getPageUrl, splitMenuItemsBySlug } from "@utils/commonUtils";

// https://oscarluxury.com/wp-json/custom/v1/product-list?taxonomy=ad_tags&slug=mercedesbenzmaybach&page=1
// https://oscarluxury.com/wp-json/custom/v1/product-list?taxonomy=ad_cats&slug=mercedes&page=1

export const getPLPData = async (props: any) => {
  const taxonomyMapper: Record<string, string> = {
    ad_tag: "ad_tags",
    ad_category: "ad_cats",
  };

  const page: number = 1;
  const [taxonomyInUrl, slug] = props?.url?.split("/").filter(Boolean);
  const taxonomy = taxonomyMapper?.[taxonomyInUrl] ?? taxonomyInUrl;

  console.log("➡️ [PLP] Final Extracted Params:", { taxonomy, slug, page });

  const [menuContents, pageContents] = await Promise.all([getMenuContents(), getPageContentBySlug("streak-category")]);

  const { headerMenu, inventoryMenu, footerQuickLinks } = splitMenuItemsBySlug(menuContents);

  const categoryAcfContents = pageContents?.[0]?.acf ?? {};

  if (!taxonomy || !slug) {
    console.warn("⚠️ Missing taxonomy or slug, returning empty PLP");

    return {
      AppHead: {},
      PLPHeader: { title: "", totalCount: 0 },

      PLPListing: {
        products: [],
        pagination: {
          totalRecords: 0,
          totalPages: 0,
          currentPage: 1,
          recordsPerPage: 10,
        },
      },

      Breadcrumb: { label: "", slug: "", taxonomy: "" },

      BreadcrumbsBanner: {
        title: "Category",
        description: "",
        bgImage: "/images/category/banner05.webp",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Category", href: `${props?.url}` },
        ],
      },

      CommonHeader: { headerMenu: headerMenu ?? [] },

      CommonFooter: {
        inventoryMenu: inventoryMenu ?? [],
        footerQuickLinks: footerQuickLinks ?? [],
      },
    };
  }

  const plpResponse = await getPLPContentBySlug(taxonomy, slug, page);

  const products = plpResponse?.data || [];
  const breadcrumb = products?.[0]?.bread_crumb || {};

  return {
    PLPListing: {
      products: products,
      taxonomy,
      slug,
      pagination: {
        totalRecords: plpResponse?.pagination?.total_records || 0,
        totalPages: plpResponse?.pagination?.total_pages || 0,
        currentPage: page,
        recordsPerPage: 10,
      },
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

    AppHead: {
      meta_title: categoryAcfContents?.app_head?.meta_title?.replace("{{category_name}}", breadcrumb),
      meta_description: categoryAcfContents?.app_head?.meta_description?.replace("{{category_name}}", breadcrumb),
      canonical_url: getPageUrl(props?.url),
    },

    CommonHeader: { headerMenu: headerMenu ?? [] },

    CommonFooter: {
      inventoryMenu: inventoryMenu ?? [],
      footerQuickLinks: footerQuickLinks ?? [],
    },

    BreadcrumbsBanner: {
      title: categoryAcfContents?.breadcrumbs_banner?.title || breadcrumb,
      description: categoryAcfContents?.breadcrumbs_banner?.description || "",
      bgImage: categoryAcfContents?.breadcrumbs_banner?.background_image || "/images/category/banner05.webp",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: breadcrumb, href: `${props?.url}` },
      ],
    },
  };
};

export default getPLPData;
