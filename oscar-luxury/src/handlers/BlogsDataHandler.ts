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

export const getBlogListingData = async () => {
  // https://oscarluxury.com/wp-json/custom/v1/menus
  // https://oscarluxury.com/wp-json/wp/v2/pages?slug=streak-blogs

  const [menuContents, pageContents] = await Promise.all([getMenuContents(), getPageContentBySlug("streak-blogs")]);

  const blogsAcfContents = pageContents?.[0]?.acf ?? {};
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
    AppHead: { ...(blogsAcfContents?.app_head ?? {}), canonical_url: getPageUrl("blogs") },
    CommonHeader: { headerMenu: headerMenu ?? [] },
    CommonFooter: { inventoryMenu: inventoryMenu ?? [], footerQuickLinks: footerQuickLinks ?? [] },
    BreadcrumbsBanner: {
      title: blogsAcfContents?.breadcrumbs_banner?.title || "Blogs",
      description: blogsAcfContents?.breadcrumbs_banner?.description || "",
      bgImage: blogsAcfContents?.breadcrumbs_banner?.background_image || "/images/blogs/banner-10.webp",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blogs", href: "/blogs" },
      ],
    },
    BlogListing: {
      blogs: [
        {
          image: "/images/blogs/blog-1.webp",
          date: "7 Jan 2026",
          title: "How to choose the right luxury car for UAE roads",
          excerpt:
            "Discover tips for first-time buyers on choosing the best luxury cars in the UAE. Learn about budgeting, top brands, key features, and making the right choice.",
          href: "/blog-details",
        },
        {
          image: "/images/blogs/blog-2.webp",
          date: "12 Jan 2026",
          title: "New vs pre-owned luxury cars: what makes more sense in Dubai",
          excerpt: "Explore the advantages of buying new versus pre-owned luxury vehicles in Dubai, including depreciation, warranty, and long-term value.",
          href: "/blog-details",
        },
        {
          image: "/images/blogs/blog-3.webp",
          date: "13 Jan 2026",
          title: "Top luxury SUVs perfect for family and business use",
          excerpt: "From performance to comfort, discover the best luxury SUVs that balance family needs and executive presence on UAE roads.",
          href: "/blog-details",
        },
        {
          image: "/images/blogs/blog-4.webp",
          date: "18 Jan 2026",
          title: "Why low-mileage luxury cars are in high demand",
          excerpt: "Learn why low-mileage luxury vehicles offer better value, reliability, and resale potential in the UAE’s premium car market.",
          href: "/blog-details",
        },
        {
          image: "/images/blogs/blog-5.webp",
          date: "21 Jan 2026",
          title: "Maintaining luxury cars in hot climates like the UAE",
          excerpt: "Expert tips on protecting performance, interiors, and engines of luxury cars in extreme heat and desert conditions.",
          href: "/blog-details",
        },
        {
          image: "/images/blogs/blog-6.webp",
          date: "10 Feb 2026",
          title: "Protecting your luxury car with Oscar Legacy Auto",
          excerpt:
            "Discover how precision wrapping, paint protection film, flawless polishing, and premium detailing services from Oscar Legacy Auto preserve and enhance your vehicle’s finish.",
          href: "/blog-details",
        },
      ],
    },
  };
};

export default getBlogListingData;
