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

import EyeIcon from "@common/icons/EyeIcon";
import GoalIcon from "@common/icons/GoalIcon";
import ShieldCheck from "@common/icons/ShieldCheck";

interface AboutWhyChooseProps {
  data: {
    why_choose_us: string;
    our_mission: string;
    our_vision: string;
  };
}

const AboutWhyChoose = (props: AboutWhyChooseProps) => {
  const { why_choose_us, our_mission, our_vision } = props?.data || {};
  return (
    <section className="w-full bg-black py-12 lg:py-24 xl:py-32">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="text-white flex flex-col max-xl:gap-4 justify-evenly">
            <div className="xl:max-w-xl group">
              <div className="flex gap-2 items-center">
                <ShieldCheck className="w-8 h-8 text-primary/60 group-hover:animate-pulse" />
                <h3 className="text-lg md:text-4xl font-light text-white">Why choose us</h3>
              </div>
              <p className="mt-4 text-sm md:text-lg text-white/60 leading-relaxed">{why_choose_us ?? ""}</p>
            </div>
            <hr className=" border-gray-800" />
            <div className="xl:max-w-xl group">
              <div className="flex gap-2 items-center">
                <GoalIcon className="w-8 h-8 text-primary/60 group-hover:animate-pulse" />
                <h3 className="text-lg md:text-4xl font-light text-white">Our Mission</h3>
              </div>
              <p className="mt-4 text-sm md:text-lg text-white/60 leading-relaxed">{our_mission ?? ""}</p>
            </div>
            <hr className=" border-gray-800" />
            <div className="xl:max-w-xl group">
              <div className="flex gap-2 items-center">
                <EyeIcon className="w-8 h-8 text-primary/60 group-hover:animate-pulse" />
                <h3 className="text-lg md:text-4xl font-light text-white">Our Vision</h3>
              </div>
              <p className="mt-4 text-sm md:text-lg text-white/60 leading-relaxed">{our_vision ?? ""}</p>
            </div>
          </div>
          <div className="relative w-[500px] min-h-[600px] max-xl:hidden">
            <div
              className="relative -left-1/3 rounded-2xl overflow-hidden
              before:content-['']
              before:absolute
              before:top-1
              before:right-20
              before:w-20
              before:h-20
              before:border-t
              before:border-r
              before:border-primary
              before:rounded-tr-xl
              before:animate-pulse
              pt-5
              after:content-['']
              after:absolute
              after:bottom-0
              after:left-1
              after:w-20
              after:h-20
              after:border-b
              after:border-l
              after:border-primary
              after:rounded-bl-xl
              after:animate-pulse
              pb-4
              "
            >
              <img
                src="/images/about/why-choose-02.webp"
                alt="why-choose-02"
                width={380}
                height={500}
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 h-auto rounded-2xl ms-5"
              />
            </div>
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 rounded-2xl overflow-hidden">
              <img
                src="/images/about/why-choose-01.webp"
                alt="why-choose-01"
                width={380}
                height={400}
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;
