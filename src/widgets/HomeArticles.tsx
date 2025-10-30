interface HomeArticlesProps {
  data: {
    main_heading: string;
    blogs: Array<{
      title: string;
      slug: string;
      acf: {
        blog_list_image: string;
        blog_list_expert_content: string;
      }
    }>
  }
}

const HomeArticles = (props: HomeArticlesProps) => {
  const { main_heading, blogs } = props?.data || {};

  return blogs?.length > 0 && (
    <div className="white-box" role="presentation">
      <div className="container">
        <h2 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100" className="aos-init">{main_heading}</h2>
        <div className="white-box-sec flex">
          {
            blogs?.map((blog, index) => (
              <a href={`/blog/${blog?.slug}`} key={blog?.slug}>
                <div className="white-box-section two-width aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={(index + 1) * 100}>
                  <img src={blog?.acf?.blog_list_image} alt={blog?.title} loading="lazy" />
                  <div className="white-box-content">
                    <h3>{blog?.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: blog?.acf?.blog_list_expert_content }} />
                    <div className="right-link">
                      <span className="line-btn blue">
                        Read More
                        <svg width="59" height="16" viewBox="0 0 59 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M58.7071 8.70711C59.0976 8.31658 59.0976 7.68342 58.7071 7.29289L52.3431 0.928932C51.9526 0.538408 51.3195 0.538408 50.9289 0.928932C50.5384 1.31946 50.5384 1.95262 50.9289 2.34315L56.5858 8L50.9289 13.6569C50.5384 14.0474 50.5384 14.6805 50.9289 15.0711C51.3195 15.4616 51.9526 15.4616 52.3431 15.0711L58.7071 8.70711ZM0 9H58V7H0V9Z" fill="#292C7E"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomeArticles;