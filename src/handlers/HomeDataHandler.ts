import { getCommonContents, getPageContentBySlug } from "services/wordPress";
import { siteBaseUrl } from "utils/config";

export const getHomePageData = async () => {
  const commonContents: any = await getCommonContents();
  const response: any = await getPageContentBySlug("home");  
  const [homeContents] = response || [];

  return {
    HomeBanner: homeContents?.acf?.banner_section ?? {},
    HomeServices: { services: commonContents?.services ?? [], ...homeContents?.acf?.services_section ?? {} },
    HomeGallery: homeContents?.acf?.gallery_section ?? {},
    HomeWhyChooseUs: homeContents?.acf?.why_choose_us ?? {},
    HomeAbout: homeContents?.acf?.about_section ?? {},
    HomeTeam: { team_section: commonContents?.options?.team_section ?? {}, ...homeContents?.acf?.team_section ?? {} },
    HomeArticles: { blogs: commonContents?.blogs ?? [], ...homeContents?.acf?.blog_section ?? {} },
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
      ...homeContents?.rankMath?.assessor?.serpData ?? {},
      modifiedDate: homeContents?.modified ?? "",
      publishedDate: homeContents?.date ?? "",
      siteFavIcon: homeContents?.rankMath?.siteFavIcon ?? "",
      parentDomain: homeContents?.rankMath?.parentDomain ?? "",
      pageUrl: siteBaseUrl ?? ""
    },
  };
};

export default getHomePageData;
