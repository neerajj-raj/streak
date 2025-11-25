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
        background: `url('${banner_image}') no-repeat center center/cover`,
      }}
    >
      <Preload src={banner_image} as="image" />
      <div className="banner-text">
        <h1>{banner_heading ?? ""}</h1>
        <p></p>
        <span dangerouslySetInnerHTML={{ __html: banner_content ?? "" }} />
        {/* For SEO */}
        <h2 style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0, }}>{banner_content}</h2>
        <p></p>
        <a href={button_link ?? ""} className="btn blue">
          {button_name ?? ""}
        </a>
      </div>
    </div>
  )
}

export default ServiceBanner;