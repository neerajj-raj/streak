import { getAllBlogs, getCommonContents, getPageContentBySlug } from "services/wordPress";

export const getBlogPageData = async () => {

  const [commonContents, pageContents, blogLists] = await Promise.all([
    getCommonContents(),
    getPageContentBySlug("blog"),
    getAllBlogs()
  ]);

  const [blogContents] = pageContents || [];

  return {
    BlogLists: { main_heading: blogContents?.acf?.blog?.main_heading ?? {}, blog_posts: blogLists ?? [] },
    CommonHeader: {
      headerPhone: commonContents?.options?.header_phone ?? "",
      siteLogo: commonContents?.options?.logo ?? "",
      mobile_contact_button: commonContents?.options?.mobile_contact_button ?? "",
      mobile_contact_button_link: commonContents?.options?.mobile_contact_button_link ?? "",
      headerMenus: commonContents?.menus?.["header-menu"] ?? [],
    },
    CommonFooter: {
      ...commonContents?.options ?? {},
      quickLinks: commonContents?.menus?.["footer-quick-links-menu"] ?? [],
      menu1: commonContents?.menus?.["footer-service-menu1"] ?? [],
    },
    AppHead: {
      ...blogContents?.rankMath?.assessor?.serpData ?? {},
      modifiedDate: blogContents?.modified ?? "",
      publishedDate: blogContents?.date ?? "",
      siteFavIcon: blogContents?.rankMath?.siteFavIcon ?? "",
      parentDomain: blogContents?.rankMath?.parentDomain ?? "",
      pageUrl: blogContents?.rankMath?.permalinkFormat?.replace("%pagename%", "blog") ?? "",
    },
  };
};

export default getBlogPageData;
