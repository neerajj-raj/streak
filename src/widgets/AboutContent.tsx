interface AboutContentProps {
  data: {
    main_heading: string;
    content_block: string;
  }
};

const AboutContent = (props: AboutContentProps) => {
  const { main_heading, content_block } = props?.data || {};

  return (
    <div className="main-content">
      <div className="medium-container">
        <h2 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">{main_heading}</h2>
        <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" dangerouslySetInnerHTML={{ __html: content_block }} />
      </div>
    </div>
  )
}

export default AboutContent;