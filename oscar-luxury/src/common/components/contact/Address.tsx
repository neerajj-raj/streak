/*
 * Copyright(c) 2026 Oscar.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Oscar ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Oscar.
 *
 *
 * @author Ram
 */

import MapPin from "@common/icons/MapPinIcon";
import Phone from "@common/icons/PhoneIcon";
import Clock from "@common/icons/ClockIcon";
import Mail from "@common/icons/MailIcon";
import { Script } from "streak/components";

export default function Address() {
  return (
    <>
      <div className="sticky top-[calc(var(--header-height)+2rem)]">
        <div className="flex flex-col gap-6">
          <div className="lg:flex gap-8 border border-slate-200 rounded-xl lg:rounded-3xl overflow-hidden shadow-sm">
            <div className="flex-1 p-6 lg:p-8">
              <h3 className="mb-6 text-xl lg:text-2xl font-secondary font-semibold">Oscar Luxury</h3>
              <div className="lg:col-span-2 space-y-2 text-gray-700 text-sm">
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-gray-500 mt-2 shrink-0" />
                  <p className="leading-relaxed pt-1">
                    IST Plaza - Next To Equiti Metro Bus Stop Seaside - Take Exit 41 - Sheikh Zayed Road - Umm Al Sheif - Dubai. UAE.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-4 h-4 text-gray-500 mt-2 shrink-0" />
                  <a className="leading-relaxed pt-1" href="tel:+971504004007">+97150 400 4007</a>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 text-gray-500 mt-2 shrink-0" />
                  <a className="leading-relaxed pt-1" href="mailto:sales@oscarluxury.com">sales@oscarluxury.com</a>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-4 h-4 text-gray-500 mt-2 shrink-0" />
                  <p className="leading-relaxed pt-1">
                    Monday - Saturday - 10am-8pm <span className="mx-2">|</span> <span className=" text-red-600/80  px-1 py-0.5">Sunday Closed</span>
                  </p>
                </div>
              </div>
            </div>
            <div id="mapone" className="hidden w-full lg:w-[360px]">
              <iframe
                title="Oscar Luxury Cars Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14448.967055812765!2d55.206767000000006!3d25.127516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b40690ad0c3%3A0x8ca350a48ec60848!2zT3NjYXIgTHV4dXJ5IEF1dG8g2KfZiNiz2YPYp9ixINmE2YTYs9mK2KfYsdin2Kog2KfZhNmB2KfYsdmH2Kk!5e0!3m2!1sen!2sin!4v1703920028217!5m2!1sen!2sin"
                className="w-full h-full max-lg:h-56"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="lg:flex gap-8 border border-slate-200 rounded-xl lg:rounded-3xl overflow-hidden shadow-sm">
            <div className="flex-1 p-6 lg:p-8">
              <h3 className="mb-6 text-xl lg:text-2xl font-secondary font-semibold">Oscar Legacy Auto Services</h3>
              <div className="lg:col-span-2 space-y-2 text-gray-700 text-sm">
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-gray-500 mt-2 shrink-0" />
                  <p className="leading-relaxed pt-1">
                    S3-B1 - 22nd St - Al Qouz Ind.third - Al Quoz - Dubai
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-4 h-4 text-gray-500 mt-2 shrink-0" />
                  <a className="leading-relaxed pt-1" href="tel:+971504383838">+971504 383 838</a>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 text-gray-500 mt-2 shrink-0" />
                  <a className="leading-relaxed pt-1" href="mailto:info@oscaruae.com">info@oscaruae.com</a>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-4 h-4 text-gray-500 mt-2 shrink-0" />
                  <p className="leading-relaxed pt-1">
                    Monday - Saturday - 10am-8pm <span className="mx-2">|</span> <span className=" text-red-600/80  px-1 py-0.5">Sunday Closed</span>
                  </p>
                </div>
              </div>
            </div>
            <div id="maptwo" className="hidden w-full lg:w-[360px]">
              <iframe
                title="Oscar Luxury Cars Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.426557379094!2d55.21723777493998!3d25.121265834772938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f7c1749b14201%3A0x632e65be6f23cc47!2zT3NjYXIgTGVnYWN5IEF1dG8gU2VydmljZXMg2YjYsdi02Kkg2KfZiNiz2YPYp9ixINmE2YrYrNin2LPZiiDZhNmE2LPZitin2LHYp9iq!5e0!3m2!1sen!2sin!4v1769147799003!5m2!1sen!2sin"
                className="w-full h-full max-lg:h-56"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <Script id="address">
        {() => {
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
          window.addEventListener(
            "scroll",
            () => {
              if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
              }
            },
            { passive: true }
          );
          window.addEventListener("load", updateParallax);
          const mapOne = document.getElementById("mapone");
                    const mapTwo = document.getElementById("maptwo");

                    setTimeout(() => {
    mapOne?.classList.remove("hidden");
    mapTwo?.classList.remove("hidden");
  }, 2000);
                    

        }}
      </Script>
    </>
  );
}


