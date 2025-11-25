import { Preload } from "streak/components";

interface HomeBannerProps {
  data: {
    banner_slider: Array<{
      banner_image: string;
      banner_heading: string;
      banner_content: string;
      button_name_1: string;
      button_link_1: string;
      button_name_2: string;
      button_link_2: string;
    }>
  }
}

const HomeBanner = (props: HomeBannerProps) => {
  const [banner1] = props?.data?.banner_slider || [];

  return banner1 && (
    <div className="banner" role="banner">
      <div className="carousel">
        <Preload src={banner1?.banner_image} as="image" />
        <div className="carousel-cell">
          <img
            src={banner1?.banner_image}
            alt="banner background"
            loading="eager"
            fetchPriority="high"
            className="banner-bg"
          />
          <div className="banner-text">
            {banner1?.banner_heading && <h1>{banner1?.banner_heading}</h1>}
            <h2></h2>
            <p></p>
            {banner1?.banner_content && <div dangerouslySetInnerHTML={{ __html: banner1?.banner_content }}></div>}
            <p></p>
            <div className="btn-flex">
              {banner1?.button_name_1 &&
                <a href={banner1?.button_link_1} className="btn blue" aria-label="contact-us">
                  {banner1?.button_name_1}
                </a>}
              {banner1?.button_name_2 &&
                // #8A4600 For LH Accessibility
                <a href={banner1?.button_link_2} className="btn orange" aria-label="about-us" style={{ backgroundColor: "#8A4600" }}>
                  {banner1?.button_name_2}
                  {/* For SEO */}
                  <span style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0, }}>
                    about our company
                  </span>
                </a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner;