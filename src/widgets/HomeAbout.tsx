
interface HomeAboutProps {
  data: {
    main_heading: string;
    content: string;
    timeline_block: Array<{
      number: string;
      data_head: string;
    }>
  }
}

const HomeAbout = (props: HomeAboutProps) => {
  const { main_heading, content, timeline_block } = props?.data || {};
  return (
    <div className="about-sec">
      <div className="small-container">
        <h3 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100" className="aos-init">{main_heading}</h3>
        <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" className="aos-init" dangerouslySetInnerHTML={{ __html: content }} />
        <p></p>
      </div>
      {timeline_block?.length > 0 &&
        <div className="years">
          <div className="medium-container">
            <ul>
              {
                timeline_block?.map((each, index) => (
                  <li key={each?.data_head} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={(index + 1) * 100} className="aos-init">
                    <strong>{each?.number} <sup>+</sup></strong>
                    <span>{each?.data_head}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>}
    </div>
  )
}

export default HomeAbout;