interface CommonFooterProps {
  data: {
    copyright: string;
    footer_appointment_block: {
      image: string;
      heading: string;
      content: string;
      button_name: string;
      button_link: string;
      phone_number: string;
    },
    main_footer: {
      contact_block: {
        address: string;
        address_location: string;
        phone_block: Array<{ phone: string }>;
        "e-mail": string;
        social_media: Array<{
          social_icon: string;
          social_url: string;
        }>;
        whatsapp_number: string;
      }
    };
    quickLinks: Array<{
      title: string;
      url: string;
      parent: string;
    }>;
    menu1: Array<{
      title: string;
      url: string;
      parent: string;
    }>;
  }
}

const CommonFooter = (props: CommonFooterProps) => {
  const { copyright, footer_appointment_block, main_footer, quickLinks, menu1 } = props?.data || {};

  return (
    <>
      <div className="footer" role="navigation">
        <div className="first-footer">
          <div className="container">
            <div className="first-footer-sec">
              <img src={footer_appointment_block?.image} alt="footer" loading="lazy" />
              <h4>{footer_appointment_block?.heading}</h4>
              <p>{footer_appointment_block?.content}</p>
              <div className="btn-flex">
                <a href={footer_appointment_block?.button_link} className="btn blue">
                  {footer_appointment_block?.button_name}
                </a>
                {/* #8A4600 For LH Accessibility */}
                <a href={`tel:${footer_appointment_block?.phone_number}`} className="btn orange" style={{ backgroundColor: "#8A4600" }}>
                  Call Us {footer_appointment_block?.phone_number}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="second-footer">
          <div className="container">
            <div className="second-ft flex">
              <div className="ft-left aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <div className="set-sec">
                  <strong>Reach Us</strong>
                  <a href={main_footer?.contact_block?.address_location} target="_blank">
                    {main_footer?.contact_block?.address}
                  </a>
                </div>
                <div className="set-sec pt-t">
                  <strong>Get in touch</strong>
                  {
                    main_footer?.contact_block?.phone_block?.map((each) => (
                      <a key={each?.phone} href={`tel:${each?.phone}`}>{each?.phone}</a>
                    ))
                  }
                  <a href={`mailto:${main_footer?.contact_block?.["e-mail"]}`}>{main_footer?.contact_block?.["e-mail"]}</a>
                </div>
                <div className="connect pt-t">
                  <strong>Connect</strong>
                  <ul>
                    {
                      main_footer?.contact_block?.social_media?.map((each) => (
                        <li key={each?.social_url}>
                          <a href={each?.social_url} target="_blank">
                            <img src={each?.social_icon} alt="social media" loading="lazy" /></a>
                        </li>
                      ))
                    }
                    {/* Forcefully adding whatsapp */}
                    {
                      main_footer?.contact_block?.whatsapp_number && (
                        <li>
                          <a href={`https://wa.me/${main_footer?.contact_block?.whatsapp_number}`} target="_blank">
                            <img src="icons/whatsapp.svg" alt="whatsapp" loading="lazy" />
                          </a>
                        </li>
                      )
                    }
                  </ul>
                </div>
              </div>
              <div className="ft-right aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div className="flex">
                  <div className="services">
                    <strong>Services</strong>
                    <div className="flex">
                      <ul>
                        {
                          menu1?.map((each) => (
                            <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-351" key={each?.title}>
                              <a href={each?.url}>
                                {each?.title}
                              </a>
                            </li>
                          ))
                        }
                      </ul>
                      <ul>
                      </ul>
                    </div>
                  </div>
                  <div className="links">
                    <strong>Quick Links</strong>
                    <ul>
                      {
                        quickLinks?.map((each) => (
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-348">
                            <a href={each?.url}>
                              {each?.title}
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                <div className="copy-right">
                  <a href="/">
                    {copyright}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><div className="whatsapp-icon">
        <a href={`https://wa.me/${main_footer?.contact_block?.whatsapp_number}`} target="_blank" aria-label="Chat on WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="800" width="800" viewBox="0 0 308 308"><path d="M227.904 176.981c-.6-.288-23.054-11.345-27.044-12.781-1.629-.585-3.374-1.156-5.23-1.156-3.032 0-5.579 1.511-7.563 4.479-2.243 3.334-9.033 11.271-11.131 13.642-.274.313-.648.687-.872.687-.201 0-3.676-1.431-4.728-1.888-24.087-10.463-42.37-35.624-44.877-39.867-.358-.61-.373-.887-.376-.887.088-.323.898-1.135 1.316-1.554 1.223-1.21 2.548-2.805 3.83-4.348l1.812-2.153c1.86-2.164 2.688-3.844 3.648-5.79l.503-1.011c2.344-4.657.342-8.587-.305-9.856-.531-1.062-10.012-23.944-11.02-26.348-2.424-5.801-5.627-8.502-10.078-8.502-.413 0 0 0-1.732.073-2.109.089-13.594 1.601-18.672 4.802C90 87.918 80.89 98.74 80.89 117.772c0 17.129 10.87 33.302 15.537 39.453.116.155.329.47.638.922 17.873 26.102 40.154 45.446 62.741 54.469 21.745 8.686 32.042 9.69 37.896 9.69 2.461 0 4.43-.193 6.167-.364l1.102-.105c7.512-.666 24.02-9.22 27.775-19.655 2.958-8.219 3.738-17.199 1.77-20.458-1.348-2.216-3.671-3.331-6.612-4.743zM156.734 0C73.318 0 5.454 67.354 5.454 150.143c0 26.777 7.166 52.988 20.741 75.928L.212 302.716a4 4 0 0 0 .933 4.085C1.908 307.58 2.943 308 4 308a3.98 3.98 0 0 0 1.211-.188l79.92-25.396c21.87 11.685 46.588 17.853 71.604 17.853C240.143 300.27 308 232.923 308 150.143 308 67.354 240.143 0 156.734 0zm0 268.994c-23.539 0-46.338-6.797-65.936-19.657-.659-.433-1.424-.655-2.194-.655a4 4 0 0 0-1.212.188l-40.035 12.726 12.924-38.129a4 4 0 0 0-.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 0-65.543 53.754-118.867 119.826-118.867 66.064 0 119.812 53.324 119.812 118.867.001 65.535-53.746 118.851-119.811 118.851z"></path></svg>
          <span className="ripple"></span>
        </a>
      </div></>
  )
}

export default CommonFooter;