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
import SafetyTips from "./SafetyTips";
import SellCarForm from "./SellCarForm";

const SellCar = () => {

  return (
      <section className="w-full bg-white py-12 lg:py-20 xl:py-24">
      <div className="container">
        <div className="mb-8 lg:mb-10 xl:mb-16 text-start">
          <div className="inline-flex items-center gap-2 mb-3 max-md:hidden">
            <span className="w-3 h-3 rounded-full border-3 border-secondary animate-pulse" />
            <span className="text-sm font-semibold tracking-[0.35em] uppercase">
              Sell Your Car
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-secondary font-extrabold text-black tracking-wide xl:text-5xl">
            Enter
            <span className="text-secondary-dark">{" "}Your Details{" "}</span>
            Here
          </h2>
          <p className="mt-4 text-gray-600">
            Experience the extraordinary when selling your used luxury or sports car in Dubai. Streamlined processes, transparent valuations, and swift transactions redefine your selling journey.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6 items-start">
          <SellCarForm />
          <SafetyTips />
        </div>
      </div>
    </section>
  );
};

export default SellCar;
