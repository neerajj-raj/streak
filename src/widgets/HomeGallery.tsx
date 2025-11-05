import { Script } from "streak/components";

interface HomeGalleryProps {
  data: {
    main_heading: string;
    button_name: string;
    button_link: string;
    gallery_slider: Array<{
      gallery_image: string
    }>
  }
}

const HomeGallery = (props: HomeGalleryProps) => {
  const { main_heading, gallery_slider, button_name, button_link } = props?.data || {};

  return gallery_slider?.length > 0 && (
    <section role="presentation">
      {main_heading &&
        <div className="container">
          <h2
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="aos-init"
          >
            {main_heading}
          </h2>
        </div>}

      <div className="gallery-slider">
        <div
          className="carousel"
          id="HomeGalleryId"
          data-flickity='{ "freeScroll": false, "contain": false, "wrapAround": true, "prevNextButtons": true, "pageDots": false }'
        >
          {gallery_slider.map((each, index) => (
            <div key={each?.gallery_image} className="carousel-cell">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2NjYyIvPjwvc3ZnPg=="
                data-src={each?.gallery_image}
                alt={`gallery-${index}`}
                loading="lazy"
                id="gallery_images"
              />
            </div>
          ))}
        </div>

        {button_name &&
          <div className="btn-flex">
            <a href={button_link} className="btn blue">
              {button_name}
            </a>
          </div>}
      </div>

      <Script id="HomeGallery">
        {(gDom: any) => {
          gDom
            .loadPackage("js/flickity.pkgd.min.js")
            .then(() => {
              const carousel = document.getElementById('HomeGalleryId');
              const Flickity = (gDom as any).Flickity;
              const loadDynamicContents = () => {
                const galleryImages = document.querySelectorAll("#gallery_images");
                galleryImages?.forEach((each) => {
                  const image = each as HTMLImageElement;
                  image.src = image.dataset.src ?? "";
                });

                new Flickity(carousel, {
                  freeScroll: false,
                  contain: false,
                  wrapAround: true,
                  prevNextButtons: true,
                  pageDots: false
                });
              }


              gDom.addEventListener("userIntracted", () => {
                loadDynamicContents();
              });
            })
        }}
      </Script>
    </section>
  )
}

export default HomeGallery;