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
 * @author Anagha Chandrababu
 */

import { Script } from "streak/components";
import Input from "@common/components/Input";
import TextArea from "@common/components/TextArea";
import Button from "@common/components/Button";
import Toast from "@common/components/Toast";
import UploadFile from "@common/components/UploadFile";

const SellCarForm = () => {
  return (
    <div className="xl:col-span-2">
      <form id="sell-car-form" className="grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-3 gap-y-4">
        {/* Name */}
        <div className="w-full">
          <label htmlFor="first-name" className="text-sm">
            Name <span className="text-red-600 font-semibold">*</span>
          </label>
          <Input id="first-name" placeholder="Name" className="mt-2" />
          <p id="error-firstName" className="text-xs text-red-500 mt-1 hidden" />
        </div>

        {/* Email */}
        <div className="w-full">
          <label htmlFor="email" className="text-sm">
            Email <span className="text-red-600 font-semibold">*</span>
          </label>
          <Input id="email" type="email" placeholder="Email" className="mt-2" />
          <p id="error-email" className="text-xs text-red-500 mt-1 hidden" />
        </div>

        {/* Phone */}
        <div className="w-full">
          <label htmlFor="phone" className="text-sm">
            Phone <span className="text-red-600 font-semibold">*</span>
          </label>
          <Input id="phone" type="tel" placeholder="Phone Number" className="mt-2" />
          <p id="error-phone" className="text-xs text-red-500 mt-1 hidden" />
        </div>

        {/* Car’s Make */}
        <div className="w-full">
          <label htmlFor="cars_make" className="text-sm">
            Car&apos;s Make
          </label>
          <Input id="cars_make" type="text" placeholder="Car's Make" className="mt-2" />
        </div>

        {/* Mileage */}
        <div className="w-full">
          <label htmlFor="cars_model" className="text-sm">
            Milage / km
          </label>
          <Input id="cars_model" type="text" placeholder="Milage" className="mt-2" />
        </div>

        {/* Year */}
        <div className="w-full">
          <label htmlFor="year" className="text-sm">
            Year
          </label>
          <Input id="year" type="text" placeholder="Year" className="mt-2" />
          <p id="error-year" className="text-xs text-red-500 mt-1 hidden" />
        </div>

        {/* Engine Size */}
        <div className="w-full">
          <label htmlFor="engine_size" className="text-sm">
            Engine Size
          </label>
          <Input id="engine_size" type="text" placeholder="Engine Size" className="mt-2" />
        </div>

        {/* Warranty */}
        <div className="w-full">
          <label htmlFor="warranty" className="text-sm">
            Warranty
          </label>
          <div className="relative">
            <button
              type="button"
              id="warranty-btn"
              className="relative flex w-full items-center rounded-lg border border-slate-300 bg-white px-4 text-left text-slate-900 outline-none transition-colors focus:border-amber-400 max-lg:text-xs h-10 text-sm mt-2"
            >
              <span id="warranty-btn-text" className="flex-1 truncate text-slate-700">
                Select Warranty
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down ml-2 h-4 w-4 text-slate-400 transition-transform"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>

            <div
              id="warranty-list"
              className="hidden max-h-52 overflow-auto py-1 absolute rounded-lg border border-slate-200 bg-white shadow-lg w-full mt-2 z-10"
            >
              <button type="button" data-value="Yes" className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">
                Yes
              </button>
              <button type="button" data-value="No" className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">
                No
              </button>
            </div>

            <input type="hidden" id="warranty-input" name="warranty" aria-label="Warranty selection" />
          </div>
        </div>

        {/* Upload Images */}
        <div className="grid w-full grid-cols-1 xl:col-span-2">
          <div className="w-full">
            <label htmlFor="image-upload" className="text-sm">
              Upload Image
            </label>
            <div className="mt-2">
              <UploadFile maxFiles={3} />
            </div>
            <p id="error-image" className="text-xs text-red-500 mt-1 hidden" />
          </div>
        </div>

        {/* Description */}
        <div className="grid w-full grid-cols-1 xl:col-span-2">
          <div className="w-full">
            <label htmlFor="description" className="text-sm">
              Description
            </label>
            <TextArea id="description" type="text-area" placeholder="Description" className="mt-2" />
            <p id="error-about" className="text-sm text-red mt-2 hidden" />
          </div>
        </div>

        <div className="flex justify-start w-full">
          <Button id="submit-btn" type="submit">
            <span id="submit-text">Submit</span>
          </Button>
        </div>
      </form>

      <div id="toast" className="hidden fixed bottom-6 right-6 z-50">
        <Toast mainMessage="Request received" message="Our team will contact you shortly." />
      </div>

      <Script
        id="sell-car-form-script"
        options={
          {
            wp: { id: "7667", post_id: "7679", author: "1", token: "" },
            fieldMap: {
              name: 38,
              email: 29,
              phone: 31,
              carsMake: 2,
              mileage: 21,
              year: 7,
              engineSize: 10,
              warranty: 18,
              description: 34,
              images: 33,
            },
          } as any
        }
      >
        {(_: any, opts: any) => {
          // guard init
          if ((window as any).__sellCarFormInit) return;
          (window as any).__sellCarFormInit = true;

          const carsMakeEl = document.getElementById("cars_make") as HTMLInputElement | null;
          const yearEl = document.getElementById("year") as HTMLInputElement | null;

          const params = new URLSearchParams(window.location.search);
          const modelParam = params.get("model");
          const yearParam = params.get("year");

          if (modelParam && carsMakeEl) {
            carsMakeEl.value = modelParam;
            carsMakeEl.dispatchEvent(new Event("input", { bubbles: true }));
            carsMakeEl.dispatchEvent(new Event("change", { bubbles: true }));
          }

          if (yearParam && yearEl) {
            yearEl.value = yearParam;
            yearEl.dispatchEvent(new Event("input", { bubbles: true }));
            yearEl.dispatchEvent(new Event("change", { bubbles: true }));
          }

          const ready = (fn: () => void) => {
            if (document.readyState !== "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          };

          ready(() => {
            const form = document.getElementById("sell-car-form") as HTMLFormElement | null;
            if (!form) return;

            // prevent multiple submit binding
            if ((window as any).__sellCarSubmitBound) return;
            (window as any).__sellCarSubmitBound = true;

            const WAIT_MSG = "Please wait — images are still uploading.";
            const errorImage = document.getElementById("error-image") as HTMLElement | null;

            const clearWaitMessageIfShown = () => {
              if (!errorImage) return;
              if ((errorImage.textContent || "").trim() === WAIT_MSG) {
                errorImage.textContent = "";
                errorImage.classList.add("hidden");
              }
            };
            document.addEventListener("sellcar:uploads-finished", clearWaitMessageIfShown);

            const getRealInput = (id: string) =>
              (document.getElementById(id) as HTMLInputElement | null) ||
              (document.querySelector(`#${id} input`) as HTMLInputElement | null) ||
              (document.querySelector(`input#${id}`) as HTMLInputElement | null);

            const getDescriptionValue = (): string => {
              const ta =
                form.querySelector<HTMLTextAreaElement>("textarea#description") ||
                form.querySelector<HTMLTextAreaElement>("#description textarea") ||
                form.querySelector<HTMLTextAreaElement>('textarea[placeholder="Description"]') ||
                form.querySelector<HTMLTextAreaElement>("textarea");
              return (ta?.value || "").trim();
            };

            const firstNameEl = getRealInput("first-name");
            const emailEl = getRealInput("email");
            const phoneEl = getRealInput("phone");
            const carsMakeEl = getRealInput("cars_make");
            const mileageEl = getRealInput("cars_model");
            const yearEl = getRealInput("year");
            const engineEl = getRealInput("engine_size");
            const warrantyInput = document.getElementById("warranty-input") as HTMLInputElement | null;
            const warrantyBtn = document.getElementById("warranty-btn") as HTMLButtonElement | null;
            const warrantyText = document.getElementById("warranty-btn-text") as HTMLElement | null;
            const warrantyList = document.getElementById("warranty-list") as HTMLElement | null;
            const errorWarranty = document.getElementById("error-warranty") as HTMLElement | null;

            setTimeout(() => {
              const yearInput = getRealInput("year");
              if (!yearInput) return;

              yearInput.addEventListener("blur", validateYear);
              yearInput.addEventListener("input", () => {
                if (errorYear && !errorYear.classList.contains("hidden")) {
                  validateYear();
                }
              });
            }, 0);

            setTimeout(() => {
              if (firstNameEl) {
                firstNameEl.addEventListener("blur", validateFirstName);
                firstNameEl.addEventListener("input", () => {
                  if (errorFirst && !errorFirst.classList.contains("hidden")) {
                    validateFirstName();
                  }
                });
              }

              if (emailEl) {
                emailEl.addEventListener("blur", validateEmail);
                emailEl.addEventListener("input", () => {
                  if (errorEmail && !errorEmail.classList.contains("hidden")) {
                    validateEmail();
                  }
                });
              }

              if (phoneEl) {
                phoneEl.addEventListener("blur", validatePhone);
                phoneEl.addEventListener("input", () => {
                  if (errorPhone && !errorPhone.classList.contains("hidden")) {
                    validatePhone();
                  }
                });
              }
            }, 0);

            if (warrantyBtn && warrantyList) {
              warrantyBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                warrantyList.classList.toggle("hidden");
              });

              document.addEventListener("click", (e) => {
                if (!warrantyBtn.contains(e.target as Node)) {
                  warrantyList.classList.add("hidden");
                }
              });
            }

            warrantyList?.querySelectorAll<HTMLButtonElement>("button[data-value]").forEach((btn) => {
              btn.addEventListener("click", (e) => {
                e.preventDefault();
                const value = btn.dataset.value || "";

                if (warrantyInput) warrantyInput.value = value;
                if (warrantyText) warrantyText.textContent = value;

                warrantyList?.classList.add("hidden");
                hideError(errorWarranty);
                clearInvalid(warrantyBtn);
              });
            });

            const errorFirst = document.getElementById("error-firstName") as HTMLElement | null;
            const errorEmail = document.getElementById("error-email") as HTMLElement | null;
            const errorPhone = document.getElementById("error-phone") as HTMLElement | null;
            const errorAbout = document.getElementById("error-about") as HTMLElement | null;
            const errorYear = document.getElementById("error-year") as HTMLElement | null;

            const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement | null;
            const submitText = document.getElementById("submit-text") as HTMLElement | null;
            const toast = document.getElementById("toast") as HTMLElement | null;

            const showToast = () => {
              if (!toast) return;
              toast.classList.remove("hidden");
              setTimeout(() => toast.classList.add("hidden"), 3000);
            };

            const setSubmitting = (b: boolean) => {
              if (submitText) submitText.textContent = b ? "Submitting..." : "Submit";
              if (submitBtn) {
                submitBtn.disabled = b;
                submitBtn.setAttribute("aria-busy", String(b));
              }
            };

            const showError = (el: HTMLElement | null, m: string) => {
              if (!el) return;
              el.textContent = m;
              el.classList.remove("hidden");
            };

            const hideError = (el: HTMLElement | null) => {
              if (!el) return;
              el.textContent = "";
              el.classList.add("hidden");
            };

            const markInvalid = (el: HTMLElement | null) => {
              if (el) {
                (el as HTMLInputElement).style.borderColor = "red";
                (el as HTMLInputElement).setAttribute("aria-invalid", "true");
              }
            };

            const clearInvalid = (el: HTMLElement | null) => {
              if (el) {
                (el as HTMLInputElement).style.borderColor = "";
                (el as HTMLInputElement).removeAttribute("aria-invalid");
              }
            };


            function validateFirstName(): boolean {
              if (!firstNameEl) return true;
              const v = (firstNameEl.value || "").trim();
              clearInvalid(firstNameEl);

              if (!v) {
                showError(errorFirst, "Please enter your name");
                markInvalid(firstNameEl);
                return false;
              }
              if (!/^[A-Za-z ]+$/.test(v)) {
                showError(errorFirst, "Only alphabets are allowed");
                markInvalid(firstNameEl);
                return false;
              }
              if (v.length < 3) {
                showError(errorFirst, "Must be minimum 3 letters");
                markInvalid(firstNameEl);
                return false;
              }
              hideError(errorFirst);
              return true;
            }

            function validateEmail(): boolean {
              if (!emailEl) return true;
              const v = (emailEl.value || "").trim();
              clearInvalid(emailEl);

              if (!v) {
                showError(errorEmail, "Please enter a valid email address.");
                markInvalid(emailEl);
                return false;
              }
              const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              if (!re.test(v)) {
                showError(errorEmail, "Please enter a valid email address.");
                markInvalid(emailEl);
                return false;
              }
              hideError(errorEmail);
              return true;
            }

            function validatePhone(): boolean {
              if (!phoneEl) return true;
              const v = (phoneEl.value || "").trim();
              clearInvalid(phoneEl);

              if (!v) {
                showError(errorPhone, "Please enter a valid phone number.");
                markInvalid(phoneEl);
                return false;
              }
              if (!/^\d+$/.test(v)) {
                showError(errorPhone, "Only numbers are allowed");
                markInvalid(phoneEl);
                return false;
              }
              if (v.length < 6 || v.length > 15) {
                showError(errorPhone, "Please enter a valid phone number.");
                markInvalid(phoneEl);
                return false;
              }
              hideError(errorPhone);
              return true;
            }

            function validateYear(): boolean {
              const input = getRealInput("year");
              if (!input) return true;

              const v = (input.value || "").trim();
              clearInvalid(input);

              // OPTIONAL FIELD → empty is allowed
              if (!v) {
                hideError(errorYear);
                return true;
              }

              // must be 4 digits
              if (!/^\d{4}$/.test(v)) {
                showError(errorYear, "Enter a valid 4-digit year");
                markInvalid(input);
                return false;
              }

              const y = Number(v);
              const current = new Date().getFullYear();

              if (y > current) {
                showError(errorYear, `Year cannot be greater than ${current}`);
                markInvalid(input);
                return false;
              }

              hideError(errorYear);
              clearInvalid(input);
              return true;
            }

            function validateAbout(): boolean {
              const v = getDescriptionValue();
              if (v.length > 800) {
                showError(errorAbout, "Your description must not exceed 800 characters.");
                return false;
              }
              hideError(errorAbout);
              return true;
            }

              const resetWarranty = () => {
            if (warrantyInput) warrantyInput.value = "";
            if (warrantyText) {
              warrantyText.textContent = "Select Warranty";
              warrantyText.classList.add("text-slate-400");
            }
            warrantyList?.classList.add("hidden");
          };

            function validateAll(): boolean {
              const checks: Array<{ ok: boolean; el: HTMLElement | null }> = [
                { ok: validateFirstName(), el: firstNameEl },
                { ok: validateEmail(), el: emailEl },
                { ok: validatePhone(), el: phoneEl },
                { ok: validateYear(), el: yearEl },
                { ok: validateAbout(), el: (form?.querySelector("textarea") as any) || null },
              ];

              const firstBad = checks.find((c) => !c.ok)?.el;
              if (firstBad) {
                firstBad.focus?.({ preventScroll: true } as any);
                firstBad.scrollIntoView?.({ behavior: "smooth", block: "center" } as any);
                return false;
              }
              return true;
            }

            async function handleSubmit(ev?: SubmitEvent) {
              if (ev) ev.preventDefault();
 await new Promise((r) => setTimeout(r, 0));
              (window as any).__sellCarSuppressUploadErrorsUntil = Date.now() + 5000;
              (window as any).__clearSellCarUploadUI?.();

              const pending = Number((window as any).__sellCarPendingUploads || 0);

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
                const v = {
                  firstName: firstNameEl?.value.trim() || "",
                  email: emailEl?.value.trim() || "",
                  phone: phoneEl?.value.trim() || "",
                  carsMake: carsMakeEl?.value.trim() || "",
                  mileage: mileageEl?.value.trim() || "",
                  year: yearEl?.value.trim() || "",
                  engineSize: engineEl?.value.trim() || "",
                  warranty: warrantyInput?.value || "",
                  description: getDescriptionValue(),
                };

                const fd = new FormData();
                fd.append("action", "wpforms_submit");
                fd.append("wpforms[id]", opts.wp.id);
                fd.append("wpforms[post_id]", opts.wp.post_id);
                fd.append("wpforms[author]", opts.wp.author);
                fd.append("page_url", location.href);

                const F = opts.fieldMap;

                fd.append(`wpforms[fields][${F.name}]`, v.firstName);
                fd.append(`wpforms[fields][${F.email}]`, v.email);
                fd.append(`wpforms[fields][${F.phone}]`, v.phone);
                fd.append(`wpforms[fields][${F.carsMake}]`, v.carsMake);
                fd.append(`wpforms[fields][${F.mileage}]`, v.mileage);
                fd.append(`wpforms[fields][${F.year}]`, v.year);
                fd.append(`wpforms[fields][${F.engineSize}]`, v.engineSize);
                fd.append(`wpforms[fields][${F.warranty}]`, v.warranty);
                fd.append(`wpforms[fields][${F.description}]`, v.description);

                const uploadedFiles = (window as any).__sellCarUploadedFiles || [];
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
                } catch {}

                const success = json ? Boolean(json.success) : res.ok;

                if (success) {
                  showToast();
                  form?.reset();
                  resetWarranty();
                  clearWaitMessageIfShown();

                  (window as any).__sellCarUploadedFiles = [];
                  (window as any).__sellCarPendingUploads = 0;

                  (window as any).__resetSellCarUpload?.();
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
    </div>
  );
};

export default SellCarForm;