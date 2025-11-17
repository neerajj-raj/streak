import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsAboutus extends Schema.Component {
  collectionName: 'components_about_us_aboutuses';
  info: {
    displayName: 'aboutus-section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    sub_heading: Attribute.String;
    description: Attribute.Text;
    about_us_card: Attribute.Component<'about-us.opening-section', true>;
  };
}

export interface AboutUsCsrSection extends Schema.Component {
  collectionName: 'components_about_us_csr_sections';
  info: {
    displayName: 'csr_section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    CSR_details: Attribute.Component<'about-us.csr', true>;
  };
}

export interface AboutUsCsr extends Schema.Component {
  collectionName: 'components_about_us_csrs';
  info: {
    displayName: 'CSR';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface AboutUsHistories extends Schema.Component {
  collectionName: 'components_about_us_histories';
  info: {
    displayName: 'histories';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    year: Attribute.Integer;
  };
}

export interface AboutUsOpeningSection extends Schema.Component {
  collectionName: 'components_opening_section_opening_sections';
  info: {
    displayName: 'aboutus-card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
    no_of_items: Attribute.String;
  };
}

export interface AboutUsTeamCard extends Schema.Component {
  collectionName: 'components_about_us_team_cards';
  info: {
    displayName: 'team_card';
  };
  attributes: {
    full_name: Attribute.String;
    designation: Attribute.String;
    image: Attribute.Media;
  };
}

export interface AddressAddress extends Schema.Component {
  collectionName: 'components_address_addresses';
  info: {
    displayName: 'address';
    description: '';
  };
  attributes: {
    floor: Attribute.String;
    building: Attribute.String;
    district: Attribute.String;
    state: Attribute.String;
    CIN_number: Attribute.String;
    country: Attribute.String;
    phone_number: Attribute.String;
  };
}

export interface AwardSectionAwardSection extends Schema.Component {
  collectionName: 'components_award_section_award_sections';
  info: {
    displayName: 'award_section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    award_images: Attribute.Component<'award-section.awards', true>;
  };
}

export interface AwardSectionAwards extends Schema.Component {
  collectionName: 'components_award_section_awards';
  info: {
    displayName: 'awards';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
  };
}

export interface CareerSectionCareerSection extends Schema.Component {
  collectionName: 'components_career_section_career_sections';
  info: {
    displayName: 'career_section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    openings_sections: Attribute.Component<'opening-section.opening-scetion'>;
  };
}

export interface FooterFooterLinks extends Schema.Component {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'footer_links';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface HistorySectionHistroySection extends Schema.Component {
  collectionName: 'components_history_section_histroy_sections';
  info: {
    displayName: 'history_section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    sub_heading: Attribute.String;
    histories: Attribute.Component<'about-us.histories', true>;
  };
}

export interface HomePageClientSection extends Schema.Component {
  collectionName: 'components_home_page_client_sections';
  info: {
    displayName: 'client_section';
  };
  attributes: {
    name: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface HomePageHashTags extends Schema.Component {
  collectionName: 'components_home_page_hash_tags';
  info: {
    displayName: 'hash_tags';
  };
  attributes: {
    tag: Attribute.String;
  };
}

export interface HomePagePartners extends Schema.Component {
  collectionName: 'components_home_page_partners';
  info: {
    displayName: 'partners';
  };
  attributes: {
    name: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface HomePageServiceSection extends Schema.Component {
  collectionName: 'components_home_page_service_sections';
  info: {
    displayName: 'service_section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    sub_heading: Attribute.String;
    service_card: Attribute.Component<'services.services', true>;
  };
}

export interface InnovationSectionInnovationSection extends Schema.Component {
  collectionName: 'components_innovation_section_innovation_sections';
  info: {
    displayName: 'innovation_section';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface InputFieldInput extends Schema.Component {
  collectionName: 'components_input_field_inputs';
  info: {
    displayName: 'input';
  };
  attributes: {
    placeholder: Attribute.String;
    input_type: Attribute.String;
  };
}

export interface LogoLogo extends Schema.Component {
  collectionName: 'components_logo_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    logo: Attribute.Media;
  };
}

export interface NotificationNotificationSection extends Schema.Component {
  collectionName: 'components_notification_notification_sections';
  info: {
    displayName: 'notification_section';
  };
  attributes: {
    description: Attribute.Text;
    link_title: Attribute.String;
    link: Attribute.String;
  };
}

export interface OpeningSectionOpeningScetion extends Schema.Component {
  collectionName: 'components_opening_section_opening_scetions';
  info: {
    displayName: 'opening_section';
    description: '';
  };
  attributes: {
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface PartnersPartnerSection extends Schema.Component {
  collectionName: 'components_partners_partner_sections';
  info: {
    displayName: 'PartnerSection';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    partners: Attribute.Component<'home-page.partners', true>;
  };
}

export interface SeoSeoSection extends Schema.Component {
  collectionName: 'components_seo_seo_sections';
  info: {
    displayName: 'seo_section';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    keywords: Attribute.String;
  };
}

export interface ServicePageCuttingEdgeSolutions extends Schema.Component {
  collectionName: 'components_service_page_cutting_edge_solutions';
  info: {
    displayName: 'service_card';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    main_image: Attribute.Media;
    logo: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface ServicesServices extends Schema.Component {
  collectionName: 'components_services_services';
  info: {
    displayName: 'services-card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media;
  };
}

export interface ServicesServiseSection extends Schema.Component {
  collectionName: 'components_services_servise_sections';
  info: {
    displayName: 'servise_section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    sub_heading: Attribute.String;
    service_card: Attribute.Component<
      'service-page.cutting-edge-solutions',
      true
    >;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SocialMediaUrlSocialMediaUrl extends Schema.Component {
  collectionName: 'components_social_media_url_social_media_urls';
  info: {
    displayName: 'social_media_url';
  };
  attributes: {
    name: Attribute.String;
    logo: Attribute.Media;
    url: Attribute.String;
  };
}

export interface SolutionSectionAboutusPageSolutionCard
  extends Schema.Component {
  collectionName: 'components_solution_section_aboutus_page_solution_cards';
  info: {
    displayName: 'solution_card';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SolutionSectionAboutusPageSolutionSection
  extends Schema.Component {
  collectionName: 'components_aboutus_page_solution_sections';
  info: {
    displayName: 'solution_section';
    description: '';
  };
  attributes: {
    sub_heading: Attribute.String;
    description: Attribute.Text;
    solution_card: Attribute.Component<
      'solution-section-aboutus-page.solution-card',
      true
    >;
    about_us_card: Attribute.Component<'about-us.opening-section', true>;
  };
}

export interface TeamSectionTeamSection extends Schema.Component {
  collectionName: 'components_team_section_team_sections';
  info: {
    displayName: 'team_section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    sub_heading: Attribute.String;
    description: Attribute.Text;
    Team_card: Attribute.Component<'about-us.team-card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.aboutus': AboutUsAboutus;
      'about-us.csr-section': AboutUsCsrSection;
      'about-us.csr': AboutUsCsr;
      'about-us.histories': AboutUsHistories;
      'about-us.opening-section': AboutUsOpeningSection;
      'about-us.team-card': AboutUsTeamCard;
      'address.address': AddressAddress;
      'award-section.award-section': AwardSectionAwardSection;
      'award-section.awards': AwardSectionAwards;
      'career-section.career-section': CareerSectionCareerSection;
      'footer.footer-links': FooterFooterLinks;
      'history-section.histroy-section': HistorySectionHistroySection;
      'home-page.client-section': HomePageClientSection;
      'home-page.hash-tags': HomePageHashTags;
      'home-page.partners': HomePagePartners;
      'home-page.service-section': HomePageServiceSection;
      'innovation-section.innovation-section': InnovationSectionInnovationSection;
      'input-field.input': InputFieldInput;
      'logo.logo': LogoLogo;
      'notification.notification-section': NotificationNotificationSection;
      'opening-section.opening-scetion': OpeningSectionOpeningScetion;
      'partners.partner-section': PartnersPartnerSection;
      'seo.seo-section': SeoSeoSection;
      'service-page.cutting-edge-solutions': ServicePageCuttingEdgeSolutions;
      'services.services': ServicesServices;
      'services.servise-section': ServicesServiseSection;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'social-media-url.social-media-url': SocialMediaUrlSocialMediaUrl;
      'solution-section-aboutus-page.solution-card': SolutionSectionAboutusPageSolutionCard;
      'solution-section-aboutus-page.solution-section': SolutionSectionAboutusPageSolutionSection;
      'team-section.team-section': TeamSectionTeamSection;
    }
  }
}
