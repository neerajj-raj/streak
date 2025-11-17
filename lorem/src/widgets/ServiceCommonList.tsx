import { hasArrayElements } from "utils/commonUtils";

interface ServiceCommonListProps {
  data: {
    main_heading: string;
    top_full_width_image: string;
    top_heading: string;
    top_left_list_block: Array<{
      top_left_list: string;
    }>;
    top_right_list_block: Array<{
      top_right_list: string;
    }>;
    bottom_full_width_image: string;
    bottom_heading: string;
    bottom_list_block: Array<{
      bottom_list: string;
    }>;
  }
}

const ServiceCommonList = (props: ServiceCommonListProps) => {
  const {
    main_heading,
    top_full_width_image,
    top_heading, top_left_list_block,
    top_right_list_block,
    bottom_full_width_image,
    bottom_heading,
    bottom_list_block,
  } = props?.data || {};

  return (
    //#A2254E for Accessibility
    <div className="review-bg bg-pink service-detail" style={{ backgroundColor: "#A2254E" }}>
      <div className="why-choose">
        <div className="medium-container">
          <h2>{main_heading ?? ""}</h2>
          <img src={top_full_width_image} alt="service" loading="lazy" />
          <h3>{top_heading ?? ""}</h3>
          <div className="point-list">
            <ul className="points">
              {hasArrayElements(top_left_list_block) &&
                top_left_list_block?.map((item, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: item?.top_left_list ?? "" }} />
                ))}
            </ul>
            <ul className="points">
              {hasArrayElements(top_right_list_block) &&
                top_right_list_block.map((item, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: item?.top_right_list ?? "" }} />
                ))}
            </ul>
          </div>

          {bottom_full_width_image && (
            <img src={bottom_full_width_image} alt="service" loading="lazy" />
          )}

          {bottom_heading && <h4>{bottom_heading}</h4>}

          <ol className="numbers">
            {hasArrayElements(bottom_list_block) &&
              bottom_list_block?.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: item?.bottom_list ?? "" }} />
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ServiceCommonList;