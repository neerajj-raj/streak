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

// footer.config.tsx

import { Script } from "streak/components";

interface CommonFooterProps {
  common: {
    contact: {
      phone: string;
      email: string;
      location: {
        address: string[];
        googleMapUrl: string;
      };
    };
  };
  data: {
    inventoryMenu: Array<{
      id: string;
      title: string;
      url: string;
    }>;
    footerQuickLinks: Array<{
      id: string;
      title: string;
      url: string;
    }>;
  };
}

const FooterLink = ({ href, label }: any) => (
  <li>
    <a data-footer-url href={href} className="hover:text-primary transition">
      {label}
    </a>
  </li>
);

const CommonFooter = (props: CommonFooterProps) => {
  const { common, data } = props || {};
  const { inventoryMenu, footerQuickLinks } = data || {};

  const googleMapUrl = common?.contact?.location?.googleMapUrl || "#";
  const contactEmail = common?.contact?.email || "";
  const contactPhone = common?.contact?.phone || "";
  const addressLines = common?.contact?.location?.address || [];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  const resourcesLinks = [
    { label: "Blogs", href: "/blogs" },
    // { label: "Showroom", href: "/showroom" },
    { label: "FAQs", href: "/faqs" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container pt-12 lg:pt-20 xl:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3 space-y-6">
            <img
              alt="Oscar Luxury Auto"
              loading="lazy"
              width={100}
              height={56}
              decoding="async"
              data-nimg={1}
              className="opacity-90"
              style={{ color: "transparent" }}
              src="/images/oscar-logo-light.webp"
            />
            <div>
              <h3 className="mb-4 text-lg font-semibold tracking-wide">Registered Office</h3>
              <div className="flex gap-3 text-sm text-white/70">
                <a href={googleMapUrl} aria-label="View Oscar Luxury Auto location on Google Maps">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin h-5 w-5 text-primary shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx={12} cy={10} r={3} />
                  </svg>
                </a>
                <p className="leading-relaxed">
                  <a href={googleMapUrl}>
                    {addressLines.map((line, index) => (
                      <>
                        {line}
                        <br />
                      </>
                    ))}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="border-b border-white/10">
              <button className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold mobile-accordion-trigger">
                Inventory
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down h-5 w-5 transition-transform"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="grid transition-all duration-300 grid-rows-[0fr] opacity-0">
                <div className="overflow-hidden">
                  <ul className="space-y-3 text-sm text-white/70 pb-4">
                    {inventoryMenu?.map((link) => (
                      <FooterLink href={link.url} label={link.title} key={link.id} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-b border-white/10">
              <button className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold mobile-accordion-trigger">
                Quick Links
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down h-5 w-5 transition-transform"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="grid transition-all duration-300 grid-rows-[0fr] opacity-0">
                <div className="overflow-hidden">
                  <ul className="space-y-3 text-sm text-white/70 pb-4">
                    {footerQuickLinks?.map((link) => (
                      <FooterLink href={link.url} label={link.title} key={link.id} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-b border-white/10">
              <button className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold mobile-accordion-trigger">
                Legal &amp; Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down h-5 w-5 transition-transform"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="grid transition-all duration-300 grid-rows-[0fr] opacity-0">
                <div className="overflow-hidden">
                  <ul className="space-y-3 text-sm text-white/70 pb-4">
                    {legalLinks.map((link) => (
                      <FooterLink href={link.href} label={link.label} key={link.href} />
                    ))}
                    {resourcesLinks.map((link) => (
                      <FooterLink href={link.href} label={link.label} key={link.href} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold tracking-wide">Inventory</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {inventoryMenu?.map((link) => (
                <FooterLink href={link.url} label={link.title} key={link.id} />
              ))}
            </ul>
          </div>
          <div className="hidden lg:block lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {footerQuickLinks?.map((link) => (
                <FooterLink href={link.url} label={link.title} key={link.id} />
              ))}
            </ul>
          </div>
          <div className="hidden lg:block lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold tracking-wide">Legal</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {legalLinks.map((link) => (
                <FooterLink href={link.href} label={link.label} key={link.href} />
              ))}
            </ul>
            <h3 className="mt-8 mb-4 text-lg font-semibold tracking-wide">Resources</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {resourcesLinks.map((link) => (
                <FooterLink href={link.href} label={link.label} key={link.href} />
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-semibold tracking-wide">Connect</h3>
            <a
              href={`https://wa.me/${contactPhone}`}
              target="_blank"
              type="button"
              className="inline-flex items-center justify-center gap-2 font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-60 h-9 rounded-lg px-4 text-xs w-full md:w-auto border border-white text-white hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-headset h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
              </svg>
              Enquiry
            </a>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3 hover:text-primary transition">
                <a href={`tel:${contactPhone}`} aria-label="Call Oscar Luxury Auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone h-4 w-4 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>
                </a>
                <a href={`tel:${contactPhone}`}>{contactPhone?.replace(/^(\+\d{5})(\d{3})(\d{4})$/, "$1 $2 $3")}</a>
              </div>
              <div className="flex items-center gap-3 hover:text-primary transition">
                <a href={`mailto:${contactEmail}`} aria-label="Email Oscar Luxury Auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail h-4 w-4 text-primary"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x={2} y={4} width={20} height={16} rx={2} />
                  </svg>
                </a>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-primary hover:text-primary transition"
                href="https://www.facebook.com/people/Oscar-Luxury-Auto/61551636414294/?mibextid=2JQ9oc"
                aria-label="Oscar Luxury Auto on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-white hover:fill-primary transition-all">
                  <title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </a>
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-primary hover:text-primary transition"
                href="https://www.instagram.com/oscarluxuryauto/?igsh=MWNueDExcDM5eThibA%3D%3D&utm_source=qr"
                aria-label="Oscar Luxury Auto on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-white hover:fill-primary transition-all">
                  <title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
              </a>
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-primary hover:text-primary transition"
                href="https://www.youtube.com/@OSCARLUXURYAUTO"
                aria-label="Oscar Luxury Auto on YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white hover:fill-primary transition-all">
                  <title>YouTube</title>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-20 xl:mt-24 border-t border-white/10 py-6 xl:py-8 text-center text-sm text-white/50">
          © {/* */}2026{/* */} Oscar Luxury Auto. All rights reserved.
        </div>
      </div>
      <Script id="CommonFooterScript">
        {(gDom: any) => {
          const document = gDom.document;
          const accordions = document.querySelectorAll(".mobile-accordion-trigger");
          accordions.forEach((accordion: any) => {
            accordion.addEventListener("click", () => {
              const content = accordion.nextElementSibling;
              const isOpen = content.classList.contains("open");

              if (isOpen) {
                content.style.gridTemplateRows = "0fr";
                content.classList.remove("open");
                content.style.opacity = "0";
              } else {
                content.style.gridTemplateRows = "1fr";
                content.classList.add("open");
                content.style.opacity = "1";
              }
            });
          });

          const setActiveFooterLink = () => {
            const currentUrl = window.location.pathname + window.location.search + window.location.hash;
            document.querySelectorAll("a[data-footer-url]").forEach((link: HTMLAnchorElement) => {
              const url = new URL(link.href, window.location.origin);
              const linkUrl = url.pathname + url.search + url.hash;
              if (linkUrl === currentUrl) {
                link.classList.add("text-primary");
              } else {
                link.classList.remove("text-primary");
              }
            });
          };

          setTimeout(setActiveFooterLink, 1000);
        }}
      </Script>
    </footer>
  );
};

export default CommonFooter;
