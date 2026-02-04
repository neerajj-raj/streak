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
 * @author Ram
 */

import Sparkles from "@common/icons/SparklesIcon";
import Car from "@common/icons/CarIcon";
import DollarSign from "@common/icons/DollarSign";
import RefreshCw from "@common/icons/RefreshCw";
import Wrench from "@common/icons/Wrench";
import Gem from "@common/icons/Gem";
import Paintbrush from "@common/icons/Paintbrush";
import Layers from "@common/icons/Layers";
import Palette from "@common/icons/PaletteIcon";
import Shield from "@common/icons/ShieldIcon";
import FileText from "@common/icons/FileText";
import { getMenuContents, getPageContentBySlug } from "@services/wordPress";
import { getPageUrl, splitMenuItemsBySlug } from "@utils/commonUtils";

export const getFaqData = async () => {


  const [menuContents, pageContents] = await Promise.all([getMenuContents(), getPageContentBySlug("streak-faq")]);

  const contactAcfContents = pageContents?.[0]?.acf ?? {};
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
    AppHead: { ...(contactAcfContents?.app_head ?? {}), canonical_url: getPageUrl("faq") },
    CommonHeader: { headerMenu: headerMenu ?? [] },
    CommonFooter: { inventoryMenu: inventoryMenu ?? [], footerQuickLinks: footerQuickLinks ?? [] },
    BreadcrumbsBanner: {
      title: contactAcfContents?.breadcrumbs_banner?.title ?? "Frequently Asked Questions",
      description: contactAcfContents?.breadcrumbs_banner?.description ?? "",
      bgImage: contactAcfContents?.breadcrumbs_banner?.background_image ?? "/images/faq/banner11.webp",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
    FaqCategories: [
      {
        id: "general",
        label: "General",
        icon: Sparkles,
        faqs: [
          {
            question: "What does Oscar Luxury specialize in?",
            answer:
              "Oscar Luxury specializes exclusively in luxury and high-end vehicles. We facilitate the buying, selling, and trading of premium cars from some of the world’s most iconic brands.",
          },
          {
            question: "Where is Oscar Luxury located?",
            answer:
              "Our registered office and showroom are located at IST Plaza Sheikh Zayed Rd, Umm Al Sheif Dubai, United Arab Emirates",
          },
          {
            question: "Do I need an appointment to visit the showroom?",
            answer:
              "Walk-ins are welcome. However, scheduling an appointment is recommended for a more personalized and seamless experience.",
          },
        ],
      },
      {
        id: "buying",
        label: "Buying a Car",
        icon: Car,
        faqs: [
          {
            question: "Are all cars listed on your website available?",
            answer:
              "Vehicle availability may change based on demand. We recommend contacting our team to confirm availability before visiting or proceeding further.",
          },
          {
            question: "Are the cars inspected?",
            answer:
              "Yes. All vehicles are subject to inspection and verification before a sale is finalized.",
          },
          {
            question: "What types of cars does Oscar Luxury sell?",
            answer:
              "Oscar Luxury specializes exclusively in luxury and high-end vehicles, including brands such as Rolls-Royce, Bentley, Ferrari, Porsche, Lamborghini, and more.",
          },
          {
            question: "Can I view the car before purchasing?",
            answer:
              "Absolutely. Buyers are encouraged to visit our showroom and inspect the vehicle before completing a purchase.",
          },
          {
            question: "Is the price shown on the website final?",
            answer:
              "Prices are based on current market value and vehicle condition. In some cases, pricing discussions may be possible.",
          },
        ],
      },
      {
        id: "selling",
        label: "Selling a Car",
        icon: DollarSign,
        faqs: [
          {
            question: "How do I sell my car through Oscar Luxury?",
            answer:
              "You can submit your vehicle details through our website or contact our team directly. Once reviewed, we will guide you through valuation and next steps.",
          },
          {
            question: "Is the valuation final?",
            answer:
              "Initial valuations are indicative. The final offer may vary based on inspection, documentation, and market conditions.",
          },
          {
            question: "How long does the selling process take?",
            answer:
              "Timelines may vary, but we aim to complete the process as efficiently as possible once all requirements are met.",
          },
        ],
      },
      {
        id: "tradein",
        label: "Trade-In",
        icon: RefreshCw,
        faqs: [
          {
            question: "What is a trade-in?",
            answer:
              "A trade-in allows you to exchange your current vehicle toward the purchase of another luxury car.",
          },
          {
            question: "How is trade-in value calculated?",
            answer:
              "Trade-in value is determined based on vehicle condition, mileage, market demand, and inspection results.",
          },
          {
            question: "Can I trade in my car without buying another vehicle?",
            answer:
              "Trade-ins are generally linked to purchasing another vehicle. For selling only, please use our Sell Your Car service.",
          },
        ],
      },
      {
        id: "services",
        label: "Automotive Services",
        icon: Wrench,
        faqs: [
          {
            question: "What automotive services does Oscar Luxury offer?",
            answer:
              "We offer premium automotive services including custom body kits, interior detailing, exterior detailing, ceramic coating, vinyl wrapping, and paint protection film (PPF).",
          },
          {
            question:
              "Are these services available only for Oscar Luxury customers?",
            answer:
              "No. Our automotive services are available for both Oscar Luxury customers and external vehicle owners.",
          },
          {
            question: "Do you work only on luxury vehicles?",
            answer:
              "Our services are primarily designed for luxury and high-end vehicles. Availability may vary based on the vehicle.",
          },
          {
            question: "Do I need to book an appointment for services?",
            answer:
              "Yes. Appointments are recommended to ensure availability and dedicated attention.",
          },
        ],
      },
      {
        id: "bodykit",
        label: "Custom Body Kit",
        icon: Gem,
        faqs: [
          {
            question: "What is a custom body kit?",
            answer:
              "A custom body kit enhances a vehicle’s appearance and aerodynamics through professionally designed and installed exterior components.",
          },
          {
            question: "Can body kits be customized?",
            answer:
              "Yes. Body kits can be tailored based on your vehicle model and personal preferences.",
          },
        ],
      },
      {
        id: "detailing",
        label: "Interior & Exterior Detailing",
        icon: Paintbrush,
        faqs: [
          {
            question: "What does interior detailing include?",
            answer:
              "Interior detailing includes deep cleaning and sanitization of seats, carpets, panels, vents, and other interior surfaces.",
          },
          {
            question: "What is exterior detailing?",
            answer:
              "Exterior detailing focuses on restoring the vehicle’s exterior through thorough cleaning, paint correction, and polishing.",
          },
        ],
      },
      {
        id: "ceramic",
        label: "Ceramic Coating",
        icon: Layers,
        faqs: [
          {
            question: "What is ceramic coating?",
            answer:
              "Ceramic coating is a protective layer applied to a vehicle’s paint that enhances gloss and protects against UV rays and environmental damage.",
          },
          {
            question: "How long does ceramic coating last?",
            answer:
              "Durability depends on maintenance and usage. Our team will advise you on proper care.",
          },
        ],
      },
      {
        id: "vinyl",
        label: "Vinyl Wrapping",
        icon: Palette,
        faqs: [
          {
            question: "What is vinyl wrapping?",
            answer:
              "Vinyl wrapping allows you to change your vehicle’s appearance while protecting the original paint underneath.",
          },
          {
            question: "Can vinyl wraps be removed later?",
            answer:
              "Yes. Vinyl wraps are removable when professionally applied and removed.",
          },
        ],
      },
      {
        id: "ppf",
        label: "Paint Protection Film",
        icon: Shield,
        faqs: [
          {
            question: "What is paint protection film?",
            answer:
              "PPF is a transparent protective layer that shields paint from stone chips, scratches, and road debris.",
          },
          {
            question: "Is paint protection film visible?",
            answer:
              "PPF is designed to be virtually invisible while preserving the vehicle’s original finish.",
          },
        ],
      },
      {
        id: "policy",
        label: "Pricing, Warranty & Policies",
        icon: FileText,
        faqs: [
          {
            question: "How much do services cost?",
            answer:
              "Pricing varies based on the vehicle, service type, and scope of work. Final pricing is shared after evaluation.",
          },
          {
            question: "Do your services come with a warranty?",
            answer:
              "Warranty availability depends on the service and materials used. Details are provided during consultation.",
          },
        ],
      },
    ]
  };
};

export default getFaqData;
