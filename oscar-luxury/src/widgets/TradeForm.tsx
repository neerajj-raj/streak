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
import Input from "@common/components/Input";
import { Button } from "@common/components/Button";
import Toast from "@common/components/Toast";
import DropDownIcon from "@common/icons/DropDownIcon";
import TradeInUploadFile from "@common/components/TradeInUploadFile";

type Category = {
  id: number;
  name: string;
  slug: string;
  children?: Category[];
};

type TradeFormProps = {
  categories: Category[];
};

const TradeForm = ({ categories = [] }: TradeFormProps) => {
  const condition = ["Excellent", "Good", "Fair"];
  return (
    <>
      {/* ================= HEADER ================= */}
      <div>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 lg:mb-10 font-secondary">
          Submit <span className="text-secondary-dark">Form</span>
        </h2>
      </div>

      {/* ================= FORM ================= */}
      <form id="trade-in-form" className="grid grid-cols-1 md:grid-cols-2 gap-5" >
        {/* ================= BRAND ================= */}
        <div>
          <label className="text-sm font-medium mb-1.5 block">
            Brand <span className="text-red-600 font-semibold"> *</span>
          </label>
          <div className="relative">
            <button
              type="button"
              id="brand-btn"
              className="relative flex w-full items-center rounded-lg border border-slate-300 bg-white px-4 h-10 text-sm text-left text-slate-900 focus:border-amber-400 mt-0"
            >
              <span id="brand-text" className="flex-1 truncate text-slate-400">
                Select Brand
              </span>
              <DropDownIcon />
            </button>

            <div
              id="brand-list"
              className="hidden max-h-52 overflow-auto py-1 absolute rounded-lg border border-slate-200 bg-white shadow-lg w-full mt-2 z-50"
            >
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat.slug}
                  data-slug={cat.slug}
                  data-model={JSON.stringify(cat.children || [])}
                  className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <input type="hidden" id="brand-input" name="brand" />
          </div>
          <p id="error-brand" className="text-xs text-red-500 mt-1 hidden" />
        </div>

        {/* ================= MODEL ================= */}
        <div>
          <label className="text-sm font-medium mb-1.5 block">Model</label>
          <div className="relative">
            <button
              type="button"
              id="model-btn"
              className="relative flex w-full items-center rounded-lg border border-slate-300 bg-white px-4 h-10 text-sm text-left text-slate-900 focus:border-amber-400"
            >
              <span id="model-text" className="flex-1 truncate text-slate-400">
                Select Model
              </span>
              <DropDownIcon />
            </button>

            <div
              id="model-list"
              className="hidden max-h-52 overflow-auto py-1 absolute rounded-lg border border-slate-200 bg-white shadow-lg w-full mt-2 z-50"
            />

            <input type="hidden" id="model-input" name="model" />
          </div>
          <p id="error-model" className="text-xs text-red-500 mt-1 hidden" />
        </div>

        {/* ================= YEAR ================= */}
        <div>
          <label className="text-sm font-medium mb-1.5 block">
            Year <span className="text-red-600 font-semibold"> *</span>
          </label>
          <Input id="year" type="text" placeholder="Year" />
          <p id="error-year" className="text-xs text-red-500 mt-1 hidden" />
        </div>

        {/* ================= MILEAGE ================= */}
        <div>
          <label className="text-sm font-medium mb-1.5 block">
            Mileage (km) <span className="text-red-600 font-semibold"> *</span>
          </label>
          <Input id="cars_model" type="text" placeholder="Mileage" />
          <p id="error-mileage" className="text-xs text-red-500 mt-1 hidden" />
        </div>

        {/* ================= CONDITION ================= */}
        <div>
          <label className="text-sm font-medium mb-1.5 block">
            Condition <span className="text-red-600 font-semibold"> *</span>
          </label>
          <div className="relative">
            <button
              type="button"
              id="condition-btn"
              className="relative flex w-full items-center rounded-lg border border-slate-300 bg-white px-4 h-10 text-sm text-left text-slate-900 focus:border-amber-400"
            >
              <span id="condition-text" className="flex-1 truncate text-slate-400">
                Select Condition
              </span>
              <DropDownIcon />
            </button>

            <div
              id="condition-list"
              className="hidden max-h-52 overflow-auto py-1 absolute rounded-lg border border-slate-200 bg-white shadow-lg w-full mt-2 z-50"
            >
              {condition.map((c) => (
                <button
                  type="button"
                  key={c}
                  data-value={c}
                  className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
                >
                  {c}
                </button>
              ))}
            </div>

            <input type="hidden" id="condition-input" name="condition" />
          </div>
          <p id="error-condition" className="text-xs text-red-500 mt-1 hidden" />
        </div>

        {/* ================= NAME ================= */}
        <div>
          <label className="text-sm font-medium mb-1.5 block">
            Your Name <span className="text-red-600 font-semibold"> *</span>
          </label>
          <Input id="first-name" placeholder="Name" />
          <p id="error-Name" className="text-xs text-red-500 mt-1 hidden" />
        </div>

        {/* ================= PHONE ================= */}
        <div>
          <label className="text-sm font-medium mb-1.5 block">
            Phone Number <span className="text-red-600 font-semibold"> *</span>
          </label>
          <Input id="phone" type="tel" placeholder="Phone Number" />
          <p id="error-phone" className="text-xs text-red-500 mt-1 hidden" />
        </div>

        {/* =================Upload Images========= */}
        <div className="grid w-full grid-cols-1 xl:col-span-2">
          <div className="md:col-span-2">
            <label htmlFor="image-upload" className="text-sm font-medium mb-1.5 block">
              Your Car Images <span className="text-red-600 font-semibold"> *</span>
            </label>
            <div className="mt-2">
              <TradeInUploadFile maxFiles={3} />
              <p id="error-image" className="hidden text-xs text-red-500 mt-2" role="alert" />
            </div>
            <div id="image-file-row" className="mt-3 space-y-2"></div>
          </div>
        </div>

        {/* ================= SUBMIT ================= */}
        <div className="flex md:col-span-2 mt-6">
          <Button id="submit-btn" type="submit">
            <span id="submit-text">Submit for Evaluation</span>
          </Button>
        </div>
      </form>
      {/* ============= Toast============= */}
      <div id="toast" className="hidden">
        <Toast mainMessage="Request received" message="Our team will contact you shortly." />
      </div>

      {/* ================= SCRIPT ================= */}

      <Script id="trade-in-form" options={{
        wp: { id: "16436", post_id: "16436", author: "1", token: "" },
        fieldMap: {
          brand: 7,
          model: 8,
          year: 10,
          mileage: 11,
          condition: 12,
          name: 5,
          phone: 13,
          images: 15,
        },
      } as any}>
        {(_: any,
          opts: {
            siteKey: string;
            wp: { id: string; post_id: string; author: string; token: string };
            fieldMap: Record<string, number>;
          }) => {
          if ((window as any).__tradeInFormInit) return;
          (window as any).__tradeInFormInit = true;



          const ready = (fn: () => void) => {
            if (document.readyState !== "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          };

          ready(() => {
            const form = document.getElementById("trade-in-form") as HTMLFormElement | null;
            if (!form) return;

            const brandBtn = document.getElementById("brand-btn") as HTMLButtonElement | null;
            const brandText = document.getElementById("brand-text") as HTMLSpanElement | null;
            const brandList = document.getElementById("brand-list") as HTMLDivElement | null;
            const brandInput = document.getElementById("brand-input") as HTMLInputElement | null;

            const modelBtn = document.getElementById("model-btn") as HTMLButtonElement | null;
            const modelText = document.getElementById("model-text") as HTMLSpanElement | null;
            const modelList = document.getElementById("model-list") as HTMLDivElement | null;
            const modelInput = document.getElementById("model-input") as HTMLInputElement | null;

            const conditionBtn = document.getElementById("condition-btn") as HTMLButtonElement | null;
            const conditionText = document.getElementById("condition-text") as HTMLSpanElement | null;
            const conditionList = document.getElementById("condition-list") as HTMLDivElement | null;
            const conditionInput = document.getElementById("condition-input") as HTMLInputElement | null;

            const yearEl = document.getElementById("year") as HTMLInputElement | null;
            const mileageEl = document.getElementById("cars_model") as HTMLInputElement | null;
            const nameEl = document.getElementById("first-name") as HTMLInputElement | null;
            const phoneEl = document.getElementById("phone") as HTMLInputElement | null;

            const dropzoneEl = document.getElementById("upload-dropzone") as HTMLElement | null;

            const errorBrand = document.getElementById("error-brand");
            const errorModel = document.getElementById("error-model");
            const errorYear = document.getElementById("error-year");
            const errorMileage = document.getElementById("error-mileage");
            const errorCondition = document.getElementById("error-condition");
            const errorName = document.getElementById("error-Name");
            const errorPhone = document.getElementById("error-phone");
            const errorImage = document.getElementById("error-image");


            const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement | null;
            const submitText = document.getElementById("submit-text") as HTMLElement | null;
            const fieldset = document.getElementById("trade-in-fieldset") as HTMLFieldSetElement | null;

            const toast = document.getElementById("toast") as HTMLElement | null;

            let hasModels = true;

            // ---------- helpers ----------
            const showError = (el: HTMLElement | null, msg: string) => {
              if (!el) return;
              el.textContent = msg;
              el.classList.remove("hidden");
            };

            const hideError = (el: HTMLElement | null) => {
              if (!el) return;
              el.textContent = "";
              el.classList.add("hidden");
            };

            const markInvalid = (el: HTMLElement | null) => {
              if (!el) return;
              el.style.borderColor = "red";
              el.setAttribute("aria-invalid", "true");
            };

            const clearInvalid = (el: HTMLElement | null) => {
              if (!el) return;
              el.style.borderColor = "";
              el.removeAttribute("aria-invalid");
            };

            const markImageInvalid = () => {
              if (!dropzoneEl) return;
              dropzoneEl.style.borderColor = "#ef4444";     // red
              dropzoneEl.style.backgroundColor = "#fff5f5"; // light red
              dropzoneEl.setAttribute("aria-invalid", "true");
            };

            const clearImageInvalid = () => {
              if (!dropzoneEl) return;
              dropzoneEl.style.borderColor = "";
              dropzoneEl.style.backgroundColor = "";
              dropzoneEl.removeAttribute("aria-invalid");
            };

            if (!(window as any).__tradeInImageListenerAttached) {
              (window as any).__tradeInImageListenerAttached = true;
              window.addEventListener("tradein:image-uploaded", () => {
                hideError(errorImage);
                clearImageInvalid();
                (window as any).__tradeInForceImageError = false;
              });
            }

            const showToast = () => {
              if (!toast) return;
              toast.classList.remove("hidden");
              setTimeout(() => {
                toast.classList.add("hidden");
              }, 3000);
            };

            const setSubmitting = (b: boolean) => {
              if (fieldset) fieldset.disabled = b;
              if (submitText) submitText.textContent = b ? "Submitting..." : "Submit for Evaluation";
              if (submitBtn) {
                submitBtn.disabled = b;
                submitBtn.setAttribute("aria-busy", String(b));
              }
            };

            const focusEl = (el: HTMLElement | null) => {
              if (!el) return;
              el.focus({ preventScroll: false });
              el.focus();
            };

            // ---------- MODEL DATA BUILD ----------
            let allModels: { name: string }[] = [];
            try {
              const raw = Array.from(
                (document.getElementById("brand-list")?.querySelectorAll("[data-model]") || [])
              );
              raw.forEach((el) => {
                const json = el.getAttribute("data-model") || "[]";
                const models = JSON.parse(json);
                if (Array.isArray(models)) {
                  models.forEach((m) => {
                    if (m?.name) allModels.push({ name: m.name });
                  });
                }
              });
            } catch { }

            function renderModels(models: any[]) {
              if (!modelList || !modelBtn || !modelText || !modelInput) return;

              modelList.innerHTML = "";

              if (!models.length) {
                hasModels = false;

                // Disable model field
                modelBtn.disabled = true;
                modelBtn.classList.add("opacity-50", "cursor-not-allowed");
                modelText.textContent = "No models available";
                modelText.classList.add("text-slate-400");

                modelInput.value = "";
                hideError(errorModel);
                clearInvalid(modelBtn);

                return;
              }

              // Enable model field
              hasModels = true;
              modelBtn.disabled = false;
              modelBtn.classList.remove("opacity-50", "cursor-not-allowed");
              modelText.textContent = "Select Model";
              modelText.classList.add("text-slate-400");

              models.forEach((m) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.textContent = m.name;
                btn.className =
                  "w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100";

                btn.addEventListener("click", () => {
                  modelInput.value = m.name;
                  modelText.textContent = m.name;
                  modelText.classList.remove("text-slate-400");

                  hideError(errorModel);
                  clearInvalid(modelBtn);
                  modelList.classList.add("hidden");
                });

                modelList.appendChild(btn);
              });
            }


            renderModels(allModels);

            // ---------- Brand dropdown ----------//
            brandBtn?.addEventListener("click", (e) => {
              e.stopPropagation();
              brandList?.classList.toggle("hidden");
            });

            brandList?.querySelectorAll("[data-slug]").forEach((el) => {
              el.addEventListener("click", (e) => {
                e.stopPropagation();

                const name = el.textContent || "";
                const modelsJson = el.getAttribute("data-model") || "[]";

                let models: any[] = [];
                try {
                  models = JSON.parse(modelsJson);
                } catch { }

                if (brandInput) brandInput.value = name;
                if (brandText) {
                  brandText.textContent = name;
                  brandText.classList.remove("text-slate-400");
                }

                hideError(errorBrand);
                clearInvalid(brandBtn);

                // ✅ RESET MODEL (THIS ANSWERS YOUR QUESTION)
                if (modelInput) modelInput.value = "";
                if (modelText) {
                  modelText.textContent = "Select Model";
                  modelText.classList.add("text-slate-400");
                }
                hideError(errorModel);
                clearInvalid(modelBtn);

                // ✅ Now apply brand-specific models
                renderModels(models);

                brandList?.classList.add("hidden");
              });
            });


            //-----------Model dropdown ----------------//

            modelBtn?.addEventListener("click", (e) => {
              if (!hasModels) return;
              e.stopPropagation();
              modelList?.classList.toggle("hidden");
            });


            modelList?.querySelectorAll("[data-slug]").forEach((el) => {
              el.addEventListener("click", (e) => {
                e.stopPropagation();

                const name = el.textContent || "";
                const modelsJson = el.getAttribute("data-model") || "[]";

                let models: any[] = [];
                try {
                  models = JSON.parse(modelsJson);
                } catch { }

                if (modelInput) modelInput.value = name;
                if (modelText) {
                  modelText.textContent = name;
                  modelText.classList.remove("text-slate-400");
                }

                hideError(errorModel);

                renderModels(models);
                modelList?.classList.add("hidden");
              });
            });

            //----------- Condition dropdown ----------------//

            conditionBtn?.addEventListener("click", (e) => {
              e.stopPropagation();
              conditionList?.classList.toggle("hidden");
            });
            conditionList?.querySelectorAll("[data-value]").forEach((el) => {
              el.addEventListener("click", (e) => {
                e.stopPropagation();

                const v = el.getAttribute("data-value") || "";
                if (conditionInput) conditionInput.value = v;
                if (conditionText) {
                  conditionText.textContent = v;
                  conditionText.classList.remove("text-slate-400");
                }

                hideError(errorCondition);
                clearInvalid(conditionBtn);
                conditionList?.classList.add("hidden");
              });
            });


            document.addEventListener("click", (e) => {
              const target = e.target as Node;

              // ---------- BRAND ----------
              if (
                brandList &&
                brandBtn &&
                !brandBtn.contains(target) &&
                !brandList.contains(target)
              ) {
                brandList.classList.add("hidden");

                if (!brandInput?.value && brandText) {
                  brandText.textContent = "Select Brand";
                  brandText.classList.add("text-slate-400");
                }
              }
              // ---------- MODEL ----------
              if (
                modelList &&
                modelBtn &&
                !modelBtn.contains(target) &&
                !modelList.contains(target)
              ) {
                modelList.classList.add("hidden");

                // 🔥 IMPORTANT FIX
                if (!hasModels) {
                  // brand-inu models illa → text change cheyyaruthu
                  modelText!.textContent = "No models available";
                  modelText!.classList.add("text-slate-400");
                  return;
                }

                if (!modelInput?.value && modelText) {
                  modelText.textContent = "Select Model";
                  modelText.classList.add("text-slate-400");
                }
              }

              // ---------- CONDITION ----------
              if (
                conditionList &&
                conditionBtn &&
                !conditionBtn.contains(target) &&
                !conditionList.contains(target)
              ) {
                conditionList.classList.add("hidden");

                if (!conditionInput?.value && conditionText) {
                  conditionText.textContent = "Select Condition";
                  conditionText.classList.add("text-slate-400");
                }
              }
            });


            // ---------- VALIDATORS ----------
            function validateBrand(): boolean {
              if (!brandInput?.value) {
                showError(errorBrand, "Select brand");
                markInvalid(brandBtn);
                return false;
              }
              hideError(errorBrand);
              clearInvalid(brandBtn);
              return true;
            }

            function validateCondition(): boolean {
              if (!conditionInput?.value) {
                showError(errorCondition, "Select condition");
                markInvalid(conditionBtn);
                return false;
              }
              hideError(errorCondition);
              clearInvalid(conditionBtn);
              return true;
            }

            function validateYear(): boolean {
              const v = yearEl?.value.trim() || "";
              clearInvalid(yearEl);

              if (!v) {
                showError(errorYear, "Enter year");
                markInvalid(yearEl);
                return false;
              }

              if (!/^\d{4}$/.test(v)) {
                showError(errorYear, "Enter a valid 4 digit year");
                markInvalid(yearEl);
                return false;
              }

              const year = Number(v);
              const currentYear = new Date().getFullYear();

              if (year < 1900 || year > currentYear) {
                showError(errorYear, `Year cannot be greater than ${currentYear}`);
                markInvalid(yearEl);
                return false;
              }

              hideError(errorYear);
              return true;
            }

            function validateMileage(): boolean {
              const v = mileageEl?.value.trim() || "";
              clearInvalid(mileageEl);
              if (!v) {
                showError(errorMileage, "Enter mileage");
                markInvalid(mileageEl);
                return false;
              }
              if (!/^\d+$/.test(v)) {
                showError(errorMileage, "Only numbers allowed");
                markInvalid(mileageEl);
                return false;
              }
              hideError(errorMileage);
              return true;
            }

            function validateName(): boolean {
              const v = nameEl?.value.trim() || "";
              clearInvalid(nameEl);
              if (!v) {
                showError(errorName, "Enter your name");
                markInvalid(nameEl);
                return false;
              }
              if (!/^[A-Za-z ]+$/.test(v)) {
                showError(errorName, "Only alphabets allowed");
                markInvalid(nameEl);
                return false;
              }
              if (v.length < 3) {
                showError(errorName, "Must be minimum 3 letters");
                markInvalid(nameEl);
                return false;
              }
              hideError(errorName);
              return true;
            }

            function validatePhone(): boolean {
              const v = phoneEl?.value.trim() || "";
              clearInvalid(phoneEl);
              if (!v) {
                showError(errorPhone, "Enter phone number");
                markInvalid(phoneEl);
                return false;
              }
              if (!/^\d+$/.test(v)) {
                showError(errorPhone, "Only numbers allowed");
                markInvalid(phoneEl);
                return false;
              }
              if (v.length < 7 || v.length > 10) {
                showError(errorPhone, "Phone number must be between 7 and 10 digits");
                markInvalid(phoneEl);
                return false;
              }
              hideError(errorPhone);
              return true;
            }

            function validateImages(): boolean {
              const files = (window as any).__tradeInUploadedFiles || [];
              const pending = Number((window as any).__tradeInPendingUploads || 0);
              if (pending > 0) {
                showError(errorImage, "Please wait — images are still uploading.");
                markImageInvalid();
                (window as any).__tradeInForceImageError = true;
                return false;
              }
              if (!files.length) {
                showError(errorImage, "Upload at least one image");
                markImageInvalid();
                (window as any).__tradeInForceImageError = true;
                return false;
              }
              hideError(errorImage);
              clearImageInvalid();
              (window as any).__tradeInForceImageError = false;
              return true;
            }



            // -------- FIXED IMAGE VALIDATION --------

            function validateAll(): boolean {
              let firstInvalid: HTMLElement | null = null;
              let isValid = true;

              const check = (valid: boolean, el: HTMLElement | null) => {
                if (!valid) {
                  isValid = false;
                  if (!firstInvalid && el) {
                    firstInvalid = el;
                  }
                }
              };

              check(validateBrand(), brandBtn);
              check(validateYear(), yearEl);
              check(validateMileage(), mileageEl);
              check(validateCondition(), conditionBtn);
              check(validateName(), nameEl);
              check(validatePhone(), phoneEl);
              check(validateImages(), dropzoneEl);

              if (firstInvalid) {
                focusEl(firstInvalid);
              }

              return isValid;
            }

            const resetDropdown = () => {
              if (brandInput) brandInput.value = "";
              if (brandText) {
                brandText.textContent = "Select Brand";
                brandText.classList.add("text-slate-400");
              }
              brandList?.classList.add("hidden");

              if (modelInput) modelInput.value = "";
              if (modelText) {
                modelText.textContent = "Select Model";
                modelText.classList.add("text-slate-400");
              }

              if (conditionInput) conditionInput.value = "";
              if (conditionText) {
                conditionText.textContent = "Select Condition";
                conditionText.classList.add("text-slate-400");
              }
            };

            // ---------- LIVE VALIDATION ----------
            yearEl?.addEventListener("blur", validateYear);
            mileageEl?.addEventListener("blur", validateMileage);
            nameEl?.addEventListener("blur", validateName);
            phoneEl?.addEventListener("blur", validatePhone);


            // prevent multiple submit binding
            if ((window as any).__tradeInSubmitBound) return;
            (window as any).__tradeInSubmitBound = true;

            const WAIT_MSG = "Please wait — images are still uploading.";

            const clearWaitMessageIfShown = () => {
              if (!errorImage) return;
              if ((errorImage.textContent || "").trim() === WAIT_MSG) {
                errorImage.textContent = "";
                errorImage.classList.add("hidden");
              }
            };
            document.addEventListener("tradein:uploads-finished", clearWaitMessageIfShown);


            // ---------- gather values ----------
            function gatherValues() {
              return {
                brand: brandInput?.value || "",
                model: modelInput?.value || "",
                year: yearEl?.value.trim() || "",
                mileage: mileageEl?.value.trim() || "",
                condition: conditionInput?.value || "",
                name: nameEl?.value.trim() || "",
                phone: phoneEl?.value.trim() || "",
                images: (window as any).__tradeInUploadedFiles || [],
                pendingUploads: Number((window as any).__tradeInPendingUploads || 0),
              };
            }

            // ---------- SUBMIT ----------

            async function handleSubmit(ev?: SubmitEvent) {
              if (ev) ev.preventDefault();
              await new Promise((r) => setTimeout(r, 0));
              (window as any).__tradeInSuppressUploadErrorsUntil = Date.now() + 4000;

              const pending = Number((window as any).__tradeInPendingUploads || 0);

              if (pending > 0) {
                if (errorImage) {
                  if ((errorImage.textContent || "").trim() !== WAIT_MSG) {
                    errorImage.textContent = WAIT_MSG;
                  }
                  errorImage.classList.remove("hidden");
                }
                return;
              } else {
                clearWaitMessageIfShown();
              }

              if (!validateAll()) return;

              setSubmitting(true);
              try {
                const v = gatherValues();
                const fd = new FormData();
                fd.append("action", "wpforms_submit");
                fd.append("wpforms[id]", opts.wp.id);
                fd.append("wpforms[post_id]", opts.wp.post_id);
                fd.append("wpforms[author]", opts.wp.author);
                fd.append("page_url", location.href);

                const F = opts.fieldMap;
                fd.append(`wpforms[fields][${F.brand}]`, v.brand);
                fd.append(`wpforms[fields][${F.model}]`, v.model);
                fd.append(`wpforms[fields][${F.year}]`, v.year);
                fd.append(`wpforms[fields][${F.mileage}]`, v.mileage);
                fd.append(`wpforms[fields][${F.condition}]`, v.condition);
                fd.append(`wpforms[fields][${F.name}]`, v.name);
                fd.append(`wpforms[fields][${F.phone}]`, v.phone);


                const uploadedFiles = (window as any).__tradeInUploadedFiles || [];
                if (uploadedFiles.length) {
                  fd.append(`wpforms_${opts.wp.id}_${F.images}`, JSON.stringify(uploadedFiles));
                }

                const res = await fetch("https://oscarluxury.com/wp-admin/admin-ajax.php", {
                  method: "POST",
                  body: fd,
                  headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    Accept: "application/json",
                  },
                  credentials: "include",
                });

                let json: any = null;
                try {
                  json = await res.json();
                } catch { }

                const success = json ? Boolean(json.success) : res.ok;

                if (success) {
                  showToast();
                  form?.reset();
                  resetDropdown();
                  clearWaitMessageIfShown();

                  (window as any).__tradeInUploadedFiles = [];
                  (window as any).__tradeInPendingUploads = 0;
                  (window as any).__resetTradeInUpload?.();
                  (window as any).__clearTradeInUploadUI?.();
                } else {
                  alert("Submission failed. Please try again.");
                }
              } catch {
                alert("An unexpected error occurred. Please try again.");
              } finally {
                setSubmitting(false);
              }
            }

            form.addEventListener("submit", handleSubmit);
          });
        }}
      </Script>
    </>
  );
};

export default TradeForm;