interface HomeServicesProps {
  data: {
    services: Array<{
      title: string;
      slug: string;
      acf: {
        services_list_icon_image: string;
        services_list_expert_content: string
      }
    }>
    main_heading: string;
    containerClass: string;
  }
}

const HomeServices = (props: HomeServicesProps) => {
  const { main_heading, services, containerClass } = props?.data || {};

  return services?.length > 0 && (
    <div className="service" id="service" role="presentation">
      <div className={containerClass || "container"}>
        <div className="content-text">
          <h2 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">{main_heading ?? ""}</h2>
        </div>
        <div className="servcie-grid">
          {
            services?.map((service, index) => (
              <a href={`/services/${service?.slug}`} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={(index + 1) * 100} className="aos-init">
                <div className="grid-box">
                  <div className="flex">
                    <img src={service?.acf?.services_list_icon_image} alt={service?.title} loading="lazy" />
                    <div className="grid-content">
                      <h3>{service?.title}</h3>
                      <span dangerouslySetInnerHTML={{ __html: service?.acf?.services_list_expert_content }} />
                      <b style={{ color: "#000" }}>Read More</b>
                    </div>
                  </div>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomeServices;