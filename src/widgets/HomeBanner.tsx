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

        </div>
      </div>
    </div>
  )
}

export default HomeBanner;