import { Script } from "streak/components";

interface HomeWhyChooseUsProps {
  data: {
    why_choose_us__and_review_section: {
      why_choose_us_block: {
        main_heading: string;
        button_name: string;
        button_link: string;
        why_choose_us_box: Array<{
          image: string;
          heading: string;
          content: string;
        }>
      },
      review_block: {
        review_image: string;
        review_content: string;
        name: string;
        button_name: string;
        button_link: string;
      }
    }
  }
}

const HomeWhyChooseUs = (props: HomeWhyChooseUsProps) => {
  const { why_choose_us_block, review_block } = props?.data?.why_choose_us__and_review_section || {};

  return (
    <div className="review-bg bg-blue" role="presentation">
      <div className="why-choose">
        <div className="container">
          <div className="space-flex">
            <div className="content-text">
              <h2>{why_choose_us_block?.main_heading}</h2>
            </div>
            <div className="special-section">
              <div className="right-link">
                <a href={why_choose_us_block?.button_link} className="line-btn">
                  {why_choose_us_block?.button_name}
                </a>
              </div>
            </div>
          </div>
          <div className="why-choose-box flex">
            {
              why_choose_us_block?.why_choose_us_box?.map((each, index) => (
                <div key={each?.heading} className="why-choose-box-sec aos-init" style={{ background: `url('${each?.image}') no-repeat center center/cover` }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={(index + 1) * 100}>
                  <div className="why-content">
                    <h3>{each?.heading}</h3>
                    <p dangerouslySetInnerHTML={{ __html: each?.content }} />
                    <p></p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {review_block &&
        <div className="medium-container qts-block">
          <div className="flex aos-init" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
            <div className="left">
              <svg width="87" height="71" viewBox="0 0 87 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.7654 8.76281L24.5103 37.1833L14.8974 39.9C16.012 37.8102 17.2658 36.1384 18.659 34.8846C20.0521 33.4914 21.6543 32.7949 23.4654 32.7949C27.5056 32.7949 31.1278 34.4667 34.3321 37.8102C37.6756 41.0145 39.3474 45.194 39.3474 50.3487C39.3474 55.782 37.4667 60.4491 33.7051 64.35C30.0829 68.2508 25.5551 70.2013 20.1218 70.2013C14.9671 70.2013 10.4393 68.3205 6.53846 64.559C2.77692 60.6581 0.896154 55.9214 0.896154 50.3487C0.896154 48.1197 1.3141 45.5423 2.15 42.6167C3.12521 39.691 4.86667 35.8598 7.37436 31.1231L24.0923 0.194854L39.7654 8.76281ZM86.7846 8.76281L71.5295 37.1833L62.1256 39.9C63.1009 37.8102 64.285 36.1384 65.6782 34.8846C67.2107 33.4914 68.8128 32.7949 70.4846 32.7949C74.5248 32.7949 78.2167 34.4667 81.5603 37.8102C84.9039 41.0145 86.5756 45.194 86.5756 50.3487C86.5756 55.782 84.6949 60.4491 80.9333 64.35C77.3111 68.2508 72.7833 70.2013 67.35 70.2013C62.1953 70.2013 57.6675 68.3205 53.7667 64.559C50.0051 60.6581 48.1244 55.9214 48.1244 50.3487C48.1244 48.1197 48.5423 45.5423 49.3782 42.6167C50.2141 39.691 51.8859 35.8598 54.3936 31.1231L71.3205 0.194854L86.7846 8.76281Z" fill="white"></path>
              </svg>
              <img src={review_block?.review_image} alt="review image" loading="lazy" />
            </div>
            <div className="right">
              <h4 dangerouslySetInnerHTML={{ __html: review_block.review_content }} />
              <b>{review_block.name}</b>
            </div>
          </div>
          <div className="line-sec">
            <div className="flex">
              <div className="flex-color"></div>
              {review_block?.button_name &&
                <div className="link-content">
                  <a href={review_block?.button_link} target="_blank">
                    {review_block?.button_name}
                    <img src="/icons/arrow-right.svg" alt="arrow right" loading="lazy" />
                  </a>
                </div>}
            </div>
          </div>
        </div>}
    </div>
  )
}

export default HomeWhyChooseUs;