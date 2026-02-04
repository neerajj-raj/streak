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

import ChevronDown from "@common/icons/ChevronDown";
import CloseIcon from "@common/icons/CloseIcon";
import MenuIcon from "@common/icons/MenuIcon";
import PhoneIcon from "@common/icons/PhoneIcon";
import { hasArrayElements } from "@utils/commonUtils";
import { Dynamic, Script } from "streak/components";

interface CommonHeaderProps {
  data: {
    isLightPage?: boolean;
    headerMenu: Array<{
      id: number;
      title: string;
      url: string;
      parent: string;
      order: number;
      children?: Array<{ id: number; title: string; url: string; parent: string; order: number }>;
    }>;
  };
}

const CommonHeader = (props: CommonHeaderProps) => {
  const { headerMenu: menuItems, isLightPage } = props?.data || {};

  return (
    <>
      <div className="w-full z-30 fixed top-0 bg-black/90 backdrop-blur py-3 hidden" />
      <header
        id="header"
        className={`w-full z-30 header-height absolute top-10 ${isLightPage ? "border-b border-slate-100" : "border-0"} bg-transparent`}
      >
        <div className={`container flex h-full justify-between ${isLightPage ? "text-black" : "text-white"}`}>
          <a href="/" className="flex items-center">
            <img
              src={isLightPage ? "/images/oscar-logo.webp" : "/images/oscar-logo-light.webp"}
              alt="Oscar Luxury Auto"
              width={131}
              height={30}
              fetchPriority="high"
              className="max-lg:h-6 max-md:w-40 max-md:h-auto max-lg:w-auto transition-transform duration-300 ease-out"
            />
          </a>
          <nav className="hidden lg:flex">
            {hasArrayElements(menuItems) &&
              menuItems.map((item) => {
                return hasArrayElements(item?.children) ? (
                  <div key={item.id} className="relative group">
                    <button className="h-full flex items-center gap-1 hover:text-primary transition-colors uppercase font-bold text-sm px-4">
                      {item.title}
                      <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    <div
                      className={`
                          absolute left-0 top-16 min-w-56 py-1 rounded-xl border border-white/10 bg-black/95 backdrop-blur shadow-sm
                          transition-all duration-300 opacity-0 -translate-y-2 pointer-events-none
                          group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                          ${isLightPage ? "bg-white text-black border-0" : "text-white"}
                      `}
                    >
                      {item.children?.map((sub) => (
                        <a key={sub.id} href={sub.url} className="block px-3 xl:px-4 py-2.5 text-sm font-medium hover:text-primary transition-colors">
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.id}
                    href={item.url}
                    className="flex items-center hover:text-primary transition-colors uppercase font-bold text-xs xl:text-sm px-3 xl:px-4"
                  >
                    {item.title}
                  </a>
                );
              })}
          </nav>
          <div className="hidden lg:flex items-center gap-2">
            <a href="tel:+971504004007" className="flex items-center font-medium hover:text-primary transition-colors text-sm xl:text-base">
              <PhoneIcon size={20} className="me-2" />
              +97150 400 4007
            </a>
          </div>
          <button className="lg:hidden" id="mobile-menu-icon" aria-label="menuIcon">
            <MenuIcon size={28} />
          </button>
        </div>
      </header>
      {/* For BG blur */}
      <div id="background-blur-div" className="lg:hidden"></div>
      {/* Mobile Menus */}
      <Dynamic id="HeaderMobileMenu">
        <aside
          id="mobile-menu-overlay"
          className="fixed top-0 right-0 h-full w-72 bg-black text-white z-50 py-6 flex flex-col gap-2 transition-transform duration-300 translate-x-full"
        >
          <button className="self-end p-3" id="mobile-close-icon">
            <CloseIcon size={26} />
          </button>

          <nav className="flex flex-col divide-y divide-white/10" id="mobile-menu-nav">
            {menuItems.map((item) => {
              return hasArrayElements(item?.children) ? (
                <div key={item.id} className="header-menu-with-submenu">
                  <div className="flex">
                    <a href={item.url} className="hover:text-primary transition-colors px-5 py-3">
                      {item.title}
                    </a>
                    <button className="ml-auto shrink-0 flex items-center px-3 border-l border-gray-900">
                      <ChevronDown size={18} className="transition-transform duration-300" />
                    </button>
                  </div>
                  <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0">
                    <div className="py-3 border-t border-white/10">
                      {item?.children?.map((sub) => (
                        <a key={sub.id} href={sub.url} className="block px-8 py-2 text-sm text-white/80 hover:text-primary transition-colors">
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={item.id} href={item.url} className="hover:text-primary transition-colors px-5 py-3">
                  {item.title}
                </a>
              );
            })}
          </nav>

          <div className="mt-auto flex items-center gap-2 p-5 pb-0 border-t border-zinc-800">
            <a href="tel:+971504004007" className="flex items-center font-medium hover:text-primary transition-colors">
              <PhoneIcon size={20} className="ms-2" />
              +97150 400 4007
            </a>
          </div>
        </aside>
      </Dynamic>
      <Script id="CommonHeader" options={{ isLightPage }}>
        {(gDom: any, options: { isLightPage: boolean }) => {
          const header = gDom.geById("header");
          const menuIcon = gDom.geById("mobile-menu-icon") as HTMLButtonElement;
          const bgBlurDiv = gDom.geById("background-blur-div") as HTMLDivElement;

          const closeMobileMenu = (e: any) => {
            e?.preventDefault();
            if (document.body.getAttribute("mobile-menu-open") === "true") {
              const mobileMenu = gDom.geById("mobile-menu-overlay") as HTMLDivElement;
              mobileMenu?.classList?.remove("translate-x-0");
              mobileMenu?.classList?.add("translate-x-full");
              bgBlurDiv.style = "";
              document.body.removeAttribute("mobile-menu-open");
            }
          };

          const loadSubMenuActions = () => {
            const mobileMenuNav = gDom.geById("mobile-menu-nav") as HTMLDivElement;
            if (mobileMenuNav) {
              mobileMenuNav.addEventListener("click", (e) => {
                if ((e.target as HTMLElement).closest("a")) return;
                e.preventDefault();

                const menuItem = (e.target as HTMLElement).closest(".header-menu-with-submenu");
                if (!menuItem || !mobileMenuNav.contains(menuItem)) return;

                const isOpen = menuItem.getAttribute("data-submenu-open") === "true";
                const submenu = menuItem.querySelector("div.overflow-hidden");
                const chevron = menuItem.querySelector("svg");

                if (!isOpen) {
                  submenu?.classList.remove("max-h-0", "opacity-0");
                  submenu?.classList.add("max-h-96", "opacity-100");
                  if (chevron) chevron.style.rotate = "180deg";
                  menuItem.setAttribute("data-submenu-open", "true");
                } else {
                  submenu?.classList.remove("max-h-96", "opacity-100");
                  submenu?.classList.add("max-h-0", "opacity-0");
                  if (chevron) chevron.style.rotate = "0deg";
                  menuItem.setAttribute("data-submenu-open", "false");
                }
              });
            }
          };

          bgBlurDiv.onclick = closeMobileMenu;

          menuIcon.onclick = (e) => {
            e?.preventDefault();
            gDom.loadDynamicComponent("HeaderMobileMenu", () => {
              const mobileMenu = gDom.geById("mobile-menu-overlay") as HTMLDivElement;
              mobileMenu?.classList?.remove("translate-x-full");
              mobileMenu?.classList?.add("translate-x-0");
              bgBlurDiv.style = "backdrop-filter: blur(4px); position: fixed; inset: 0; width: 100%; height: 100%; z-index: 40;";
              document.body.setAttribute("mobile-menu-open", "true");
              gDom.geById("mobile-close-icon").onclick = closeMobileMenu;
              loadSubMenuActions();
            });
          };

          const changeBackground = () => {
            if (window.scrollY > 35) {
              // Sticky
              header.className = `w-full z-30 header-height fixed top-0 backdrop-blur ${options?.isLightPage ? "border-b border-slate-100 bg-white shadow-sm" : "border-0 bg-black/90"}`;
            } else {
              header.className = `w-full z-30 header-height absolute top-10 ${options?.isLightPage ? "border-b border-slate-100" : "border-0"} bg-transparent`;
            }
          };

          gDom.addEventListener("scrolling", changeBackground);
        }}
      </Script>
    </>
  );
};

export default CommonHeader;
