import { Script } from "streak/components";
import { hasArrayElements } from "utils/commonUtils";

interface ServiceFaqSectionProps {
  data: {
    main_heading: string;
    faq_list: Array<{
      heading: string;
      content: string;
    }>
  }
}
const ServiceFaqSection = (props: ServiceFaqSectionProps) => {
  const { main_heading, faq_list } = props?.data || {};

  return (
    <div
      className="first-accordian"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
      id="service-faq"
    >
      <div className="medium-container">
        <h2 data-aos="fade-in">{main_heading ?? ""}</h2>
        <div className="common-flex">
          <div className="accordian-sec">
            <div className="accordion-items">
              {hasArrayElements(faq_list) &&
                faq_list.map((item, j) => (
                  <div key={j}>
                    <div className={`accordion-heading ${j === 0 ? "active" : ""}`}>
                      <h3>{item.heading}</h3>
                    </div>
                    <div
                      className="accordion-content border-bottom"
                      style={{ display: j == 0 ? "block" : "none" }}
                    >
                      <p></p>
                      <span dangerouslySetInnerHTML={{ __html: item.content ?? "" }} />
                      <p></p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Script id="ServiceFaqSection">
        {(gDom: any) => {
          const loadEventListeners = () => {
            const rootSection = document?.getElementById("service-faq");
            const headings = rootSection?.querySelectorAll('.accordion-heading');
            headings?.forEach((heading) => {
              heading.addEventListener('click', function () {
                const isActive = heading.classList.contains('active');

                // Close all
                headings.forEach((h) => {
                  h.classList.remove('active');
                  const content = h.nextElementSibling;
                  if (content && content instanceof HTMLDivElement) content.style.display = 'none';
                });

                // Toggle this one
                if (!isActive) {
                  heading.classList.add('active');
                  const content = heading.nextElementSibling;
                  if (content && content instanceof HTMLDivElement) content.style.display = 'block';
                }
              });
            });
          }

          if (gDom.ftr) {
            gDom.addEventListener("userIntracted", loadEventListeners);
          } else {
            loadEventListeners()
          }
        }}
      </Script>
    </div>
  );
}

export default ServiceFaqSection;