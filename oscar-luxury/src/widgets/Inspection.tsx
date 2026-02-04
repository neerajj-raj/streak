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
 * @author Anagha Chandrababu
 */

import CheckCheck from "@common/icons/CheckCheck";

const Inspection = () => {
  return (
    <section>
      <div id="our-services" className="relative w-full overflow-hidden bg-neutral-950">
        <div id="our-services-bg" className="absolute inset-0 bg-cover bg-center will-change-transform" />
        <div className="absolute inset-0 bg-black/80" />
        <div>
          <img
            id="sell-car-tyre-img"
            src="/images/sell/tyre.webp"
            className="absolute -right-60 top-1/3 max-xl:top-4 max-xl:right-4 opacity-35 animate-spin"
            width={500}
            height={500}
            alt="about description"
            style={{ animationDuration: "30s" }}
          />
        </div>
        <div className="relative z-10 container py-12 lg:py-20 xl:py-24">
          <div className="mb-8 lg:mb-10 xl:mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-3 max-md:hidden">
              <span className="w-3 h-3 rounded-full border-3 border-primary animate-pulse" />
              <span className="text-sm font-semibold tracking-[0.35em] uppercase text-amber-100">Want To Sale Your Car?</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-secondary font-extrabold text-white tracking-wide xl:text-5xl">
              Car <span className="text-primary">Inspection</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 items-end ">
            <div>
              <img
                id="sell-car-img"
                src="/images/sell/car01.webp"
                width={800}
                height={400}
                alt="about description"
              />
            </div>
            <div className=" rounded-3xl p-4">
              <div className="flex flex-col gap-y-4 bg-white/5 border border-primary/10 backdrop-blur-xl px-6 py-8 xl:p-10 rounded-xl xl:rounded-2xl">
                <div className="flex items-center gap-2 border-white/10 border-b pb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-settings text-white h-10 w-10 xl:h-12 xl:w-12"
                    aria-hidden="true"
                  >
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <div className="w-full">
                    <p className="text-md md:text-xl lg:text-2xl text-white">Inspection</p>
                  </div>
                </div>
                <p className="text-white mt-3">
                  Our Oscar Luxury experts inspect the car on over 200 checkpoints so you get complete satisfaction and peace of mind before selling it to
                  clients.
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 gap-y-4 text-lg mt-6">
                  <div className="flex gap-2 items-center">
                    <CheckCheck className="text-green-600 w-5 h-5" />
                    <span className="text-white">Transmission</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CheckCheck className="text-green-600 w-5 h-5" />
                    <span className="text-white">Engine</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CheckCheck className="text-green-600 w-5 h-5" />
                    <span className="text-white">Tires</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CheckCheck className="text-green-600 w-5 h-5" />
                    <span className="text-white">Lighting</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CheckCheck className="text-green-600 w-5 h-5" />
                    <span className="text-white">Interior</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CheckCheck className="text-green-600 w-5 h-5" />
                    <span className="text-white">Suspension</span>
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

export default Inspection;
