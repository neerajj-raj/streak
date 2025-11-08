import { hasArrayElements } from "utils/commonUtils";

interface ServiceContentProps {
  data: {
    small_content: string;
    content_block: Array<{
      heading: string;
      content: string;
    }>

  }
}

const ServiceContent = (props: ServiceContentProps) => {
  const { small_content, content_block } = props?.data || {};

  return (
    <div
      className="main-content"

    >
      <div className="medium-container">
        <h2 dangerouslySetInnerHTML={{ __html: small_content ?? "" }} />
        {hasArrayElements(content_block) ?
          content_block?.map((block) => (
            <div key={block.heading}>
              <h3>{block.heading ?? ""}</h3>
              <p></p>
              <span dangerouslySetInnerHTML={{ __html: block.content ?? "" }} />
            </div>
          )) : ""}
      </div>
    </div>
  );
}

export default ServiceContent;