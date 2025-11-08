interface ServiceDetailProps {
  data: {
    heading: string;
    content: string;
    image: string;
  }
}
const ServiceDetail = (props: ServiceDetailProps) => {
  const { heading, content, image } = props?.data || {};

  return (
    heading && (
      //#A2254E for Accessibility
      <div className="review-bg bg-pink service-detail" style={{ backgroundColor: "#A2254E" }}>
        <div className="why-choose">
          <div className="medium-container">
            {image && <img src={image} alt="service" loading="lazy" />}
            <h4>{heading}</h4>
            <div
              className="p-l"
              dangerouslySetInnerHTML={{ __html: content ?? "" }}
            />
          </div>
        </div>
      </div>
    )
  );
}

export default ServiceDetail;