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
import { Modal, ModalTitle, ModalBody, ModalFooter } from "@common/components/Modal";
import { Script } from "streak/components";
import Input from "@common/components/Input";
import { Button } from "@common/components/Button";
import { wpBaseUrl } from "@utils/config";

const TradeInModal = ({ title }: { title: string }) => {
  return (
    <Modal
      open={true}
      onClose={() => {
        const root = document.getElementById("tradein-modal-root");
        const form = document.getElementById("tradein-form") as HTMLFormElement | null;

        // 🔹 Clear form + errors on close
        if (form) {
          form.reset();
          form.querySelectorAll("[data-error-for]").forEach((el) => {
            el.classList.add("hidden");
            el.textContent = "";
          });
        }

        if (root) root.classList.add("hidden");
      }}
      size="md"
    >
      {/* ---------- TITLE ---------- */}
      <ModalTitle>
        <div className="text-sm opacity-80">Make an offer for</div>
        <h2 className="mt-1 text-xl font-semibold md:text-2xl">{title}</h2>
      </ModalTitle>

      {/* ---------- BODY ---------- */}
      <form id="tradein-form" noValidate>
        <ModalBody>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1 block font-semibold">Your Name</label>
              <Input name="name" placeholder="Enter your name" />
              <p className="mt-1 hidden text-sm text-red-600" data-error-for="name">
                Please enter your name
              </p>
            </div>

            <div>
              <label className="mb-1 block font-semibold">Email Address</label>
              <Input type="email" name="email" placeholder="Enter email address" />
              <p className="mt-1 hidden text-sm text-red-600" data-error-for="email">
                Please enter a valid email
              </p>
            </div>

            <div>
              <label className="mb-1 block font-semibold">Phone</label>
              <Input name="phone" placeholder="Enter phone number" />
              <p className="mt-1 hidden text-sm text-red-600" data-error-for="phone">
                Please enter your contact number
              </p>
            </div>

            <div>
              <label className="mb-1 block font-semibold">Your Price</label>
              <Input name="price" placeholder="Enter your offer price" />
              <p className="mt-1 hidden text-sm text-red-600" data-error-for="price">
                Please enter your price
              </p>
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block font-semibold">Message</label>
              <textarea
                name="message"
                className="h-32 w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none"
                placeholder="Write your message"
              />
              <p className="mt-1 hidden text-sm text-red-600" data-error-for="message">
                Please enter your message
              </p>
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <div className="flex justify-end">
            <Button id="tradein-submit" type="submit">
              Submit
            </Button>
          </div>
        </ModalFooter>
      </form>

      {/* ---------- FORM VALIDATION & SUBMIT LOGIC ---------- */}
      <Script id="tradein-form-script" options={{ wpBaseUrl, title }}>
        {(gDom: any, options: any) => {
          function init() {
            const form = document.getElementById("tradein-form") as HTMLFormElement | null;
            if (!form) {
              setTimeout(init, 100);
              return;
            }

            const nameEl = form.elements.namedItem("name") as HTMLInputElement;
            const emailEl = form.elements.namedItem("email") as HTMLInputElement;
            const phoneEl = form.elements.namedItem("phone") as HTMLInputElement;
            const priceEl = form.elements.namedItem("price") as HTMLInputElement;
            const messageEl = form.elements.namedItem("message") as HTMLTextAreaElement;

            const errorName = form.querySelector('[data-error-for="name"]') as HTMLElement;
            const errorEmail = form.querySelector('[data-error-for="email"]') as HTMLElement;
            const errorPhone = form.querySelector('[data-error-for="phone"]') as HTMLElement;
            const errorPrice = form.querySelector('[data-error-for="price"]') as HTMLElement;
            const errorMessage = form.querySelector('[data-error-for="message"]') as HTMLElement;

            const submitBtn = document.getElementById("tradein-submit") as HTMLButtonElement;

            const showError = (el: HTMLElement, msg: string) => {
              el.textContent = msg;
              el.classList.remove("hidden");
            };

            const hideError = (el: HTMLElement) => {
              el.textContent = "";
              el.classList.add("hidden");
            };

            const resetForm = () => {
              form.reset();
              hideError(errorName);
              hideError(errorEmail);
              hideError(errorPhone);
              hideError(errorPrice);
              hideError(errorMessage);
            };

            function validateName(): boolean {
              const v = nameEl.value.trim();
              if (!v) {
                showError(errorName, "Please enter your name");
                return false;
              }
              if (!/^[A-Za-z\s]+$/.test(v)) {
                showError(errorName, "Only alphabets are allowed");
                return false;
              }
              hideError(errorName);
              return true;
            }

            function validateEmail(): boolean {
              const v = emailEl.value.trim();
              if (!v) {
                showError(errorEmail, "Please enter a valid email");
                return false;
              }
              const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              if (!re.test(v)) {
                showError(errorEmail, "Enter a valid email address");
                return false;
              }
              hideError(errorEmail);
              return true;
            }

            function validatePhone(): boolean {
              const v = phoneEl.value.trim();
              if (!v) {
                showError(errorPhone, "Please enter your contact number");
                return false;
              }
              if (!/^\d+$/.test(v)) {
                showError(errorPhone, "Only numbers are allowed");
                return false;
              }
              hideError(errorPhone);
              return true;
            }

            function validatePrice(): boolean {
              const v = priceEl.value.trim();
              if (!v) {
                showError(errorPrice, "Please enter your price");
                return false;
              }
              if (isNaN(Number(v))) {
                showError(errorPrice, "Enter a valid number");
                return false;
              }
              hideError(errorPrice);
              return true;
            }

            function validateMessage(): boolean {
              const v = messageEl.value.trim();
              if (!v) {
                showError(errorMessage, "Please enter your message");
                return false;
              }
              hideError(errorMessage);
              return true;
            }

            function validateAll(): boolean {
              const checks = [
                { ok: validateName(), el: nameEl },
                { ok: validateEmail(), el: emailEl },
                { ok: validatePhone(), el: phoneEl },
                { ok: validatePrice(), el: priceEl },
                { ok: validateMessage(), el: messageEl },
              ];

              const firstBad = checks.find((c) => !c.ok)?.el;
              if (firstBad) {
                firstBad.focus({ preventScroll: true });
                firstBad.scrollIntoView({ behavior: "smooth", block: "center" });
                return false;
              }

              return true;
            }

            form.addEventListener("submit", async function (e) {
              e.preventDefault();

              if (!validateAll()) return;

              submitBtn.disabled = true;

              try {
                const formData = new FormData();
                formData.append("wpforms[fields][1]", nameEl?.value?.trim() ?? "");
                formData.append("wpforms[fields][2]", emailEl?.value?.trim() ?? "");
                formData.append("wpforms[fields][6]", phoneEl?.value?.trim() ?? "");
                formData.append("wpforms[fields][4]", priceEl?.value?.trim() ?? "");
                formData.append("wpforms[fields][7]", options?.title ?? "");
                formData.append("wpforms[fields][5]", messageEl?.value?.trim() ?? "");
                formData.append("wpforms[id]", "16558");
                formData.append("wpforms[author]", "1");
                formData.append("wpforms[post_id]", "16558");
                formData.append("wpforms[submit]", "wpforms-submit");
                formData.append("action", "wpforms_submit");
                formData.append("page_url", window.location.href ?? "");

                const response = await fetch(`${options?.wpBaseUrl}/wp-admin/admin-ajax.php`, {
                  method: "POST",
                  body: formData,
                  headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    Accept: "application/json",
                  },
                  credentials: "include",
                });

                const resJson = await response.json();
                console.log("API response:", resJson);

                if (resJson?.success) {
                  alert("Offer submitted successfully!");
                  resetForm();
                  const root = document.getElementById("tradein-modal-root");
                  if (root) root.classList.add("hidden");
                } else {
                  alert("Something went wrong.Please try again....");
                }
              } catch (err) {
                console.error("Submit failed:", err);
                alert("Something went wrong. Please try again.");
              } finally {
                submitBtn.disabled = false;
              }
            });
          }

          init();
        }}
      </Script>

      {/* ---------- CLOSE ICON SCRIPT ---------- */}
      <Script id="tradein-close-script">
        {() => {
          function init() {
            const root = document.getElementById("tradein-modal-root");
            if (!root) {
              setTimeout(init, 100);
              return;
            }

            const closeBtn = root.querySelector("button.absolute.right-4.top-4") as HTMLButtonElement | null;

            if (!closeBtn) {
              setTimeout(init, 100);
              return;
            }

            closeBtn.addEventListener("click", function () {
              const form = document.getElementById("tradein-form") as HTMLFormElement | null;

              if (form) {
                form.reset();
                form.querySelectorAll("[data-error-for]").forEach((el) => {
                  el.classList.add("hidden");
                  el.textContent = "";
                });
              }

              root.classList.add("hidden");
            });
          }

          init();
        }}
      </Script>
    </Modal>
  );
};

export default TradeInModal;
