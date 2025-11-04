import { Preload } from "streak/components";

interface AboutBannerProps {
  data: {
    banner_image: string;
    banner_heading: string;
    banner_content: string;
    banner_button: string;
    banner_button_link: string;
  }
}

const AboutBanner = (props: AboutBannerProps) => {
  const { banner_image, banner_heading, banner_content, banner_button, banner_button_link } = props?.data || {};

  return (
    <div className="banner" role="banner" style={{overflow: "hidden"}}>
      <Preload src={banner_image} as="image" />
      <img
        src={banner_image}
        alt="banner background"
        loading="eager"
        fetchPriority="high"
        className="banner-bg"
      />
      <div className="banner-text">
        {banner_heading && <h1>{banner_heading}</h1>}
        <p></p>
        {banner_content && <div dangerouslySetInnerHTML={{ __html: banner_content }}></div>}
        <p></p>
        {banner_button &&
          <a href={banner_button_link} className="btn blue" aria-label="contact-us">
            {banner_button}
          </a>}
      </div>
    </div>
  )
}

export default AboutBanner;