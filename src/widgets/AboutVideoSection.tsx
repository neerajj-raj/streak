interface AboutVideoSectionProps {
  data: {
    video_poster_image: string;
    video: string;
    vision_block: {
      heading: string;
      content: string;
    }
    mission_block: {
      heading: string;
      content: string;
    }
  }
};

const AboutVideoSection = (props: AboutVideoSectionProps) => {
  const { video_poster_image, video, vision_block, mission_block } = props?.data || {};

  return (
    <div className="review-bg bg-yellow service-detail">
      <div className="why-choose">
        <div className="medium-container">
          <div className="video-container">
            <video id="video" poster={video_poster_image}>
              <source src={video} type="video/mp4" />
            </video>
            <div className="play-button-wrapper">
              <div title="Play video" className="play-gif" id="circle-play-b" style={{ opacity: "1" }}>
                {/* <!-- SVG Play Button --> */}
                <svg fill="#C0DD92" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g>
                        <path d="M256,0C114.511,0,0,114.497,0,256c0,141.49,114.495,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0 z M348.238,284.418l-120.294,69.507c-10.148,5.864-22.661,5.874-32.826,0.009c-10.158-5.862-16.415-16.699-16.415-28.426V186.493 c0-11.728,6.258-22.564,16.415-28.426c5.076-2.93,10.741-4.395,16.406-4.395c5.67,0,11.341,1.468,16.42,4.402l120.295,69.507 c10.149,5.864,16.4,16.696,16.4,28.418C364.639,267.722,358.387,278.553,348.238,284.418z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="goals">
            <div className="flex" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
              {/* Vission */}
              <div className="left">
                <h4>{vision_block?.heading}</h4>
                <p dangerouslySetInnerHTML={{ __html: vision_block?.content }} />
              </div>
              {/* Mission */}
              <div className="right" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
                <h4>{mission_block?.heading}</h4>
                <p dangerouslySetInnerHTML={{ __html: mission_block?.content }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutVideoSection;