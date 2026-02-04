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

import { Anchor } from "@common/components/Anchor";
import StarIcon from "@common/icons/StarIcon";
import { hasArrayElements } from "@utils/commonUtils";

interface FeaturedDealersProps {
  data: {
    featured_luxury_car: Array<{
      brand: string;
      model: string;
      price: string;
      image: string;
      url: string;
    }>;
  };
}

const FeaturedDealers = (props: FeaturedDealersProps) => {
  const { featured_luxury_car } = props.data || {};

  return (
    hasArrayElements(featured_luxury_car) && (
      <section className="w-full bg-white py-12 lg:py-20 xl:py-24">
        <div className="container">
          <div className="mb-8 lg:mb-10 xl:mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-3 max-md:hidden">
              <span className="w-3 h-3 rounded-full border-3 border-secondary animate-pulse" />
              <span className="text-sm font-semibold tracking-[0.35em] uppercase">Exclusive Collection</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-secondary font-extrabold text-black tracking-wide xl:text-5xl">
              Featured <span className="text-secondary-dark">Cars</span>
            </h2>
            <p className="mt-4 text-gray-600">Handpicked luxury models that represent the finest of our collection.</p>{" "}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {featured_luxury_car.map((dealer, index) => (
              <a
                href={dealer?.url ?? ""}
                key={dealer?.model}
                className={`group bg-white border border-black/10 rounded-2xl overflow-hidden hover:shadow-xl transition flex flex-col h-full ${index > 3 ? "max-lg:hidden" : ""}`}
              >
                <div className="relative w-full h-52 xl:h-56 overflow-hidden">
                  <img
                    loading="lazy"
                    src={dealer.image}
                    alt={dealer.brand}
                    className="object-cover transition duration-700 group-hover:scale-110"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                  />
                  <span className="absolute top-3 left-3 flex items-center gap-1 bg-linear-to-br from-primary via-primary-light to-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                    <StarIcon className="w-3 h-3" /> Premium
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"></div>
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold">{dealer.brand}</p>
                  <h3 className="mt-1 text-md line-clamp-2">{dealer.model}</h3>
                </div>
                <div className="mt-auto flex justify-between border-t border-gray-100 bg-gray-50/50 text-sm px-5 py-3">
                  <div className="font-extrabold text-gray-600">{dealer.price}</div>
                  <span className="inline-flex items-center justify-center gap-2 font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-60 font-bold text-gray-900 hover:text-secondary">
                    Buy Now
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6 lg:mt-10 xl:mt-16">
          <div>
            <Anchor href="/inventory">View All Collections</Anchor>
          </div>
        </div>
      </section>
    )
  );
};

export default FeaturedDealers;
