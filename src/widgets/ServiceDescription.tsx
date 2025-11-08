interface ServiceDescriptionProps {
  data: {
    heading: string;
    content: string;
  }
}

const ServiceDescription = (props: ServiceDescriptionProps) => {
  const { heading, content } = props?.data || {};

  return (
    heading && (
      <div
        className="small-service-description"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <div className="medium-container">
          <h3 dangerouslySetInnerHTML={{ __html: heading }} />
          <p></p>
          <span dangerouslySetInnerHTML={{ __html: content ?? "" }} />
          <p></p>
        </div>
      </div>
    )
  );
}

export default ServiceDescription;