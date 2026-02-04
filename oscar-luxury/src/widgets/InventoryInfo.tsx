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
import ArrowRight from "@common/icons/ArrowRight";
import ArrowUpDown from "@common/icons/ArrowUpDown";
import BankNote from "@common/icons/BankNote";
import CalendarCheck from "@common/icons/CalendarCheck";
import CarFront from "@common/icons/CarFront";
import ChevronSingleRight from "@common/icons/ChevronSingleRight";
import CogIcon from "@common/icons/CogIcon";
import FuelIcon from "@common/icons/FuelIcon";
import GaugeIcon from "@common/icons/GaugeIcon";
import MailIcon from "@common/icons/MailIcon";
import MessageCircle from "@common/icons/MessageCircle";
import RepeatIcon from "@common/icons/RepeatIcon";
import ShieldCheck from "@common/icons/ShieldCheck";
import SprayCan from "@common/icons/SprayCan";

const InventoryInfo = (props: { product: Record<string, any> }) => {
  const { private_meta } = props?.product || {};
  const {
    _carspot_ad_price: price,
    _carspot_ad_engine_types: engineType,
    _carspot_ad_mileage: mileage,
    _carspot_ad_engine_capacities: engineCapacity,
    _carspot_ad_years: modelYear,
    _carspot_ad_transmissions: transmission,
    _carspot_ad_body_types: bodyType,
    _carspot_ad_colors: exteriorColor,
    _carspot_ad_warranty: warranty,
  } = private_meta || {};

  return (
    <>
      {/* 🔹 VANILLA JS: Bind ALL trade-in buttons (mobile + desktop) */}
      <Script id="tradein-modal-script">
        {() => {
          function init() {
            const buttons = document.querySelectorAll(".open-tradein-btn");
            const modalRoot = document.getElementById("tradein-modal-root");

            if (!buttons.length || !modalRoot) {
              setTimeout(init, 100);
              return;
            }

            buttons.forEach((btn) => {
              btn.addEventListener("click", () => {
                modalRoot.classList.remove("hidden");
              });
            });
          }

          init();
        }}
      </Script>

      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-2xl max-xl:hidden">{props?.product?.title ?? ""}</h1>
        <hr className="border-slate-200" />
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
            <BankNote className="h-5 w-5 text-green-700" />
          </div>
          {price && (
            <div className="leading-tight">
              <span className="block text-xs uppercase tracking-wide text-slate-500">Price</span>
              <div className="text-xl">
                AED <span className="text-slate-700 font-bold">{Number(price).toLocaleString("en-US")}</span>
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <div className="group relative flex flex-col items-center justify-center gap-2 border border-slate-300 rounded-2xl px-2 py-4 overflow-hidden transition hover:shadow-sm">
            <FuelIcon className="w-5 h-5 text-primary-dark transition-transform md:group-hover:-translate-y-1" />
            <span className="font-semibold text-sm transition-all md:group-hover:opacity-0 md:group-hover:-translate-y-2">{engineType ?? ""}</span>
            <span className="text-xs text-slate-600 md:absolute md:bottom-4 md:translate-y-2 md:opacity-0 md:transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
              Fuel Type
            </span>
          </div>
          <div className="group relative flex flex-col items-center justify-center gap-2 border border-slate-300 rounded-2xl px-2 py-4 overflow-hidden transition hover:shadow-sm">
            <GaugeIcon className="w-5 h-5 text-primary-dark transition-transform md:group-hover:-translate-y-1" />
            <span className="font-semibold text-sm transition-all md:group-hover:opacity-0 md:group-hover:-translate-y-2">{mileage ?? ""} KM</span>
            <span className="text-xs text-slate-600 md:absolute md:bottom-4 md:translate-y-2 md:opacity-0 md:transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
              Mileage
            </span>
          </div>
          <div className="group relative flex flex-col items-center justify-center gap-2 border border-slate-300 rounded-2xl px-2 py-4 overflow-hidden transition hover:shadow-sm">
            <CogIcon className="w-5 h-5 text-primary-dark transition-transform md:group-hover:-translate-y-1" />
            <span className="font-semibold text-sm transition-all md:group-hover:opacity-0 md:group-hover:-translate-y-2">{engineCapacity ?? ""} CC</span>
            <span className="text-xs text-slate-600 md:absolute md:bottom-4 md:translate-y-2 md:opacity-0 md:transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
              Engine Capacity
            </span>
          </div>
          <div className="group relative flex flex-col items-center justify-center gap-2 border border-slate-300 rounded-2xl px-2 py-4 overflow-hidden transition hover:shadow-sm">
            <CalendarCheck className="w-5 h-5 text-primary-dark transition-transform md:group-hover:-translate-y-1" />
            <span className="font-semibold text-sm transition-all md:group-hover:opacity-0 md:group-hover:-translate-y-2">{modelYear ?? ""}</span>
            <span className="text-xs text-slate-600 md:absolute md:bottom-4 md:translate-y-2 md:opacity-0 md:transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
              Model Year
            </span>
          </div>
          <div className="group relative flex flex-col items-center justify-center gap-2 border border-slate-300 rounded-2xl px-2 py-4 overflow-hidden transition hover:shadow-sm">
            <ArrowUpDown className="w-5 h-5 text-primary-dark transition-transform md:group-hover:-translate-y-1" />
            <span className="font-semibold text-sm transition-all md:group-hover:opacity-0 md:group-hover:-translate-y-2">{transmission ?? ""}</span>
            <span className="text-xs text-slate-600 md:absolute md:bottom-4 md:translate-y-2 md:opacity-0 md:transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
              Transmission
            </span>
          </div>
          <div className="group relative flex flex-col items-center justify-center gap-2 border border-slate-300 rounded-2xl px-2 py-4 overflow-hidden transition hover:shadow-sm">
            <CarFront className="w-5 h-5 text-primary-dark transition-transform md:group-hover:-translate-y-1" />
            <span className="font-semibold text-sm transition-all md:group-hover:opacity-0 md:group-hover:-translate-y-2">{bodyType ?? ""}</span>
            <span className="text-xs text-slate-600 md:absolute md:bottom-4 md:translate-y-2 md:opacity-0 md:transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
              Body Type
            </span>
          </div>
          <div className="group relative flex flex-col items-center justify-center gap-2 border border-slate-300 rounded-2xl px-2 py-4 overflow-hidden transition hover:shadow-sm">
            <SprayCan className="w-5 h-5 text-primary-dark transition-transform md:group-hover:-translate-y-1" />
            <span className="font-semibold text-sm transition-all md:group-hover:opacity-0 md:group-hover:-translate-y-2">{exteriorColor ?? ""}</span>
            <span className="text-xs text-slate-600 md:absolute md:bottom-4 md:translate-y-2 md:opacity-0 md:transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
              Exterior Color
            </span>
          </div>
          <div className="group relative flex flex-col items-center justify-center gap-2 border border-slate-300 rounded-2xl px-2 py-4 overflow-hidden transition hover:shadow-sm">
            <ShieldCheck className="w-5 h-5 text-primary-dark transition-transform md:group-hover:-translate-y-1" />
            <span className="font-semibold text-sm transition-all md:group-hover:opacity-0 md:group-hover:-translate-y-2">
              {warranty === "Yes" ? "Active" : "None"}
            </span>
            <span className="text-xs text-slate-600 md:absolute md:bottom-4 md:translate-y-2 md:opacity-0 md:transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
              Warranty
            </span>
          </div>
        </div>
        <hr className="border-slate-200" />
        <div className="space-y-3">
          <a
            href="mailto:sales@oscarluxury.com"
            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-4 hover:border-slate-300 hover:bg-slate-50"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-slate-200">
              <MailIcon className="h-5 w-5 text-slate-700" />
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold text-slate-900">Contact Seller Via Email</div>
              <div className="text-sm text-slate-500">Get more details from the seller</div>
            </div>
            <ChevronSingleRight className="h-5 w-5 text-slate-400" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B971504004007"
            target="_blank"
            className="flex items-center justify-between gap-4 rounded-2xl bg-green-600 px-6 py-4 text-white hover:bg-green-700"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="h-6 w-6" />
              <span className="font-semibold">Connect Seamlessly: WhatsApp Chat Now</span>
            </div>
            <ArrowRight className="h-5 w-5 opacity-80" />
          </a>

          {/* 🔹 TRADE-IN BUTTON (WORKS ON MOBILE + DESKTOP) */}
          <button type="button" className="open-tradein-btn flex w-full items-center gap-4 rounded-2xl bg-orange-50 px-6 py-4 hover:bg-orange-100">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500">
              <RepeatIcon className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <div className="text-base font-semibold text-slate-900">Considering a Trade-in?</div>
              <div className="text-sm text-slate-600">Get an instant valuation</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default InventoryInfo;
