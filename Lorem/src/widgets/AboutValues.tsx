interface AboutValuesProps {
  data: {
    main_heading: string;
    left_side_list_block: {
      left_list_content: Array<{
        heading: string;
        content: string;
      }>
    };
    right_side_list_block: {
      right_list_content: Array<{
        heading: string;
        content: string;
      }>
    }
  }
};

const AboutValues = (props: AboutValuesProps) => {
  const { main_heading, left_side_list_block, right_side_list_block } = props?.data || {};

  return (
    <div className="value-sec">
      <div className="medium-container">
        <h2>{main_heading}</h2>
        <div className="flex">
          <div className="left" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            {left_side_list_block?.left_list_content?.map((each) => (
              <div className="set-sec-block">
                <strong>{each?.heading}</strong>
                <p dangerouslySetInnerHTML={{ __html: each?.content }} />
              </div>
            ))}

          </div>

          <div className="right" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
            {
              right_side_list_block?.right_list_content?.map((each) => (
                <div className="set-sec-block">
                  <strong>{each?.heading}</strong>
                  <p dangerouslySetInnerHTML={{ __html: each?.content }} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutValues;