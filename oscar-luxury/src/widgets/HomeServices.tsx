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
import CarIcon from "@common/icons/CarIcon";
import ChevronsRight from "@common/icons/ChevronsRight";
import Droplets from "@common/icons/Droplets";
import Layers from "@common/icons/Layers";
import PaletteIcon from "@common/icons/PaletteIcon";
import ShieldIcon from "@common/icons/ShieldIcon";
import SparklesIcon from "@common/icons/SparklesIcon";
import { Script } from "streak/components";

interface ServiceCardProps {
  icon: any;
  title: string;
  desc: string;
  href?: string;
}

const HomeServices = () => {
  return (
    <section>
      <div id="our-services" className="relative w-full overflow-hidden bg-neutral-950">
        <div
          id="our-services-bg"
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url(/images/home/services-bg.webp)",
          }}
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 container py-12 lg:py-24 xl:py-44">
          <div className="mb-8 lg:mb-10 xl:mb-16 text-center">
            <h2 className="text-2xl md:text-4xl font-secondary font-extrabold text-white tracking-wide xl:text-5xl">
              Our <span className="text-primary">Services</span>
            </h2>
            <div className="inline-flex items-center gap-2 mt-3 xl:mt-6 max-md:hidden">
              <span className="w-3 h-3 rounded-full border-3 border-primary animate-pulse" />
              <span className="text-sm font-semibold tracking-[0.35em] uppercase text-amber-100">Excellence for Distinctive Taste</span>
            </div>
          </div>

          <div className="grid gap-4 lg:gap-8 lg:grid-cols-3">
            <ServiceCard
              icon={CarIcon}
              title="Custom Body Kit"
              desc="Transform your vehicle’s look with our professionally designed and installed custom body kits. From sleek styling upgrades to aerodynamic enhancements, we tailor each kit to match your unique taste."
            />
            <ServiceCard
              icon={SparklesIcon}
              title="Interior Detailing"
              desc="Refresh and restore your car’s cabin with our deep interior detailing. We clean and sanitize every surface, from carpets and seats to vents and panels, leaving your interior spotless and like new."
            />
            <ServiceCard
              icon={ShieldIcon}
              title="Ceramic Coating"
              desc="Protect your vehicle’s paint with long-lasting ceramic coating technology. This advanced layer provides a glossy finish while guarding against scratches, UV rays, and environmental damage."
            />
            <ServiceCard
              icon={PaletteIcon}
              title="Vinyl Wrapping"
              desc="Give your car a new identity with our premium vinyl wraps. Available in a wide range of colors, textures, and finishes while protecting your original paint."
            />
            <ServiceCard
              icon={Droplets}
              title="Exterior Detailing"
              desc="Restore your car’s showroom shine with our comprehensive exterior detailing service, including paint correction, polishing, and deep cleaning."
            />
            <ServiceCard
              icon={Layers}
              title="Paint Protection Film"
              desc="Keep your vehicle’s paint flawless with our high-quality paint protection film. This invisible shield defends against chips, scratches, and road debris."
            />
          </div>
        </div>
      </div>
      <Script id="HomeServices">
        {(gDom: any) => {
          let ticking = false;

          const updateParallax = () => {
            const section = document.getElementById("our-services");
            const bg = document.getElementById("our-services-bg");
            if (!section || !bg) return;

            const rect = section.getBoundingClientRect();
            const offset = -rect.top * 0.12;

            bg.style.transform = `translate3d(0, ${offset}px, 0) scale(1.12)`;
            ticking = false;
          };

          gDom.addEventListener("scrolling", () => {
            if (!ticking) {
              window.requestAnimationFrame(updateParallax);
              ticking = true;
            }
          });

          gDom.addEventListener("pageLoaded", updateParallax);
        }}
      </Script>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, desc, href }: ServiceCardProps) => {
  return (
    <div className="flex gap-5 h-full bg-white/5 backdrop-blur-xl px-6 py-8 xl:p-10 rounded-xl xl:rounded-2xl">
      <div className="shrink-0 text-gray-300">
        <Icon className="h-10 w-10 xl:h-12 xl:w-12" strokeWidth={1} />
      </div>
      <div className="flex flex-col h-full w-full text-white">
        <div className="mb-6">
          <h3 className="text-md md:text-xl lg:text-2xl mb-3 border-b border-white/10 pb-3">{title}</h3>
          <h4 className="text-gray-300 text-sm">{desc}</h4>
        </div>
        <div className="mt-auto">
          <Anchor href={href || "/contact-us"} variant="link" className="text-white" icon={ChevronsRight} style={{ color: "white" }}>
            Read More
            {/* For seo */}
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
              {`about ${title}`}
            </span>
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
