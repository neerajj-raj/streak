interface AboutWhyChooseUsProps {
  data: {
    main_heading: string;
    content: string;
    timeline_block: Array<{
      number: string;
      content: string;
    }>;
    button_name: string;
    button_link: string;
  }
};

const AboutWhyChooseUs = (props: AboutWhyChooseUsProps) => {
  const { main_heading, content, timeline_block, button_name, button_link } = props?.data || {};

  return (
    <div className="about-sec why-choose-content">
      <div className="small-container">
        <h3 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">{main_heading}</h3>
        <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className="years">
        <div className="medium-container">
          <ul>
            {
              timeline_block?.map((each, i) => (
                <li key={each?.content} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={(i + 1) * 100}>
                  <strong>{each?.number}<sup>+</sup></strong>
                  <span>{each?.content}</span>
                </li>
              ))
            }
          </ul>
          <div className="btn-wrap" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
            <a href={button_link} className="blue btn">{button_name}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWhyChooseUs;