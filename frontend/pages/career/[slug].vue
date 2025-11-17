<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const route = useRoute();
const config = useRuntimeConfig();

const selectedDepartment = ref(null);
const applySection = ref(null);

const state = reactive({
  firstName: "",
  lastName: "",
  email: "",
  // phone: "",
  position: "",
  // experience: "",
  resume: ""
});
const loading = ref(false);
const file_upload_error = ref(null);
const fileInput = ref(null);
function handleFileUpload(e) {
  state.resume = e.target.files[0];
  // const fsize = e.target.files[0].size;
  // const file = Math.round(fsize / 1024);
  // if (file >= 2048) {
  //   file_upload_error.value = "please select a file less than 2mb";
  //   return;
  // }
}
const { pending: cpending, data: careers } = await useFetch(
  `${config.public.API_BASE_URL}/api/careers?filters[slug][$eq]=${route.params.slug}&populate=*`,
  {
    method: "get",
    server: false,
    onResponse({ request, response, options }) {
      console.log("test", response._data);
      useHead({
          meta: [
            { name: 'title', content: response._data.data[0].attributes?.seo_section?.title || '' },
            { name: 'description', content: response._data.data[0].attributes?.seo_section?.description || '' },
            { name: 'keywords', content: response._data.data[0].attributes?.seo_section?.keywords || '' }
          ],
        }),
      state.position = response._data.data[0].attributes.position;
      
    }
  }
);
const { pending: dpending, data: departments } = await useFetch(
  `${config.public.API_BASE_URL}/api/departments`,
  {
    method: "get",
    server: false
  }
);
const { pending: otherPending, data: otherCareers } = await useFetch(
  `${config.public.API_BASE_URL}/api/careers?filters[slug][$ne]=${route.params.slug}&populate=*&sort[0]=createdAt:desc`,
  {
    method: "get",
    server: false
  }
);

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Valid email required"
      ),
    // phone: yup
    //   .string()
    //   .required("Phone number is required")
    //   .matches(phoneRegExp, "Phone number is not valid")
    //   .min(10, "too short")
    //   .max(10, "too long"),
    position: yup.string().required("Position is required")
    // experience: yup.string().required("Position is required")
  })
});
const onSubmit = handleSubmit((values, actions) => {
  if (state.resume === "") {
    file_upload_error.value = "Resume is required";
    return;
  }
  const fsize = state.resume.size;
  const file = Math.round(fsize / 1024);
  if (file >= 2048) {
    file_upload_error.value = "please select a file less than 2mb";
    return;
  }
  file_upload_error.value = "";
  const data = {};
  data["first_name"] = state.firstName;
  data["last_name"] = state.lastname;
  data["email"] = state.email;
  data["position"] = state.position;
  const formData = new FormData();
  formData.append("files.resume", state.resume);
  formData.append("data", JSON.stringify(data));
  loading.value = true;
  $fetch(`${config.public.API_BASE_URL}/api/job-applications`, {
    method: "post",
    body: formData
  })
    .then(response => {
      toast(
        "Thank you for reaching out! We've received your job application and will get back to you shortly. Have a great day!",
        {
          theme: "dark",
          type: "success",
          transition: "flip",
          dangerouslyHTMLString: true
        }
      );
      actions.resetForm();
      fileInput.value.value = null;
    })
    .catch(error => {
      toast("Sorry couldn't get that. please try again!", {
        theme: "dark",
        type: "success",
        transition: "flip",
        dangerouslyHTMLString: true
      });
    })
    .finally(() => {
      loading.value = false;
    });
});
function scrollToEl(el) {
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <div>
    <Loader v-if="cpending || dpending || otherPending" />
    <div v-else>
      <div class="bg-black">
        <!-- <div class="container mx-auto">
          <Breadcrumbs />
        </div>-->
        <div
          class="flex gap-1 px-4 pt-6 pb-4 md:pb-6 md:px-0 text-[#7D8995] items-center text-xs md:text-sm border-b border-gray-700 container mx-auto"
        >
          <NuxtLink to="/">
            <img class="w-4 h-4" src="/images/home-ico.svg" alt />
          </NuxtLink>
          <span>/</span>
          <span>
            <NuxtLink to="/careers">Careers</NuxtLink>
          </span>
          <span>/</span>
          <span class="text-white">{{ careers.data[0].attributes.position }}</span>
        </div>
      </div>
      <div class="text-white bg-black">
        <div
          class="container flex flex-col gap-4 px-4 py-6 mx-auto border-b border-gray-800 md:px-0"
        >
          <div
            class="flex flex-col justify-between gap-4 border-b-0 border-gray-500 md:flex-row md:border-b md:pb-6"
          >
            <div class="flex flex-col gap-4">
              <h1 class="text-2xl md:text-4xl">{{ careers.data[0].attributes.position }}</h1>
              <div class="flex flex-grow-0 gap-4">
                <span
                  class="text-xs md:text-base"
                >{{careers.data[0].attributes.department.data.attributes.title }}</span>
                <span class="text-xs md:text-base">|</span>
                <span class="text-xs md:text-base">{{ careers.data[0].attributes.experience }}</span>
                <span class="text-xs md:text-base">|</span>
                <span class="text-xs md:text-base">{{ careers.data[0].attributes.location }}</span>
              </div>
            </div>
            <div class="flex">
              <ButtonGreen
                class="flex"
                :show-arrow="true"
                @click.prevent="scrollToEl(applySection)"
              >Apply Now</ButtonGreen>
            </div>
          </div>
          <div
            class="flex flex-col"
            v-for="(career, idx) in careers.data[0].attributes.content"
            :key="idx"
          >
            <div v-if="career.type === 'image'" class="w-full h-fit">
              <img class="w-full h-auto" :src="career.image.url" alt />
            </div>
            <h2
              class="text-base font-semibold md:text-2xl"
              v-else-if="career.type === 'heading'"
            >{{ career.children[0].text }}</h2>
            <ul class="flex flex-col gap-2 pl-6 list-disc" v-else-if="career.type === 'list'">
              <!-- <img :src="l.children[0].text" alt=""/> -->
              <li v-for="(l, inx) in career.children" :key="inx">{{ l.children[0].text }}</li>
            </ul>
            <div v-else v-for="(p, indx) in career.children" :key="indx">
              <span v-html="p.text" class="flex flex-col gap-4 text-sm font-medium md:text-lg"></span>
            </div>
          </div>
          <!-- <div class="flex flex-col gap-2">
            <h2 class="text-base font-semibold md:text-2xl">Overview</h2>
            <p
              class="text-lg"
            >We are seeking a highly skilled and experienced Senior UI Developer to join our team. As a Senior UI Developer, you will be responsible for leading the design and development of user interfaces for our web and mobile applications. You will collaborate closely with cross-functional teams including UX designers, backend developers, and product managers to deliver intuitive and visually stunning user experiences.</p>
          </div>
          <div class="flex flex-col gap-2">
            <h2 class="text-base font-semibold md:text-2xl">Key Responsibilities</h2>
            <ul class="pl-4 list-disc md:text-lg">
              <li>Lead the end-to-end design and development of user interfaces for web and mobile applications.</li>
              <li>Translate wireframes and design mockups into responsive and interactive user interfaces using HTML5, CSS3, and JavaScript frameworks such as React.js or Angular.</li>
              <li>Optimize application performance and ensure compatibility across various devices and browsers.</li>
              <li>Work closely with UX designers to implement intuitive and seamless user experiences.</li>
              <li>Collaborate with backend developers to integrate frontend components with server-side logic.</li>
              <li>Conduct code reviews, provide technical guidance, and mentor junior developers.</li>
              <li>Stay updated on emerging technologies and best practices in frontend development.</li>
            </ul>
          </div>
          <div class="flex flex-col gap-2">
            <h2 class="text-base font-semibold md:text-2xl">Qualification</h2>
            <ul class="pl-4 list-disc md:text-lg">
              <li>Bachelor's degree in Computer Science, Engineering, or related field.</li>
              <li>5+ years of experience in frontend development with expertise in HTML5, CSS3, and JavaScript.</li>
              <li>Proven experience with modern frontend frameworks such as React.js, Angular, or Vue.js.</li>
              <li>Strong understanding of responsive web design principles and mobile-first development.</li>
              <li>Experience with version control systems such as Git.</li>
            </ul>
          </div>
          <div class="flex flex-col gap-2">
            <p
              class="md:text-lg"
            >If you are passionate about frontend development and thrive in a fast-paced environment, we would love to hear from you. Join us in revolutionizing the way people experience our products and services through exceptional user interfaces. Apply now and embark on a rewarding career journey with valoriz.</p>
          </div>-->
        </div>
      </div>

      <div class="text-white bg-black md:pb-20 scroll-margin" ref="applySection">
        <div class="container flex flex-col gap-6 p-4 mx-auto">
          <h2 class="text-base font-semibold md:text-2xl">Apply for this role</h2>
          <form @submit.prevent="onSubmit" class="flex flex-col w-full gap-4">
            <div class="flex flex-col w-full gap-10 md:flex-row">
              <Input
                id="firstName"
                v-model="state.firstName"
                name="firstName"
                type="text"
                label="First name"
                class="flex flex-grow"
              />
              <Input
                id="lastName"
                v-model="state.lastName"
                name="lastName"
                type="text"
                label="Last name"
                class="flex flex-grow"
              />
            </div>
            <div class="flex flex-col gap-10 md:flex-row">
              <Input
                id="email"
                v-model="state.email"
                name="email"
                type="text"
                class="flex flex-grow"
                label="Email"
              />
              <!-- <Input
                id="phone"
                v-model="state.phone"
                name="phone"
                type="text"
                class="flex flex-grow"
                label="Phone number"
              />-->
            </div>
            <div class="flex flex-col gap-10 md:flex-row">
              <Input
                id="position"
                v-model="state.position"
                name="position"
                type="text"
                class="flex flex-grow"
                label="Position applying for"
              />
              <!-- <Input
                id="experience"
                v-model="state.experience"
                name="experience"
                type="text"
                class="flex flex-grow"
                label="Work Experience"
              />-->
            </div>
            <div class="flex flex-col gap-3">
              <!-- <Input
                id="resume"
                v-model="state.resume"
                name="resume"
                class="flex flex-grow"
                type="file"
                label="Upload CV/Resume"
              />-->
              <input
                id="file-upload-input"
                ref="fileInput"
                type="file"
                name="resume"
                class="w-full pb-2 text-sm font-medium border-b md:text-2xl border-white/20 outline-0"
                accept=".docx, .pdf"
                @change="handleFileUpload($event)"
              />
              <span class="text-xs text-right text-red-500">{{ file_upload_error }}</span>
            </div>
            <div class="flex justify-end">
              <ButtonGreen>Submit</ButtonGreen>
            </div>
          </form>
        </div>
      </div>
      <section class="flex flex-col py-6 md:p-0 md:gap-14">
        <div class="border-b border-gray-300">
          <div
            class="container flex items-center justify-between px-4 py-4 mx-auto md:py-10 md:px-0"
          >
            <h2 class="flex flex-col text-xl md:text-4xl">
              Explore the
              <span class="font-semibold">open positions</span>
            </h2>
            <!-- <div class="flex">
              <select
                class="flex px-4 bg-gray-100 rounded-lg h-[50px]"
                v-model="selectedDepartment"
              >
                <option value="null" selected disabled>Please select one</option>
                <option
                  v-for="(department, idx) in departments.data"
                  :key="idx"
                  :value="department.attributes.title"
                >{{department.attributes.title}}</option>
              </select>
            </div>-->
          </div>
        </div>
        <CareerOpenPositions :careers="otherCareers" />
      </section>
    </div>
  </div>
</template>

<style scoped>
.scroll-margin{
  scroll-margin: 100px;
}
</style>