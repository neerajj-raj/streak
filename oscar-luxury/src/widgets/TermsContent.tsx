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

import ChevronSingleRight from "@common/icons/ChevronSingleRight";
import Coins from "@common/icons/Coins";
import Globe from "@common/icons/Globe";
import Handbag from "@common/icons/Handbag";
import Handshake from "@common/icons/Handshake";
import HatGlasses from "@common/icons/HatGlasses";
import Link2 from "@common/icons/Link2";
import MailIcon from "@common/icons/MailIcon";
import MapPin from "@common/icons/MapPin";
import NotebookTabs from "@common/icons/NotebookTabs";
import PhoneIcon from "@common/icons/PhoneIcon";
import PiggyBank from "@common/icons/PiggyBank";
import Scale from "@common/icons/Scale";
import ShieldIcon from "@common/icons/ShieldIcon";
import Store from "@common/icons/Store";
import Wrench from "@common/icons/Wrench";

const TermsContent = () => {
  return (
    <section className="w-full bg-white py-12 lg:py-20 xl:py-24">
      <div className="container">
        <div>
          <div className="mb-8 lg:mb-10 xl:mb-16 text-center">
            <h2 className="text-2xl md:text-4xl font-secondary font-extrabold text-gray-900 tracking-wide xl:text-5xl">
              <span className="text-secondary-dark">Terms & Conditions</span>
            </h2>
            <div className="inline-flex items-center gap-2 mt-3 xl:mt-6 max-md:hidden">
              <span className="w-3 h-3 rounded-full border-3 border-primary animate-pulse" />
              <span className="text-sm font-semibold tracking-[0.35em] uppercase text-gray-500">Clear terms, built on trust</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="italic text-gray-500">Last Updated: 13.01.2026</p>
            <p className="text-center mt-4 xl:w-2/3">
              Welcome to Oscar Luxury. By accessing or using our website and services, you agree to comply with and be bound by the following Terms &
              Conditions. Please read them carefully.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4 lg:mt-10">
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <Store className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">About Oscar Luxury</p>
                <p className="mt-2">
                  Oscar Luxury operates as a luxury automobile marketplace based in the United Arab Emirates. We specialize in the buying, selling, and trading
                  of premium vehicles.
                </p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="flex items-start gap-1">
                    <span>
                      Registered Office:
                      <p className="mt-2">IST Plaza</p>
                      <p>Sheikh Zayed Rd, Umm Al Sheif</p>
                      <p>Dubai, United Arab Emirates</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <Globe className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Use of Website</p>
                <p className="mt-2">By using this website, you agree:</p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>To use the website only for lawful purposes</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Not to misuse, disrupt, or attempt to gain unauthorized access to any part of the site</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>That all information you provide is accurate and up to date</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Oscar Luxury reserves the right to restrict or terminate access if these terms are violated.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <NotebookTabs className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Vehicle Listings & Information</p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>All vehicle details, pricing, images, and descriptions are provided for informational purposes only.</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>While we strive for accuracy, Oscar Luxury does not guarantee that all listings are error-free or up to date at all times.</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Vehicle availability is subject to change without notice.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <Handbag className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Buying Vehicles</p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Purchasing a vehicle through Oscar Luxury is subject to verification, inspection, and final agreement.</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Prices displayed do not include additional costs such as registration, insurance, or government fees unless stated otherwise.</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Oscar Luxury does not provide financing or loan services.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <Coins className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Selling & Trade-In Services</p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Valuations provided are indicative and subject to inspection and verification.</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Final offers may vary based on vehicle condition, documentation, and market demand.</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Oscar Luxury reserves the right to accept or decline any vehicle at its discretion.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <Wrench className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Inspections & Condition</p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Vehicles may undergo inspection prior to final sale or purchase.</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Oscar Luxury is not responsible for manufacturer warranties unless explicitly stated.</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Buyers are encouraged to review vehicle condition thoroughly before finalizing a transaction.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <ShieldIcon className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Intellectual Property</p>
                <p className="mt-2">
                  All content on this website, including text, images, logos, videos, and design elements, is the property of Oscar Luxury and may not be
                  copied, reproduced, or distributed without written permission.
                </p>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <Link2 className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Third-Party Links</p>
                <p className="mt-2">
                  This website may contain links to third-party websites for convenience. Oscar Luxury is not responsible for the content, policies, or
                  practices of these external sites.
                </p>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <PiggyBank className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Limitation of Liability</p>
                <p className="mt-2">Oscar Luxury shall not be held liable for any direct, indirect, incidental, or consequential damages arising from:</p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Use of this website</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Vehicle transactions</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Inaccuracies or omissions in content</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>All services are provided on an “as-is” basis.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <HatGlasses className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Privacy</p>
                <p className="mt-2">
                  Your use of this website is also governed by our Privacy Policy, which outlines how we collect and use personal information.
                </p>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <Handshake className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Changes to Terms</p>
                <p className="mt-2">
                  Oscar Luxury reserves the right to update or modify these Terms & Conditions at any time. Changes will be effective immediately upon posting
                  on the website.
                </p>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <Scale className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Governing Law</p>
                <p className="mt-2">These Terms & Conditions are governed by and interpreted in accordance with the laws of the United Arab Emirates.</p>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-12 border-t border-neutral-200">
            <div>
              <h2 className="text-xl md:text-2xl font-medium mb-4">Contact Information</h2>
              <p className="text-sm md:text-base text-neutral-600 mb-8">For any questions regarding these Terms & Conditions, please contact us at:</p>
              <div className="flex flex-col gap-4 lg:max-w-2/3">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-gray-500" />
                  </div>
                  <p className="text-sm md:text-base leading-relaxed lg:max-w-1/2 pt-1">Oscar Luxury, IST Plaza, Sheikh Zayed Rd, Umm Al Sheif, Dubai, UAE</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-4 h-4 text-gray-500" />
                  </div>
                  <a className="text-sm md:text-base leading-relaxed pt-1" href="tel:+971504004007">
                    +97150 400 4007
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <MailIcon className="w-4 h-4 text-gray-500" />
                  </div>
                  <a className="text-sm md:text-base leading-relaxed pt-1" href="mailto:sales@oscarluxury.com">
                    Sales@oscarluxury.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsContent;
