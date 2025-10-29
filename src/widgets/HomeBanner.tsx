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
    <div className="banner">
      <div className="carousel">
        <div
          className="carousel-cell is-selected"
          style={{
            // background: `url('${banner1?.banner_image}') center bottom / cover no-repeat`,
            background: `url('/images/banner-home.webp') center bottom / cover no-repeat`,
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
                <a href={banner1?.button_link_1} className="btn blue">
                  {banner1?.button_name_1}
                </a>}
              {banner1?.button_name_2 &&
                <a href={banner1?.button_link_2} className="btn orange">
                  {banner1?.button_name_2}
                </a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner;