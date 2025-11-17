<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const config = useRuntimeConfig();
const loading = ref(false);

// const linkGroups = [
//   {
//     title: "Case studies",
//     links: ["Case studies india", "Case studies europe", "Case studies UAE"]
//   },
//   {
//     title: "Services",
//     links: [
//       "Ecommerce services",
//       "Product engineering",
//       "Cloud and DevOps",
//       "Application modernisation",
//       "QA automation",
//       "UX/CX services"
//     ]
//   },
//   {
//     title: "About us",
//     links: ["Careers", "CSR at valoriz", "Corporate overview"]
//   },
//   {
//     title: "Blogs",
//     links: ["Retail trends", "E-Commerce tech", "Valoriz Talks"]
//   }
// ];
const linkGroups = [
  {
    text: "Home",
    link: "/"
  },
  {
    text: "About us",
    link: "/about"
  },
  {
    text: "Our history",
    link: "/about#history"
  },
  {
    text: "Our services",
    link: "/services"
  },
  {
    text: "Our stories",
    link: "/our-stories"
  },
  {
    text: "Careers",
    link: "/careers"
  },
  {
    text: "Blogs and media",
    link: "/blogs-podcast"
  },
  {
    text: "CSR at Valoriz",
    link: "/about#csr"
  }
];
const { values, errors, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup
      .string()
      .required("Email is required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Valid email required"
      )
  })
});
const [email, emailAttrs] = defineField("email");
const onSubmit = handleSubmit((values, actions) => {
  loading.value = true;
  $fetch(`${config.public.API_BASE_URL}/api/newsletter-signups`, {
    method: "post",
    body: {
      data: {
        email: email.value
      }
    }
  })
    .then(response => {
      toast(
        "Thank you for reaching out! We've received your request. Have a great day!",
        {
          theme: "dark",
          type: "success",
          transition: "flip",
          dangerouslyHTMLString: true
        }
      );
      actions.resetForm();
    })
    .catch(error => {
      console.log("errr", error);

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
const { data: content, pending } = await useFetch(
  `${config.public.API_BASE_URL}/api/footers?populate[0]=address&populate[1]=social_media_url.logo&populate[2]=links`,
  {
    method: "get",
    server: false
  }
);
</script>

<template>
  <div>
    <Loader v-if="pending" />
    <div class="bg-[#18181B] flex flex-col px-4 gap-2 md:gap-8 py-10 border-t border-primary" v-else>
      <div class="container flex flex-col gap-4 px-4 pb-4 mx-auto text-white md:px-0">
        <div class="flex flex-col items-start gap-3">
          <img class="h-5 md:h-auto" src="/images/valoriz-logo.svg" alt />
          <span
            class="text-sm font-medium text-gray-400 md:text-lg"
          >Raising values through collaboration!</span>
        </div>
      </div>

      <div
        class="container flex flex-col gap-20 pb-10 mx-auto border-b border-gray-500 md:gap-10 md:flex-row"
      >
        <div class="flex flex-col justify-center md:flex-row basis-1/2">
          <div class="container flex flex-col gap-4 px-4 text-white md:px-0">
            <h3 class="text-base font-semibold">Registered office</h3>
            <div class="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-3">
              <div
                class="flex flex-col gap-3"
                v-for="(address, idx) in content.data[0].attributes.address"
                :key="idx"
              >
                <p class="text-xs font-medium leading-6 md:text-sm">
                  {{ address.floor }}
                  <br />
                  {{ address.building }}
                  <br />
                  {{ address.district }}
                  <br />
                  {{ address.state }}
                  <br />
                  {{ address.country }}
                </p>
                <div class="flex items-center gap-3">
                  <img class="w-4 h-4" src="/images/footer/phone-ico.svg" alt />
                  <p class="text-xs md:text-sm">{{ address.phone_number }}</p>
                </div>
                <div class="flex text-xs font-medium">{{ address.CIN_number }}</div>
              </div>
              <!-- <div class="flex flex-col gap-3">
                <p class="text-xs font-medium leading-6 md:text-sm">
                  3rd floor,
                  <br />Thapasya Building,
                  <br />Infopark, Phase 1,
                  <br />Kochi, India
                </p>
                <div class="flex items-center gap-3">
                  <img class="w-4 h-4" src="/images/footer/phone-ico.svg" alt />
                  <p class="text-xs md:text-sm">+91 484 4606193</p>
                </div>
              </div>-->
              <!-- <div class="flex flex-col gap-3">
                <p class="text-xs font-medium leading-6 md:text-sm">
                  04-A,
                  <br />Aspin Commercial Tower,
                  <br />Sheikh Zayed Road,
                  <br />Dubai, UAE
                </p>
                <div class="flex items-center gap-3">
                  <img class="w-4 h-4" src="/images/footer/phone-ico.svg" alt />
                  <p class="text-xs md:text-sm">+971 4 223 3920</p>
                </div>
              </div>-->
            </div>
          </div>
          <!-- <div class="container flex flex-col justify-center gap-4 px-4 mx-auto text-white basis-1/3">
          <h3 class="text-base font-semibold">UAE</h3>
          <div class="grid grid-cols-2 md:grid-cols-1 gap-14">
            <div class="flex flex-col gap-3">
              <p class="text-xs font-medium leading-6 md:text-sm">
                704-A,
                <br />Aspin commercial tower,
                <br />Sheikh zayed road,
                <br />Dubai, UAE
              </p>
              <div class="flex items-center gap-3">
                <img class="w-4 h-4" src="/images/footer/phone-ico.svg" alt />
                <p class="text-xs md:text-sm">+971 4 223 3920</p>
              </div>
            </div>
          </div>
          </div>-->
        </div>
        <div class="container flex justify-end px-4 mx-auto text-white md:px-0 basis-1/2">
          <div class="flex flex-col w-full gap-6 md:w-9/12">
            <div class="flex items-center justify-end gap-5">
              <NuxtLink
                v-for="(social, idx) in content.data[0].attributes.social_media_url"
                :key="idx"
                :to="social.url"
                target="_blank"
              >
                <img :src="social.logo.data.attributes.url" :alt="social.name" />
              </NuxtLink>
              <!-- <NuxtLink to="https://twitter.com/valorizdigital" target="_blank">
                <img src="/images/footer/twitter-logo.svg" alt="Twitter icon" />
              </NuxtLink>
              <NuxtLink to="https://www.instagram.com/valorizdigital/" target="_blank">
                <img src="/images/footer/instagram-logo.svg" alt="Instagram icon" />
              </NuxtLink>
              <NuxtLink to="https://www.threads.net/@valorizdigital" target="_blank">
                <img src="/images/footer/threads-logo.svg" alt="Threads icon" />
              </NuxtLink>
              <NuxtLink to="https://www.facebook.com/valorizdigital" target="_blank">
                <img src="/images/footer/facebook-logo.svg" alt="Facebook icon" />
              </NuxtLink>
              <NuxtLink to="https://www.youtube.com/@valorizdigital" target="_blank">
                <img src="/images/footer/youtube-logo.svg" alt="Youtube icon" />
              </NuxtLink>-->
            </div>
            <form @submit="onSubmit" class="flex flex-col gap-6">
              <div class="flex h-8">
                <input
                  class="flex px-4 rounded-l grow border border-[#71717A] bg-[#18181B] md:h-12"
                  type="text"
                  v-model="email"
                  placeholder="Your email"
                  v-bind="emailAttrs"
                />
                <button
                  class="flex items-center gap-2 px-6 py-2 font-medium text-white rounded-r bg-primary ml-[-2px] md:h-12"
                  :disabled="loading"
                >
                  Sign up
                  <ButtonLoader v-if="loading" />
                </button>
              </div>
              <span class="text-xs text-red-500">{{ errors.email }}</span>
            </form>
            <div class="flex flex-col gap-6">
              <span class="text-[#A1A1AA] text-sm md:text-base font-light">
                For updates on retail and technology trends,
                <br />signup for our newsletter.
              </span>
              <!-- <NuxtLink to="/contact-us">
              <ButtonGreen :show-arrow="true">Contact Us</ButtonGreen>
              </NuxtLink>-->
            </div>
          </div>
        </div>
      </div>

      <div
        class="container grid grid-cols-2 gap-4 px-4 pb-10 mx-auto text-white border-b border-gray-500 md:gap-8 md:grid-cols-1 md:px-0"
      >
        <!-- <FooterLinksGroup
        v-for="(link, idx) in linkGroups"
        :key="idx"
        :title="link.title"
        :links="link.links"
        />-->
        <div class="flex flex-col flex-wrap gap-3 md:flex-row">
          <NuxtLink
            v-for="(link, idx) in content.data[0].attributes.links"
            :key="idx"
            class="underline decoration-1 underline-offset-4"
            :to="link.link"
          >{{ link.title }}</NuxtLink>
        </div>
      </div>

      <div
        class="container flex flex-col justify-between gap-10 px-4 mx-auto text-white md:flex-row md:gap-0 md:px-0"
      >
        <div class="flex flex-col gap-6">
          <!-- <span class="text-sm font-medium">CIN# U72900KL2014PTC037415</span> -->

          <div class="text-sm font-medium">
            <span class="text-[#A0A5B1] font-normal">&copy; 2024 | All rights reserved.</span> Valoriz Digital Pvt Ltd (Formerly Mozanta Technologies)
          </div>
        </div>
        <div class="flex flex-col gap-5 md:flex-row md:gap-20">
          <!-- <div class="flex gap-4">
          <img class="w-[60px] h-auto" src="/images/footer/great-place-to-work.png" alt />
          <img class="w-[60px] h-auto" src="/images/footer/akeneo-certified.png" alt />
          </div>-->
          <div class="flex md:items-end">
            <NuxtLink
              class="text-sm font-medium text-gray-200 md:text-lg"
              to="/privacy-policy"
            >Privacy policy</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>