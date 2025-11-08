import { getCommonContents, getServiceContentBySlug } from "services/wordPress";

export const getHomePageData = async (props: any) => {  
  const commonContents: any = await getCommonContents();
  const serviceContent: any = await getServiceContentBySlug(props?.slug) ?? {};

  return {
    ServiceBanner: serviceContent?.acf?.banner_section ?? {},
    ServiceContent: serviceContent?.acf?.content_section ?? {},
    ServiceCommonList: serviceContent?.acf?.common_list_section ?? {},
    ServiceWhyChooseUs: serviceContent?.acf?.why_choose_us_section ?? {},
    ServiceDescription: serviceContent?.acf?.description_section ?? {},
    ServiceDetail: serviceContent?.acf?.service_detail_section ?? {},
    ServiceFaqSection: serviceContent?.acf?.faq_section ?? {},
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
      ...serviceContent?.rankMath ?? {},
      modifiedDate: serviceContent?.modified ?? "",
      publishedDate: serviceContent?.date ?? "",
      pageUrl: serviceContent?.rankMath?.permalinkFormat ?? "",
    },
  };
};

export default getHomePageData;
