import { getCommonContents, getPageContentBySlug } from "services/wordPress";

export const getAboutPageData = async () => {
  const commonContents: any = await getCommonContents();
  const response: any = await getPageContentBySlug("about-us");
  const [aboutContents] = response || [];

  return {
    AboutBanner: aboutContents?.acf?.banner_section ?? {},
    AboutContent: aboutContents?.acf?.about_content_section ?? {},
    AboutTeam: { team_section: commonContents?.options?.team_section ?? {}, ...aboutContents?.acf?.team_section ?? {} },
    AboutWhyChooseUs: aboutContents?.acf?.why_choose_us_section ?? {},
    HomeGallery: aboutContents?.acf?.gallery_section ?? {},
    AboutVideoSection: aboutContents?.acf?.video_section ?? {},
    AboutValues: aboutContents?.acf?.value_statements_section ?? {},
    HomeServices: { services: commonContents?.services ?? [], ...aboutContents?.acf?.service_section ?? {}, containerClass: "medium-container" },
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
      ...aboutContents?.rankMath?.assessor?.serpData ?? {},
      modifiedDate: aboutContents?.modified ?? "",
      publishedDate: aboutContents?.date ?? "",
      siteFavIcon: aboutContents?.rankMath?.siteFavIcon ?? "",
      parentDomain: aboutContents?.rankMath?.parentDomain ?? "",
      pageUrl: aboutContents?.rankMath?.permalinkFormat?.replace("%pagename%", "about") ?? "",
    },
  };
};

export default getAboutPageData;
