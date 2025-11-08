import { Preload } from "streak/components";

interface ServiceBannerProps {
  data: {
    banner_image: string;
    banner_heading: string;
    banner_content: string;
    button_link: string;
    button_name: string;
  }
}

const ServiceBanner = (props: ServiceBannerProps) => {
  const { banner_image, banner_heading, banner_content, button_link, button_name } = props?.data || {};

  return (
    <div
      className="banner"
      style={{
        // background: `url('${banner_image}') no-repeat center center/cover`,
         background: `url('/images/play-area.webp') no-repeat center center/cover`,
      }}
    >
      <Preload src={banner_image} as="image" />
      <div className="banner-text">
        <h1>{banner_heading ?? ""}</h1>
        <p></p>
        <span dangerouslySetInnerHTML={{ __html: banner_content ?? "" }} />
        <p></p>
        <a href={button_link ?? ""} className="btn blue">
          {button_name ?? ""}
        </a>
      </div>
    </div>

  )
}

export default ServiceBanner;