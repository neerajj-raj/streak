/*
 * Copyright(c) 2025 Oscar.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Oscar ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Oscar.
 *
 *
 * @author !ndrajit
 */

interface InsideShowroomProps {
  data: {
    showroom: Array<{
      image: string;
      image_name: string;
      description?: string;
    }>;
  }
}

const InsideShowroom = (props: InsideShowroomProps) => {
  const {
    data
  } = props || {};
  const { showroom } = data || {};

  if (showroom[0]) {
    if (!showroom[1]) {
      showroom[1] = showroom[0];
    }
    if (!showroom[2]) {
      showroom[2] = showroom[0];
    }
  }

  const [showroomOne, showroomTwo, showroomThree] = showroom || [];

  return (<section className="w-full bg-black py-12 lg:py-24 xl:py-32">
    <div className="container">
      <div className="mb-16 max-w-3xl">
        <h2 className="mt-4 text-2xl md:text-4xl font-secondary font-extrabold text-white tracking-wide xl:text-5xl">
          Inside Our <span className="text-primary">Showroom</span>
        </h2>
        <div className="inline-flex items-center gap-2 mt-3 xl:mt-6 max-md:hidden">
          <span className="w-3 h-3 rounded-full border-3 border-primary animate-pulse" />
          <span className="text-sm font-semibold tracking-[0.35em] uppercase text-amber-100">
            Inside the Space
          </span>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-12 items-stretch">
        <div className="group relative lg:col-span-5 h-[520px] md:h-[700px] overflow-hidden">
        {
          showroomOne?.image && <img
            alt={showroomOne?.image_name || "The Collection"}
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent"
            }}
            sizes="100vw"
            src={showroomOne?.image}
          />
        }
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 pb-14">
            <div className="xl:translate-y-8 transition-all duration-500 xl:group-hover:translate-y-0">
              <h3 className="text-xl md:text-2xl font-light text-white">
                {showroomOne?.image_name}
              </h3>
              <p className="mt-3 text-sm text-white/70 xl:opacity-0 transition-all duration-500 group-hover:opacity-100">
                {showroomOne?.description || "Explore our exquisite collection of luxury automobiles."}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="max-w-xl">
            <h4 className="text-lg md:text-4xl font-light text-white">
              Craftsmanship &amp; Precision
            </h4>
            <p className="mt-4 text-sm md:text-lg text-white/60 leading-relaxed">
              A carefully curated environment where luxury automobiles are
              presented like works of art. Designed for privacy, comfort, and
              appreciation, our showroom reflects a commitment to timeless
              automotive excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group relative h-[300px] lg:h-[500px] overflow-hidden">
            {
              showroomTwo?.image && <img
                alt={showroomTwo?.image_name || "Craftsmanship"}
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: "transparent"
                }}
                sizes="100vw"
                src={showroomTwo?.image}
              />
            } 
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 pb-14">
                <div className="xl:translate-y-8 transition-all duration-500 xl:group-hover:translate-y-0">
                  <h3 className="text-xl md:text-2xl font-light text-white">
                    {showroomTwo?.image_name}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 xl:opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {showroomTwo?.description || "Precision meets artistry in every detail"}
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative h-[300px] lg:h-[500px] overflow-hidden">
            {
              showroomThree?.image && <img
                alt={showroomThree?.image_name || "Exceptional Selection"}
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: "transparent"
                }}
                sizes="100vw"
                src={showroomThree?.image}
              />
            } 
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 pb-14">
                <div className="xl:translate-y-8 transition-all duration-500 xl:group-hover:translate-y-0">
                  <h3 className="text-xl md:text-2xl font-light text-white">
                    {showroomThree?.image_name}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 xl:opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {showroomThree?.description || "Rare and distinguished automobiles await"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default InsideShowroom;
