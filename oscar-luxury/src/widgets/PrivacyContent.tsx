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

import BookA from "@common/icons/BookA";
import ChevronSingleRight from "@common/icons/ChevronSingleRight";
import CircleFadingArrowUp from "@common/icons/CircleFadingArrowUp";
import CookieIcon from "@common/icons/CookieIcon";
import Fingerprint from "@common/icons/Fingerprint";
import HandIcon from "@common/icons/HandIcon";
import Link2 from "@common/icons/Link2";
import MailIcon from "@common/icons/MailIcon";
import MapPin from "@common/icons/MapPin";
import PhoneIcon from "@common/icons/PhoneIcon";
import Share2 from "@common/icons/Share2";
import ShieldIcon from "@common/icons/ShieldIcon";
import UserRoundCheck from "@common/icons/UserRoundCheck";

const PrivacyContent = () => {
  return (
    <section className="w-full bg-white py-12 lg:py-20 xl:py-24">
      <div className="container">
        <div>
          <div className="mb-8 lg:mb-10 xl:mb-16 text-center">
            <h2 className="text-2xl md:text-4xl font-secondary font-extrabold text-gray-900 tracking-wide xl:text-5xl">
              <span className="text-secondary-dark">Privacy Policy</span>
            </h2>
            <div className="inline-flex items-center gap-2 mt-3 xl:mt-6 max-md:hidden">
              <span className="w-3 h-3 rounded-full border-3 border-primary animate-pulse" />
              <span className="text-sm font-semibold tracking-[0.35em] uppercase text-gray-500">Privacy and trust, without compromise</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="italic text-gray-500">Last Updated: 13.01.2026</p>
            <p className="text-center mt-4 xl:w-2/3">
              Oscar Luxury respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and
              safeguard information when you visit our website or interact with our services.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4 lg:mt-10">
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <BookA className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Information We Collect</p>
                <p className="mt-2">We may collect personal information that you voluntarily provide, including but not limited to:</p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Name</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Email address</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Phone number</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>WhatsApp contact details</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Email address</span>
                  </div>
                </div>
                <div className="flex items-start gap-1 mt-2">
                  <div>
                    <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                  </div>
                  <span>Vehicle-related information submitted through enquiries or forms</span>
                </div>
                <div className="flex items-start gap-1 mt-2">
                  <div>
                    <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                  </div>
                  <span>
                    We may also collect limited technical information such as IP address, browser type, and device information for analytics and website
                    performance.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <HandIcon className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">How We Use Your Information</p>
                <p className="mt-2">We use the information collected to:</p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Respond to enquiries and requests</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Facilitate buying, selling, or trade-in discussions</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Improve our website and services</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Communicate relevant updates related to your enquiry</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>We do not sell or rent your personal information to third parties.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <CookieIcon className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Cookies & Tracking Technologies</p>
                <p className="mt-2">
                  Our website may use cookies and similar technologies to enhance user experience and analyze website traffic. You may choose to disable cookies
                  through your browser settings.
                </p>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <Share2 className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Information Sharing</p>
                <p className="mt-2">We may share information only when necessary:</p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>With trusted service providers assisting in website operations or customer communication</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>When required by law or regulatory authorities</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>All third parties are expected to maintain confidentiality.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <Fingerprint className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Data Security</p>
                <p className="mt-2">
                  We take reasonable technical and organizational measures to protect personal information against unauthorized access, alteration, or misuse.
                  However, no method of transmission over the internet is entirely secure.
                </p>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <ShieldIcon className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Data Retention</p>
                <p className="mt-2">
                  Personal information is retained only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention
                  period is required by law.
                </p>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <UserRoundCheck className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Your Rights</p>
                <p className="mt-2">You have the right to:</p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Request access to your personal information</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Request correction or deletion of your data</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Withdraw consent for communication at any time</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <div>
                      <ChevronSingleRight className="w-4 h-4 mt-1 text-secondary-dark" />
                    </div>
                    <span>Requests can be made by contacting us directly.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <Link2 className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Third-Party Links</p>
                <p className="mt-2">
                  Our website may contain links to external websites. Oscar Luxury is not responsible for the privacy practices of third-party sites.
                </p>
              </div>
            </div>
            <div className="flex shadow-sm border-slate-100 border px-4 lg:px-6 py-6 rounded-2xl gap-x-3">
              <div className="shrink-0 w-10 h-10 bg-secondary-dark/10 rounded-full flex items-center justify-center">
                <CircleFadingArrowUp className="w6 h6 text-secondary-dark" />
              </div>
              <div className="text-gray-500">
                <p className="text-lg font-semibold text-black">Updates to This Policy</p>
                <p className="mt-2">
                  Oscar Luxury reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-12 border-t border-neutral-200">
            <div>
              <h2 className="text-xl md:text-2xl font-medium mb-4">Contact Information</h2>
              <p className="text-sm md:text-base text-neutral-600 mb-8">
                For any questions regarding this Privacy Policy or your personal information, please contact:
              </p>
              <div className="flex flex-col gap-4 lg:max-w-2/3">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-gray-500" />
                  </div>
                  <p className="text-sm md:text-base leading-relaxed lg:max-w-1/2 pt-1">
                    IST Plaza - Next To Equiti Metro Bus Stop Seaside - Take Exit 41 - Sheikh Zayed Road - Umm Al Sheif - Dubai. UAE.
                  </p>
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

export default PrivacyContent;
