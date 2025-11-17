<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const config = useRuntimeConfig();

const state = reactive({
  name: "",
  email: "",
  // phone: "",
  tellUsMore: ""
});
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Valid email required"
      )
    // phone: yup
    //   .string()
    //   .required("Phone number is required")
    //   .matches(phoneRegExp, "Phone number is not valid")
    //   .min(10, "too short")
    //   .max(10, "too long")
  })
});
const loading = ref(false);

const onSubmit = handleSubmit((values, actions) => {
  loading.value = true;
  $fetch(`${config.public.API_BASE_URL}/api/contacts`, {
    method: "post",
    body: {
      data: {
        name: state.name,
        email: state.email,
        // phone: state.phone,
        message: state.tellUsMore
      }
    }
  })
    .then(response => {
      toast(
        "Thank you for reaching out! We've received your message and will get back to you shortly. Have a great day!",
        {
          theme: "dark",
          type: "success",
          transition: "flip",
          dangerouslyHTMLString: true
        }
      );
      actions.resetForm();
      state.tellUsMore = "";
    })
    .catch(error => {
      toast("Sorry couldn't get that. please try again!", {
        theme: "dark",
        type: "error",
        transition: "flip",
        dangerouslyHTMLString: true
      });
    })
    .finally(() => {
      loading.value = false;
    });
});
</script>

<template>
  <div class="text-white bg-black md:py-20">
    <div class="container flex flex-col gap-6 px-4 py-6 mx-auto bg-[#0C0C0C] md:p-12">
      <div class="flex justify-center">
        <h1 class="text-2xl font-semibold md:text-6xl">Let's Connect</h1>
      </div>
      <form @submit.prevent="onSubmit" class="flex flex-col w-full gap-4">
        <div class="flex flex-col gap-6">
          <Input
            id="name"
            v-model="state.name"
            name="name"
            type="text"
            label="Your name"
            input-bg="bg-[#0C0C0C]"
          />
          <div class="flex flex-col gap-6 md:flex-row">
            <Input
              id="email"
              v-model="state.email"
              name="email"
              type="text"
              class="flex-grow"
              label="Your email"
              input-bg="bg-[#0C0C0C]"
            />
            <!-- <Input
              id="phone"
              v-model="state.phone"
              name="phone"
              type="text"
              class="flex-grow"
              label="Your mobile number"
              input-bg="bg-[#0C0C0C]"
            />-->
          </div>
          <!-- <TextArea
            id="tellUsMore"
            v-model="state.tellUsMore"
            name="tellUsMore"
            label="Tell us more about your project"
            input-bg="bg-[#0C0C0C]"
          />-->
          <label class="text-xs text-gray-200 md:text-base">Tell us more about your project</label>

          <textarea
            class="p-2 text-sm font-medium border rounded md:text-2xl border-white/20 outline-0 bg-[#0C0C0C]"
            rows="4"
            v-model="state.tellUsMore"
            name="tellUsMore"
          ></textarea>
        </div>
        <div class="flex md:justify-end">
          <button
            class="w-full px-3 py-3 text-base font-semibold text-white rounded md:px-10 md:py-5 md:w-fit bg-primary"
            :disabled="loading"
          >
            Submit
            <ButtonLoader v-if="loading" />
          </button>
        </div>
      </form>
      <!-- <div class="flex flex-col justify-between gap-6 md:flex-row">
        <div class="basis-1/2">
          <div class="flex flex-col gap-4 text-sm text-gray-200 md:gap-8">
            <h2>INDIA</h2>
            <div class="grid grid-cols-2 gap-6 md:grid-cols-3">
              <div class="flex flex-col gap-2">
                <span>T-5 7th, floor,</span>
                <span>thejaswini building,</span>
                <span>technopark, trivandrum</span>
                <span>kerala - 695581, india</span>
                <span>Ph: +91 471 2700666</span>
              </div>
              <div class="flex flex-col gap-2">
                <span>L-2, level -1,</span>
                <span>thejaswini building,</span>
                <span>technopark, trivandrum</span>
                <span>kerala - 695581, india</span>
                <span>Ph: +91 471 2700666</span>
              </div>
              <div class="flex flex-col gap-2">
                <span>3rd floor - thapasya,</span>
                <span>infopark, phase 1,</span>
                <span>kakkanad, kochi</span>
                <span>kerala - 682042, india</span>
                <span>Ph: +91 484 4606193</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-4 text-sm text-gray-200 md:items-end md:gap-8">
          <div class="flex justify-start w-full">
            <h2>UAE</h2>
          </div>
          <div class="flex">
            <div class="flex flex-col gap-2">
              <span>704-A, aspin commercial tower,</span>
              <span>sheikh zayed road</span>
              <span>dubai, UAE</span>
              <span>Ph: +971 4 223 3920</span>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>