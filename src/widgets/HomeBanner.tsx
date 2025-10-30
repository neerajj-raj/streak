import { Preload } from "streak/components";

interface HomeBannerProps {
  data: {
    banner_slider: Array<{
      banner_image: string;
      banner_heading: string;
      banner_content: string;
      button_name_1: string;
      button_link_1: string;
      button_name_2: string;
      button_link_2: string;
    }>
  }
}

const HomeBanner = (props: HomeBannerProps) => {
  const [banner1] = props?.data?.banner_slider || [];

  return banner1 && (
    <div
      role="banner"
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0 0 210px 100px",
        boxShadow: "3px 40px 0px #2a2c7e",
        overflow: "hidden",
        backgroundColor: "#f9f6ef", // ensures no white flash before image
        contain: "layout paint", // isolates layout paint
      }}
    >
      <div style={{ width: "100%" }}>
        <Preload src={banner1?.banner_image} as="image" />

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "90vh",
            minHeight: "800px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            borderRadius: "0 0 210px 100px",
            overflow: "hidden",
            willChange: "transform",
          }}
        >
          <img
            src={banner1?.banner_image}
            alt="banner background"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center bottom",
              zIndex: 0,
              transform: "translateZ(0)",
              willChange: "opacity, transform",
              backgroundColor: "#f9f6ef", // placeholder bg color
            }}
          />

          <div
            style={{
              padding: "10px 45% 0 0",
              maxWidth: "1500px",
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "flex-start",
              zIndex: 2,
              position: "relative",
              textShadow: "0 1px 3px rgba(0,0,0,0.3)",
              color: "#292C7E",
            }}
          >
            {banner1?.banner_heading && (
              <h1
                style={{
                  margin: 0,
                  fontSize: "3.5em",
                  fontWeight: 600,
                  lineHeight: 1,
                  color: "#292C7E",
                  fontFamily: '"Outfit", sans-serif',
                }}
              >
                {banner1?.banner_heading}
              </h1>
            )}

            {banner1?.banner_content && (
              <div
                style={{
                  width: "100%",
                  fontSize: "1.7em",
                  padding: "15px 20% 20px 0",
                  color: "#232323",
                  fontWeight: 400,
                  fontFamily: '"Outfit", sans-serif',
                }}
                dangerouslySetInnerHTML={{ __html: banner1?.banner_content }}
              />
            )}

            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              {banner1?.button_name_1 && (
                <a
                  href={banner1?.button_link_1}
                  aria-label="contact-us"
                  style={{
                    backgroundColor: "#292C7E",
                    color: "#fff",
                    borderRadius: "80px",
                    textAlign: "center",
                    padding: "10px 20px",
                    fontWeight: 500,
                    fontSize: "1.1em",
                    textDecoration: "none",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  {banner1?.button_name_1}
                </a>
              )}

              {banner1?.button_name_2 && (
                <a
                  href={banner1?.button_link_2}
                  aria-label="about-us"
                  style={{
                    backgroundColor: "#8A4600",
                    color: "#fff",
                    borderRadius: "80px",
                    textAlign: "center",
                    padding: "10px 20px",
                    fontWeight: 500,
                    fontSize: "1.1em",
                    textDecoration: "none",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  {banner1?.button_name_2}
                  <span
                    style={{
                      position: "absolute",
                      width: "1px",
                      height: "1px",
                      padding: 0,
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0 0 0 0)",
                      whiteSpace: "nowrap",
                      border: 0,
                    }}
                  >
                    about our company
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomeBanner;