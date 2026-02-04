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
 * @author Neeraj
 */
import { Script } from "streak/components";

interface AboutDescriptionProps {
  data: {
    description: string;
  };
}

const AboutDescription = (props: AboutDescriptionProps) => {
  const bars = 8;

  return (
    <section className="w-full">
      <div className="container">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="w-full lg:w-1/5 flex justify-center place-items-center max-lg:hidden bg-white pt-10 relative">
            <div className="absolute flex flex-col items-center gap-y-10 justify-between">
              {Array.from({ length: bars }).map((_, i) => (
                <div key={i} className="w-2 h-16 bg-black/5" />
              ))}
            </div>
            <img
              id="about-description-img"
              src="/images/about/description.webp"
              alt="about description"
              width={280}
              height={40}
              className="object-cover h-auto transition-transform duration-200"
            />
            <div className="absolute bg-white he"></div>
          </div>
          <div className="w-full lg:w-3/4 py-12 lg:py-24 xl:py-32 lg:px-12">
            {/* Small screens only */}
            <h2 className="block sm:hidden text-2xl md:text-4xl xl:text-5xl font-secondary font-extrabold tracking-wide">
              About <span className="text-secondary-dark">Oscar Luxury</span>
              <br />
              Dealership
            </h2>
            {/* Other Screens */}
            <h2 className="hidden sm:block text-2xl md:text-4xl xl:text-5xl font-secondary font-extrabold tracking-wide">
              About <span className="text-secondary-dark">Oscar Luxury</span> Dealership
            </h2>
            <div className="inline-flex items-center gap-2 mt-3 max-md:hidden">
              <span className="w-3 h-3 rounded-full border-3 border-secondary animate-pulse" />
              <span className="text-sm font-semibold tracking-[0.35em] uppercase">Oscar Luxury Auto</span>
            </div>
            {props?.data?.description &&
              props?.data?.description.split("<br/>").map((line, index) => (
                <p key={index} className="mt-4 xl:mt-6">
                  {line}
                </p>
              ))}
          </div>
        </div>
      </div>
      <Script id="AboutDescription">
        {(gDom: any) => {
          const updateParallax = () => {
            const image = document.getElementById("about-description-img");
            if (!image) return;
            image.style.transform = `translateY(-${window.scrollY * 0.3}px)`;
          };

          gDom.addEventListener("scrolling", () => {
            window.requestAnimationFrame(updateParallax);
          });
        }}
      </Script>
    </section>
  );
};

export default AboutDescription;
