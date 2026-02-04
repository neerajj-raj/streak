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
 * @author Minna Ancy Mathew
 */
import { Script } from "streak/components";
import ChevronDown from "@common/icons/ChevronDown";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How is my trade-in value calculated?",
    answer:
      "Trade-in value is based on your vehicle’s brand, model, year, mileage, condition, and current market demand.",
  },
  {
    question: "Is the trade-in quote final?",
    answer:
      "Initial quotes are indicative. The final value is confirmed after inspection and verification.",
  },
  {
    question: "Do I need to bring my car to the showroom?",
    answer:
      "In most cases, an inspection is required. Our team will guide you through the next steps after reviewing your details.",
  },
  {
    question: "How long does the trade-in process take?",
    answer:
      "Timelines vary based on inspection and documentation, but we aim to complete the process as efficiently as possible.",
  },
  {
    question: "Can I trade in my car without buying another vehicle?",
    answer:
      "Trade-ins are typically linked to upgrading to another vehicle. For selling only, please visit our Sell Your Car page.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No. All terms and values are clearly communicated before finalizing the trade-in.",
  },
];

const Faq = () => {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-10 md:py-14 lg:py-24">
      <div className="container">
        <div className="xl:w-8/12 mx-auto">
          <div className="w-full" id="faq-root">
            <div className="text-center mb-8 lg:mb-14">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold font-secondary">
                Frequently Asked{" "}
                <span className="text-secondary-dark">Questions</span>
              </h3>
              <p className="mt-3">
                Quick answers to common trade-in questions.
              </p>
            </div>

            {/* ---------- FAQ LIST ---------- */}
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden"
                  data-open={index === 0 ? "true" : "false"}
                >
                  <button
                    type="button"
                    className="faq-toggle w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-linear-to-b hover:from-gray-50/70 hover:to-white"
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`faq-chevron h-5 w-5 shrink-0 transition-transform duration-300 ${
                        index === 0 ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`faq-content grid transition-all duration-300 ease-in-out ${
                      index === 0
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Script id="faq-script">
              {() => {
                const root = document.getElementById("faq-root");
                if (!root) return;
                if ((root as any).__faqBound) return;
                (root as any).__faqBound = true;

                const items = Array.from(
                  root.querySelectorAll<HTMLElement>(".faq-item")
                );

                const closeAll = () => {
                  items.forEach((item) => {
                    item.dataset.open = "false";
                    item
                      .querySelector(".faq-content")
                      ?.classList.replace(
                        "grid-rows-[1fr]",
                        "grid-rows-[0fr]"
                      );
                    item
                      .querySelector(".faq-chevron")
                      ?.classList.remove("rotate-180");
                  });
                };

                root.addEventListener("click", (event) => {
                  const button = (event.target as HTMLElement).closest(
                    ".faq-toggle"
                  );
                  if (!button) return;

                  const item =
                    button.closest<HTMLElement>(".faq-item");
                  if (!item) return;

                  const isOpen = item.dataset.open === "true";

                  closeAll();

                  if (!isOpen) {
                    item.dataset.open = "true";
                    item
                      .querySelector(".faq-content")
                      ?.classList.replace(
                        "grid-rows-[0fr]",
                        "grid-rows-[1fr]"
                      );
                    item
                      .querySelector(".faq-chevron")
                      ?.classList.add("rotate-180");
                  }
                });
              }}
            </Script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
