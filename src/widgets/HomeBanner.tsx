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
  const bannerSliders = props?.data?.banner_slider || {};
  const [banner1] = bannerSliders;

  return (
    <div className="banner" role="Banner">
      <div className="carousel">
        <div
          className="carousel-cell is-selected"
          style={{
            // background: `url('${banner1?.banner_image}') center bottom / cover no-repeat`,
            // background: `url('/images/banner-home.webp') center bottom / cover no-repeat`,
            // position: "absolute",
            left: "0px",
            transform: "translateX(0%)",
            // height: "700px",
            width: "100%",
          }}
        >
          <div className="banner-text">
            {banner1?.banner_heading && <h1>{banner1?.banner_heading}</h1>}
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