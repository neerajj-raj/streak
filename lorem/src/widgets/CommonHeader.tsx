import { Script } from "streak/components";

interface MenuElement {
  id: string;
  title: string;
  url: string;
  parent: string;
}

interface CommonHeaderProps {
  data: {
    headerPhone: string;
    siteLogo: string;
    mobile_contact_button: string;
    mobile_contact_button_link: string;
    headerMenus: MenuElement[]
  }
}

const CommonHeader = (props: CommonHeaderProps) => {
  const { headerPhone, headerMenus, mobile_contact_button, mobile_contact_button_link } = props?.data || {};

  const firstLevelItems = headerMenus.filter((item) => item.parent === "0");

  const getChildren = (parentId: string) => headerMenus.filter((item) => item.parent === String(parentId));

  const renderMenuItems = (items: MenuElement[], className = "") => {
    return (
      <ul className={className}>
        {items.map((item) => {
          const children = getChildren(item.id);
          const hasChildren = children?.length > 0;

          return (
            <li
              key={item.id}
              id={`menu-item-${item.id}`}
              className={`menu-item ${hasChildren
                ? "menu-item-has-children active"
                : "menu-item-type-post_type"
                }`}
            >
              <a href={item.url}>{item.title}</a>

              {/* Render sub-menu recursively */}
              {hasChildren && renderMenuItems(children, "sub-menu")}
            </li>
          );
        })}
      </ul>
    );
  };


  return (
    <div className="header" id="header-root" role="navigation">
      <div className="second-header">
        <div className="container flex">
          <header>
            <div className="logo">
              <a href="/">
                <img src={"/icons/logo.svg"} alt="site logo" style={{ height: "41.28px" }} />
              </a>
            </div>
            <nav id="header-nav-id">
              {renderMenuItems(firstLevelItems)}
              {mobile_contact_button &&
                <div className="mobile-only">
                  <a href={mobile_contact_button_link} className="btn">{mobile_contact_button}</a>
                </div>}
            </nav>
            {headerPhone &&
              <div className="header-btn">
                <a href={`tel:${headerPhone}`} className="btn blue">
                  <img src="/icons/phone.svg" alt="phone" loading="lazy" />
                  {headerPhone}
                </a>
              </div>}
            <div id="hamburger-1" className="menu-toggle hamburger">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </header>
        </div>
      </div>
      <Script id="CommonHeader">
        {() => {
          const hamburger = document.getElementById("hamburger-1") as HTMLDivElement;
          const navElement = document.getElementById("header-nav-id");

          const handleScroll = () => {
            const rootSection = document.getElementById("header-root");
            if (window.scrollY > 50) {
              rootSection?.classList.add("bgcolor");
            } else {
              rootSection?.classList.remove("bgcolor");
            }
          }

          document.addEventListener("scroll", handleScroll);

          hamburger.onclick = () => {
            const isNavOpen = hamburger?.getAttribute("isNavOpen") === "true";
            if (isNavOpen) {
              hamburger.classList.remove("is-active");
              navElement?.classList.remove("active");
              hamburger.setAttribute("isNavOpen", "false");
            } else {
              hamburger.classList.add("is-active");
              navElement?.classList.add("active");
              hamburger.setAttribute("isNavOpen", "true");
            }
          }
        }}
      </Script>
    </div>
  )
}

export default CommonHeader;