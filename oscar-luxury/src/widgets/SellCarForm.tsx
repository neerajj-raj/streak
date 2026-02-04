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
    <>
      <form id="sell-car-form" className="grid grid-cols-1 xl:grid-cols-2 xl:col-span-2 justify-items-center gap-3 gap-y-4">
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
          <p id="error-email" className="text-xs text-red-500 mt-1 hidden"></p>
        </div>

        {/* Phone */}
        <div className="w-full">
          <label htmlFor="phone" className="text-sm">
            Phone <span className="text-red-600 font-semibold">*</span>
          </label>
          <Input id="phone" type="tel" placeholder="Phone Number" className="mt-2" />
          <p id="error-phone" className="text-xs text-red-500 mt-1 hidden"></p>
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
              <span id="warranty-btn-text" className="flex-1 truncate text-slate-400">
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
            <div id="image-file-row" className="mt-3 space-y-2"></div>
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

      <div id="toast" className="hidden">
        <Toast mainMessage="Request received" message="Our team will contact you shortly." />
      </div>

      <Script
        id="sell-car-form-script"
        options={
          {
            wp: { id: "7667", post_id: "7679", author: "1", token: "" }, // token optional
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
        {(
          _: any,
          opts: {
            siteKey: string;
            wp: { id: string; post_id: string; author: string; token: string };
            fieldMap: Record<string, number>;
          }
        ) => {
          if ((window as any).__sellCarFormInit) return;
          (window as any).__sellCarFormInit = true;

          // Get elements once
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

          // ---------- Elements ----------
          const form = document.getElementById("sell-car-form") as HTMLFormElement | null;
          if (!form) return;

          const firstNameEl = document.getElementById("first-name") as HTMLInputElement | null;
          const emailEl = document.getElementById("email") as HTMLInputElement | null;
          const phoneEl = document.getElementById("phone") as HTMLInputElement | null;
          const mileageEl = document.getElementById("cars_model") as HTMLInputElement | null;
          const engineEl = document.getElementById("engine_size") as HTMLInputElement | null;
          const aboutEl = document.getElementById("description") as HTMLTextAreaElement | null;

          const warrantyBtn = document.getElementById("warranty-btn") as HTMLButtonElement | null;
          const warrantyList = document.getElementById("warranty-list") as HTMLDivElement | null;
          const warrantyInput = document.getElementById("warranty-input") as HTMLInputElement | null;
          const warrantyText = document.getElementById("warranty-btn-text") as HTMLElement | null;

          const errorFirst = document.getElementById("error-firstName") as HTMLElement | null;
          const errorEmail = document.getElementById("error-email") as HTMLElement | null;
          const errorPhone = document.getElementById("error-phone") as HTMLElement | null;
          const errorAbout = document.getElementById("error-about") as HTMLElement | null;

          const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement | null;
          const submitText = document.getElementById("submit-text") as HTMLElement | null;

          const toast = document.getElementById("toast") as HTMLElement | null;
          // Clear image validation message (and disable it)
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
          const clearAllErrors = () => [errorFirst, errorEmail, errorPhone, errorAbout].forEach(hideError);

          // ---------- validators ----------
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
          function validateAbout(): boolean {
            if (!aboutEl) return true;
            const v = aboutEl.value || "";
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

          // Validate all + focus first invalid
          function validateAll(): boolean {
            clearAllErrors();
            const checks: Array<{ ok: boolean; el: HTMLElement | null }> = [
              { ok: validateFirstName(), el: firstNameEl },
              { ok: validateEmail(), el: emailEl },
              { ok: validatePhone(), el: phoneEl },
              { ok: validateAbout(), el: aboutEl as any },
            ];
            const firstBad = checks.find((c) => !c.ok)?.el as HTMLElement | undefined;
            if (firstBad) {
              firstBad.focus({ preventScroll: true });
              firstBad.scrollIntoView({ behavior: "smooth", block: "center" });
              return false;
            }
            return true;
          }

          // Live validation (on blur + input)
          firstNameEl?.addEventListener("blur", validateFirstName);
          emailEl?.addEventListener("blur", validateEmail);
          phoneEl?.addEventListener("blur", validatePhone);
          aboutEl?.addEventListener("input", validateAbout);
          firstNameEl?.addEventListener("input", () => {
            if (errorFirst && !errorFirst.classList.contains("hidden")) validateFirstName();
          });
          emailEl?.addEventListener("input", () => {
            if (errorEmail && !errorEmail.classList.contains("hidden")) validateEmail();
          });
          phoneEl?.addEventListener("input", () => {
            if (errorPhone && !errorPhone.classList.contains("hidden")) validatePhone();
          });

          // Warranty dropdown
          warrantyBtn?.addEventListener("click", (e) => {
            e.stopPropagation();
            warrantyList?.classList.toggle("hidden");
          });

          warrantyList?.querySelectorAll("[data-value]").forEach((el) =>
            el.addEventListener("click", () => {
              if (!warrantyInput || !warrantyText) return;
              const v = el.getAttribute("data-value") || "";
              warrantyInput.value = v;
              warrantyText.textContent = v || "Select Warranty";
              warrantyList?.classList.add("hidden");
              warrantyText.classList.remove("text-slate-400");
            })
          );

          document.addEventListener("click", () => warrantyList?.classList.add("hidden"));

          // ---------- gather ----------
          function gatherValues() {
            return {
              firstName: firstNameEl?.value.trim() || "",
              email: emailEl?.value.trim() || "",
              phone: phoneEl?.value.trim() || "",
              carsMake: carsMakeEl?.value.trim() || "",
              mileage: mileageEl?.value.trim() || "",
              year: yearEl?.value.trim() || "",
              engineSize: engineEl?.value.trim() || "",
              warranty: warrantyInput?.value || "",
              description: aboutEl?.value || "",
              images: (window as any).__sellCarUploadedFiles || [],
              pendingUploads: Number((window as any).__sellCarPendingUploads || 0),
            };
          }

          // ---------- submit ----------
          async function handleSubmit(ev?: SubmitEvent) {
            if (ev) ev.preventDefault();

            // block submit if uploads running
            const pending = Number((window as any).__sellCarPendingUploads || 0);
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
              fd.append(`wpforms[fields][${F.name}]`, v.firstName);
              fd.append(`wpforms[fields][${F.email}]`, v.email);
              fd.append(`wpforms[fields][${F.phone}]`, v.phone);
              fd.append(`wpforms[fields][${F.carsMake}]`, v.carsMake);
              fd.append(`wpforms[fields][${F.mileage}]`, v.mileage);
              fd.append(`wpforms[fields][${F.year}]`, v.year);
              fd.append(`wpforms[fields][${F.engineSize}]`, v.engineSize);
              fd.append(`wpforms[fields][${F.warranty}]`, v.warranty);
              fd.append(`wpforms[fields][${F.description}]`, v.description);

              // Build images JSON EXACTLY like your cURL
              const uploadedFiles = (window as any).__sellCarUploadedFiles || [];
              if (uploadedFiles.length) {
                const filesJSON = uploadedFiles.map((f: any) => ({
                  name: f.file_user_name || f.name,
                  file: f.file || f.file_id, // IMPORTANT
                  url: f.url,
                  size: f.size,
                  type: f.type,
                  file_user_name: f.file_user_name || f.name,
                }));

                // Exact key used by your cURL:
                fd.append(`wpforms_${opts.wp.id}_${F.images}`, JSON.stringify(filesJSON));

                //  extra compatibility (safe to include)
                fd.append(`wpforms[fields][${F.images}]`, JSON.stringify(filesJSON));
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
                (window as any).__sellCarUploadedFiles = [];
                (window as any).__sellCarPendingUploads = 0;

                if (typeof (window as any).__resetSellCarUpload === "function") {
                  (window as any).__resetSellCarUpload();
                }
              } else {
                alert("Submission failed. Please try again.");
              }
            } catch (e) {
              alert("An unexpected error occurred. Please try again.");
            } finally {
              setSubmitting(false);
            }
          }

          form.addEventListener("submit", handleSubmit);
        }}
      </Script>
    </>
  );
};

export default SellCarForm;
