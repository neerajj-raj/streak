/*
 * Copyright(c) 2026 Oscar.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Oscar ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Oscar.
 *
 * @author Minna Ancy Mathew
 */

import CarFront from "@common/icons/CarFront";
import ClipboardCheck from "@common/icons/ClipboardCheck";
import LineChart from "@common/icons/LineChart";
import FileText from "@common/icons/FileText";

type Step = {
  icon: any;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: FileText,
    title: "Submit your vehicle details",
    description:
      "Share key information such as brand, model, year, mileage, and condition using our trade-in form.",
  },
  {
    icon: LineChart,
    title: "Market evaluation",
    description:
      "Our team reviews your vehicle details and evaluates its value based on current market demand and luxury benchmarks.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection & final quote",
    description:
      "If required, the vehicle is inspected to confirm condition and finalize the trade-in value.",
  },
  {
    icon: CarFront,
    title: "Upgrade to your next luxury car",
    description:
      "Use your confirmed trade-in value toward another luxury vehicle from our curated collection.",
  },
];

const TradeProcess = () => {
  return (
    <div className="relative rounded-3xl bg-primary/5 border border-dashed border-primary p-6 lg:p-10">
      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 lg:mb-10 font-secondary">
        Our <span className="text-secondary-dark">Process</span>
      </h3>

      <div className="space-y-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="group relative flex gap-5">
              {/* Vertical animated line */}
              {!isLast && (
                <span className="absolute left-6 lg:left-7 top-10 lg:top-14 h-full w-px bg-slate-200 overflow-hidden">
                  <span
                    className="absolute inset-0 bg-linear-to-b from-transparent via-slate-400 to-transparent"
                    style={{
                      animation: "trade-line-move 2.5s linear infinite",
                    }}
                  />
                </span>
              )}

              {/* Icon circle */}
              <div className="relative z-10 flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full bg-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-400 group-hover:shadow-md">
                <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </div>

              {/* Text content */}
              <div className="pt-1">
                <h4 className="font-semibold transition-colors duration-300 group-hover:text-blue-900">
                  {step.title}
                </h4>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-slate-700">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TradeProcess;