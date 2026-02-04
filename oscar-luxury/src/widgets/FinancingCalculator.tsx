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
import { Button } from "@common/components/Button";
import Input from "@common/components/Input";
import Calculator from "@common/icons/Calculator";
import Calendar from "@common/icons/Calendar";
import Percent from "@common/icons/Percent";
import TrendingUp from "@common/icons/TrendingUp";
import Wallet from "@common/icons/Wallet";
import { Script } from "streak/components";

const FinancingCalculator = ({ id, price }: { id: string; price: string }) => {
  return (
    <section className="mt-10" id={id}>
      <div className="rounded-2xl bg-gray-50 p-6 lg:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
            <Calculator className="h-6 w-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Financing Calculator</h3>
            <p className="mt-0.5 text-sm text-slate-500">Calculate your monthly EMI instantly</p>
          </div>
        </div>

        <div className="my-6 h-px w-full bg-slate-200" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field id="vehiclePrice" label="Vehicle Price" icon={Wallet} suffix="AED">
            <Input id="vehiclePrice" value={price} />
            <p id="error-vehiclePrice" className="mt-1 hidden text-xs text-red-500">
              Vehicle price is required
            </p>
          </Field>

          <Field id="interestRate" label="Interest Rate" icon={Percent} suffix="%">
            <Input id="interestRate" />
            <p id="error-interestRate" className="mt-1 hidden text-xs text-red-500">
              Interest rate is required
            </p>
          </Field>

          <Field id="loanPeriod" label="Loan Period" icon={Calendar} suffix="Months">
            <Input id="loanPeriod" />
            <p id="error-loanPeriod" className="mt-1 hidden text-xs text-red-500">
              Loan period is required
            </p>
          </Field>

          <Field id="downPayment" label="Down Payment" icon={TrendingUp} suffix="AED">
            <Input id="downPayment" />
          </Field>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button size="md" className="md:flex-1" id="calculateEmiButton">
            Calculate EMI
          </Button>
          <Button variant="outline" size="md" id="clearEmiButton">
            Clear
          </Button>
        </div>

        {/* Result */}
        <div style={{ display: "none" }} id="financing_result" className="mt-8 grid grid-cols-1 gap-4 rounded-xl bg-slate-50 p-6 sm:grid-cols-3"></div>
      </div>

      <p className="mt-4 text-center text-xs text-slate-500">* This is an estimate. Actual rates may vary based on your credit profile.</p>
      <Script id={`financing-calculator-script-${id}`} options={{ rootSection: id }}>
        {(gDom: any, options: any) => {
          const rootSection = gDom.geById(options?.rootSection) as HTMLElement;
          const calculateEmiButton = rootSection.querySelector("#calculateEmiButton") as HTMLButtonElement;
          const clearEmiButton = rootSection.querySelector("#clearEmiButton") as HTMLButtonElement;
          const financingResult = rootSection.querySelector("#financing_result") as HTMLDivElement;

          // Form elements (scoped)
          const vehiclePriceElement = rootSection.querySelector("#vehiclePrice") as HTMLInputElement;
          const interestRateElement = rootSection.querySelector("#interestRate") as HTMLInputElement;
          const loanPeriodElement = rootSection.querySelector("#loanPeriod") as HTMLInputElement;
          const downPaymentElement = rootSection.querySelector("#downPayment") as HTMLInputElement;

          // ✅ Error elements (IMPORTANT: scoped to rootSection)
          const errorVehiclePrice = rootSection.querySelector("#error-vehiclePrice") as HTMLParagraphElement;
          const errorInterestRate = rootSection.querySelector("#error-interestRate") as HTMLParagraphElement;
          const errorLoanPeriod = rootSection.querySelector("#error-loanPeriod") as HTMLParagraphElement;

          const formatPrice = (n: number) => `AED ${n.toLocaleString("en-AE", { maximumFractionDigits: 0 })}`;

          const resultTemplate = (label: string, value: string) => `
            <div>
              <div style="
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: #64748b;
              ">
                ${label}
              </div>
              <div style="
                  margin-top: 8px;
                  font-size: 18px;
                  font-weight: 600;
                  color: #059669;
                ">
                  ${value}
              </div>
            </div>
          `;

          const hideAllErrors = () => {
            [errorVehiclePrice, errorInterestRate, errorLoanPeriod].forEach((el) => el.classList.add("hidden"));
          };

          calculateEmiButton.onclick = (e: any) => {
            e.preventDefault();

            const vehiclePrice = vehiclePriceElement.value.trim();
            const interestRate = interestRateElement.value.trim();
            const loanPeriod = loanPeriodElement.value.trim();
            const downPayment = downPaymentElement.value.trim();

            hideAllErrors();

            let hasError = false;

            if (!vehiclePrice) {
              errorVehiclePrice.classList.remove("hidden");
              hasError = true;
            }

            if (!interestRate) {
              errorInterestRate.classList.remove("hidden");
              hasError = true;
            }

            if (!loanPeriod) {
              errorLoanPeriod.classList.remove("hidden");
              hasError = true;
            }

            if (hasError) {
              financingResult.style.display = "none";
              financingResult.innerHTML = "";
              return;
            }

            const vehiclePriceNum = parseFloat(vehiclePrice);
            const interestRateNum = parseFloat(interestRate);
            const loanPeriodNum = parseFloat(loanPeriod);
            const downPaymentNum = parseFloat(downPayment || "0");

            const P = vehiclePriceNum - downPaymentNum;
            const r = interestRateNum / 12 / 100;
            const n = loanPeriodNum;

            const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const total = emiValue * n;
            const interest = total - P;

            financingResult.innerHTML = [
              { label: "Monthly Installment", value: emiValue },
              { label: "Total Interest", value: interest },
              { label: "Total Amount to Pay", value: total },
            ]
              .map((item) => {
                return resultTemplate(item.label, formatPrice(Math.round(item.value)));
              })
              .join("");

            financingResult.style.display = "";
          };

          clearEmiButton.onclick = (e: any) => {
            e.preventDefault();

            vehiclePriceElement.value = "";
            interestRateElement.value = "";
            loanPeriodElement.value = "";
            downPaymentElement.value = "";

            hideAllErrors();

            financingResult.innerHTML = "";
            financingResult.style.display = "none";
          };
        }}
      </Script>
    </section>
  );
};

function Field({
  id,
  label,
  icon: Icon,
  suffix,
  error,
  children,
}: {
  id: string;
  label: string;
  icon: React.ElementType;
  suffix: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-center gap-2 text-sm text-slate-700">
        <Icon className="h-4 w-4 text-emerald-600" />
        {label}
      </label>
      <div className="relative">
        {children}
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">{suffix}</span>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default FinancingCalculator;
