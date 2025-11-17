import { hasArrayElements } from "utils/commonUtils";

interface ServiceWhyChooseUsProps {
  data: {
    main_heading: string;
    block_list_section: Array<{
      heading: string;
      content: string;
    }>;
    right_side_image: string;
  }
}

const ServiceWhyChooseUs = (props: ServiceWhyChooseUsProps) => {
  const { main_heading, block_list_section, right_side_image } = props?.data || {};

  return (
    <div className="why-choose-box-ser">
      <div className="medium-container">
        <h2>{main_heading ?? ""}</h2>
        <div className="flex">
          <div
            className="left"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {hasArrayElements(block_list_section) &&
              block_list_section?.map((block, i) => (
                <div key={block.heading}>
                  <h3>{block.heading ?? ""}</h3>
                  <p></p>
                  <span dangerouslySetInnerHTML={{ __html: block.content ?? "" }} />
                  <p></p>
                </div>
              ))}
          </div>
          <div
            className="right"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {right_side_image && <img src={right_side_image} alt="service" loading="lazy" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceWhyChooseUs;