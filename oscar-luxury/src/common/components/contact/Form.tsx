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
 * @author Ram
 */

import { Button } from "../Button";
import Dropdown from "../ContactDropdown";
import Input from "../Input";
import TextArea from "../TextArea";
import { Script } from "streak/components";
import Toast from "../Toast";

export default function Form() {
  const dropdownoptions = ["Buying A Car ", "Selling A Car", "Trade In", "Automotive Services", "General Enquiry"];
  return (
    <div id="contact-form-wrapper" className="space-y-4 border border-dashed border-slate-300 rounded-xl lg:rounded-3xl p-6 lg:p-8 bg-gray-50/50">
      <h3 className="mb-6 text-xl lg:text-2xl font-secondary font-semibold">Contact Form</h3>
      <div className="w-full">
        <label htmlFor="fname" className="text-sm">First Name <span className="text-red-600 font-semibold">*</span></label>
        <Input id="fname" placeholder="First Name" className="mt-2" />
        <p id="first-name-error" className="hidden text-xs text-red-500 mt-1"></p>
      </div>
      <div className="w-full">
        <label htmlFor="lname" className="text-sm">Last Name <span className="text-red-600 font-semibold">*</span></label>
        <Input id="lname" placeholder="Last Name" className="mt-2" />
        <p id="last-name-error" className="hidden text-xs text-red-500 mt-1"></p>
      </div>
      <div className="w-full">
        <label htmlFor="email" className="text-sm">Email <span className="text-red-600 font-semibold">*</span></label>
        <Input id="email" type="mail" placeholder="Email" className="mt-2" />
        <p id="email-error" className="hidden text-xs text-red-500 mt-1"></p>
      </div>
      <div className="w-full">
        <label htmlFor="phone" className="text-sm">Phone <span className="text-red-600 font-semibold">*</span></label>
        <Input id="phone" type="tel" placeholder="Phone Number" className="mt-2" />
        <p id="phone-error" className="hidden text-xs text-red-500 mt-1"></p>
      </div>

      <div className="w-full">
        <label htmlFor="warranty" className="text-sm">Enquiry Type</label>
        <div className="mt-2">
          <Dropdown placeholder="Select Type"
            options={dropdownoptions}
            dropid="enquiryType"
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 xl:col-span-2">
        <div className="w-full">
          <label htmlFor="description" className="text-sm">Description</label>
          <TextArea id="description" type="text-area" placeholder="Description" className="mt-2" />
        </div>
      </div>
      <div id="submit-btn" className="flex justify-start w-full">
        <Button>Submit</Button>
      </div>
      <div id="toast" className="hidden">
        <Toast mainMessage="Request received" message="Our team will contact you shortly." />
      </div>
      <Script id="contact-form" options={{ dropdownoptions: dropdownoptions }}>
        {(gDom: any, options: any) => {
              const option = options?.dropdownoptions;
              const firstName = document.getElementById("fname") as HTMLInputElement;
              const lastName = document.getElementById("lname") as HTMLInputElement;
              const email = document.getElementById("email") as HTMLInputElement;
              const phone = document.getElementById("phone") as HTMLInputElement;
              const description = document.getElementById("contact-textarea") as HTMLTextAreaElement;
              const enquiryType = document.getElementById("enquiryType") as HTMLElement;
              const toast = document.getElementById("toast") as HTMLElement;

              const parentBtn = document.getElementById("submit-btn");
              const submitBtn = parentBtn?.querySelector("button");

              const errors: Record<string, string> = {};

              const showError = (id: string, message: string) => {
                const el = document.getElementById(id);
                if (!el) return;

                el.textContent = message;
                el.classList.remove("hidden");
                errors[id] = message;
              };

              const hideError = (id: string) => {
                const el = document.getElementById(id);
                if (!el) return;

                el.textContent = "";
                el.classList.add("hidden");
                delete errors[id];
              };

              const nameRegex = /^[A-Za-z\s]+$/;

              const validateFirstName = () => {
                const value = firstName.value.trim();

                if (!value) {
                  showError("first-name-error", "First name is required");
                  return false;
                }

                if (!nameRegex.test(value)) {
                  showError("first-name-error", "Only alphabets are allowed");
                  return false;
                }

                hideError("first-name-error");
                return true;
              };

              const validateLastName = () => {
                const value = lastName.value.trim();

                if (!value) {
                  showError("last-name-error", "Last name is required");
                  return false;
                }

                if (!nameRegex.test(value)) {
                  showError("last-name-error", "Only alphabets are allowed");
                  return false;
                }

                hideError("last-name-error");
                return true;
              };


              const validateEmail = () => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value)) {
                  showError("email-error", "Enter a valid email address");
                  return false;
                }
                hideError("email-error");
                return true;
              };

              const validatePhone = () => {
                const phoneRegex = /^[0-9]+$/;
                if (!phoneRegex.test(phone.value)) {
                  showError("phone-error", "Enter a valid phone number");
                  return false;
                }
                hideError("phone-error");
                return true;
              };

              const validateForm = () => {
                validateFirstName();
                validateLastName();
                validateEmail();
                validatePhone();
                const hasErrors = Object.keys(errors).length > 0;

                if (hasErrors) {
                  scrollToForm();
                }

                return !hasErrors;
              };


              const scrollToForm = () => {
                const form = document.getElementById("contact-form-wrapper");
                const header = document.getElementById("header")!;

                if (!form) return;

                const elementTop = form.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementTop - header?.offsetHeight;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              };
              const showToast = () => {
                toast.classList.remove("hidden");
                setTimeout(() => {
                  toast?.classList.add("hidden");
                }, 3000);

              }

              const clearForm = () => {
              firstName.value = "";
              lastName.value = "";
              email.value = "";
              phone.value = "";
              description.value = "";

              enquiryType.textContent = "Select";

              hideError("first-name-error");
              hideError("last-name-error");
              hideError("email-error");
              hideError("phone-error");
};

              const formSubmit = async (e?: Event) => {
                e?.preventDefault();
                if (!validateForm()) return;

                try {
                  submitBtn?.setAttribute("disabled", "true");
                  const enquiryValue = enquiryType.textContent?.trim();

                  const formData = new FormData();
                  formData.append("wpforms[fields][1][first]", firstName.value);
                  formData.append("wpforms[fields][1][last]", lastName.value);
                  formData.append("wpforms[fields][2]", phone.value);
                  formData.append("wpforms[fields][3]", email.value);
                  formData.append("wpforms[fields][4]", description.value);
                  if (enquiryValue && enquiryValue !== "Select") {
                    formData.append("wpforms[fields][14]", enquiryValue);
                  }
                  formData.append("wpforms[id]", "16724");
                  formData.append("wpforms[author]", "1");
                  formData.append("wpforms[post_id]", "347");
                  formData.append("action", "wpforms_submit");
                  formData.append("page_url", "https://oscarluxury.com/contact-us/");

                  const res = await fetch(
                    "https://oscarluxury.com/wp-admin/admin-ajax.php",
                    {
                      method: "POST",
                      body: formData,
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json",
                      },
                      credentials: "include",
                    }
                  );

                  const data = await res.json();

                  if (!data.success) {
                    throw new Error(data?.data || "Submission failed");
                  }
                  showToast();
                  clearForm(); 
                } catch (err) {
                  alert("Something went wrong. Please try again.");
                } finally {
                  submitBtn?.removeAttribute("disabled");
                }
              };

              submitBtn?.addEventListener("click", formSubmit);
            
        }}


      </Script>
    </div>
  );
}
