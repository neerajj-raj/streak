<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { gsap } from 'gsap';
import { ExpoScaleEase } from 'gsap/EasePack';
import { useRoute, useFetch, useRuntimeConfig, useHead } from '#imports';
import moment from "moment";

const route = useRoute();
const config = useRuntimeConfig();

gsap.registerPlugin(ExpoScaleEase);

// let mm;
const main = ref();
let tl;
const fetch_id = ref(1);

function initialAnimation() {
  tl = gsap.timeline();
  tl.from(".logo-image", {
    scale: 3,
    duration: 1,
    autoAlpha: 0,
    ease: "expoScale(3, 1)"
  });
}

onMounted(() => {
  // mm = gsap.matchMedia();
  initialAnimation();
});
watch(
  () => route.path,
  newPath => {
    fetch_id.value += 1;
  }
);
onUnmounted(() => {
  tl.revert();
});
onUnmounted(() => {
  if (tl) {
    tl.kill(); 
  }
});
const services = [
  {
    img: "/images/services/ecommerce.svg",
    title: "Digital commerce services"
    // text:
    //   "Lorem ipsum dolor sit amet consectetur. Mattis morbi purus molestie dictum aliquet amet diam"
  },
  {
    img: "/images/services/product-engineering.svg",
    title: "Cloud consulting services"
    // text:
    //   "Lorem ipsum dolor sit amet consectetur. Mattis morbi purus molestie dictum aliquet amet diam"
  },
  {
    img: "/images/services/cloud-devops.svg",
    title: "Software engineering services "
    // text:
    //   "Lorem ipsum dolor sit amet consectetur. Mattis morbi purus molestie dictum aliquet amet diam"
  },
  {
    img: "/images/services/application.svg",
    title: "Quality assurance services"
    // text:
    //   "Lorem ipsum dolor sit amet consectetur. Mattis morbi purus molestie dictum aliquet amet diam"
  }
  // {
  //   img: "/images/services/qa.svg",
  //   title: "QA Automation",
  //   text:
  //     "Lorem ipsum dolor sit amet consectetur. Mattis morbi purus molestie dictum aliquet amet diam"
  // },
  // {
  //   img: "/images/services/ux.svg",
  //   title: "UX CX Services",
  //   text:
  //     "Lorem ipsum dolor sit amet consectetur. Mattis morbi purus molestie dictum aliquet amet diam"
  // }
];
const about = [
  {
    img: "/images/home/site-launches.svg",
    title: "Site launches",
    count: "25+",
    text:
      "Leading e-commerce site launches in both B2B and B2C markets worldwide."
  },
  {
    img: "/images/home/global-brands.svg",
    title: "Global brands",
    count: "10+",
    text: "Delivering implementation and managed services to global brands."
  },
  {
    img: "/images/home/operations.svg",
    title: "Operations",
    count: "7M+",
    text:
      "Overseeing ecommerce operations that generate revenue exceeding 400M+ USD."
  }
];
// const blogs = [
//   {
//     img: "/images/blog/blog1.png",
//     title: "Embracing the Future: Exploring the Concept of Future Factories",
//     category: "Technology",
//     date: "17 January, 2024",
//     link: ""
//   },
//   {
//     img: "/images/blog/blog2.png",
//     title: "Embracing the Future: Exploring the Concept of Future Factories",
//     category: "Technology",
//     date: "17 January, 2024",
//     link: ""
//   },
//   {
//     img: "/images/blog/blog3.png",
//     title: "Embracing the Future: Exploring the Concept of Future Factories",
//     category: "Technology",
//     date: "17 January, 2024",
//     link: ""
//   }
// ];
const { pending: blogPending, data: blogs } = await useFetch(
  `${config.public.API_BASE_URL}/api/blog-posts?populate=*&pagination[limit]=4&sort[0]=createdAt:desc`,
  {
    method: "get",
    server: false
  }
);
const { pending: csPending, data: caseStudies } = await useFetch(
  `${config.public.API_BASE_URL}/api/case-studies?populate=*&sort[0]=createdAt:desc`,
  {
    method: "get",
    server: false
  }
);
const { data: content, pending: pagePending } = await useFetch(
  `${config.public.API_BASE_URL}/api/home-page?populate[0]=notification_section&populate[1]=hash_tags&populate[2]=partners_section.partners.logo&populate[3]=service_section.service_card.image&populate[4]=openings_section.image&populate[5]=about_us_section.about_us_card.image&populate[6]=service_section.client_section.logo&populate[7]=seo_section`,
  {
    method: "get",
    server: false,
    // watch: [fetch_id],
    onResponse({ request, response, options }) {
      useHead({
          meta: [
            { name: 'title', content: response._data.data.attributes?.seo_section?.title || '' },
            { name: 'description', content: response._data.data.attributes?.seo_section?.description || '' },
            { name: 'keywords', content: response._data.data.attributes?.seo_section?.keywords || '' }
          ],
        })
    //   tl = gsap.timeline();
    //   tl.from(".logo-image", {
    //     scale: 3,
    //     duration: 2,
    //     autoAlpha: 0,
    //     ease: "expoScale(3, 1)"
    //   });
    //   tl.from(".main-text", {
    //     yPercent: "+=400",
    //     // duration: 1,
    //     autoAlpha: 0
    //   });
    //   tl.from(".specialization", {
    //     yPercent: "+=600",
    //     // duration: 1,
    //     autoAlpha: 0
    //   });
    //   tl.from(".animate-button", {
    //     yPercent: "+=500",
    //     // duration: 1,
    //     autoAlpha: 0
    //   });
    //   tl.from(".partners", {
    //     yPercent: "+=600",
    //     // duration: 1,
    //     autoAlpha: 0
    //   });
    //   tl.from(".label-comp", {
    //     yPercent: "-=400",
    //     // duration: 1,
    //     autoAlpha: 0
    //   });
    }
  }
);

</script>

<template>
  <div>
    <section class="text-white bg-black md:overflow-auto min-h-min md:min-h-screen">
      <div
        class="container flex flex-col items-center justify-center px-4 py-5 mx-auto overflow-hidden md:py-10 2xl:py-20"
      >
        <!-- <LinkLabel
          class="label-comp md:invisible"
          :label="content?.data.attributes.notification_section.link_title"
          :link="content?.data.attributes.notification_section.link"
        />-->
        <div class="relative flex flex-col items-center w-full gap-6 py-6 md:py-12 2xl:gap-16">
          <div class="w-full text-2xl font-semibold text-center text-white">
            <div
              class="absolute left-[50%] top-[50%] translate-x-[-50%] max-h-[50%] z-10 hidden md:flex w-full items-center justify-center"
            >
              <HomeHeroLogo class="invisible logo-image" />
            </div>
            <img
              src="/images/logo-vector.svg"
              class="flex md:hidden absolute left-[50%] translate-x-[-50%] top-0 md:top-[-50%] w-full md:max-w-[75%] z-0 visible logo-image"
              alt
            />
            <h1
              class="text-2xl md:text-[48px] font-semibold leading-normal  main-text"
            >
              Simplifying modern retail transformation through
              <br />composable commerce
              <!-- {{ content?.data.attributes.heading }} -->
            </h1>
          </div>

          <div
            class="flex flex-wrap justify-center gap-2 mt-0 text-white md:grid-flow-col specialization"
          >
            <!-- <span
              class="text-xs font-light md:font-medium md:text-sm w-fit"
              v-for="(tag, idx) in content?.data.attributes.hash_tags"
              :key="idx"
            >{{ tag.tag }}</span>-->
            <span class="text-xs font-light md:font-medium md:text-sm">#digitalcommercepartner</span>
            <span class="text-xs font-light md:font-medium md:text-sm">#headlesscommerce</span>
            <span class="text-xs font-light md:font-medium md:text-sm">#commercestrategy</span>
            <span class="text-xs font-light md:font-medium md:text-sm">#composablecommerce</span>
          </div>
          <NuxtLink class="z-20  animate-button" to="/our-stories">
            <ButtonGreen>Our stories</ButtonGreen>
          </NuxtLink>
        </div>

        <div class="flex flex-col  gap-4 py-0 md:py-14 2xl:py-20 partners">
          <div class="flex items-center justify-center gap-4">
            <!-- <div class="flex h-[0.4px] bg-white grow"></div> -->
            <!-- <h3
              class="text-sm font-normal text-center"
            >{{ content?.data.attributes.partners_section.heading }}</h3>-->
            <h3 class="text-sm font-normal text-center">Partners in collaboration</h3>
            <!-- <div class="flex h-[0.4px] bg-white grow"></div> -->
          </div>
          <div class="flex flex-wrap justify-center gap-4 md:gap-10">
            <!-- <img
              class="max-h-[12px] md:max-h-[30px]"
              v-for="(partner, idx) in content?.data.attributes.partners_section.partners"
              :key="idx"
              :src="partner.logo.data.attributes.url"
              :alt="partner.name"
            />-->
            <div class="flex space-x-8 overflow-hidden md:space-x-16 group">
              <div class="flex space-x-8 md:space-x-16 animate-loop-scroll group-hover:paused">
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"  
                  src="/images/partners/microsoft.png"
                  alt="Microsoft logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/algolia.png"
                  alt="Alglia logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/sanity.png"
                  alt="Sanity logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/occtoo.png"
                  alt="Occtoo logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/shopify.png"
                  alt="Shopify logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/akeneo.png"
                  alt="Akeneo logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/brinkcommerce.png"
                  alt="Brink commerce"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/commercial-layer.png"
                  alt="Commerce layer logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/mirelz.png"
                  alt="Mirelz logo"
                />
              </div>
              <div class="flex space-x-8 md:space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"  
                  src="/images/partners/microsoft.png"
                  alt="Microsoft logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/algolia.png"
                  alt="Alglia logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/sanity.png"
                  alt="Sanity logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/occtoo.png"
                  alt="Occtoo logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/shopify.png"
                  alt="Shopify logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/akeneo.png"
                  alt="Akeneo logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/brinkcommerce.png"
                  alt="Brink commerce"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/commercial-layer.png"
                  alt="Commerce layer logo"
                />
                <img
                  class="max-h-[12px] md:max-h-[30px] max-w-none"
                  src="/images/partners/mirelz.png"
                  alt="Mirelz logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="px-4 py-4 mt-8 border-b border-gray-200">
      <div class="container flex items-center justify-between mx-auto">
        <div class="flex flex-col text-sm font-medium basis-2/3 md:text-4xl">
          <span>How we helped our customer in</span>
          <span class="font-semibold">tackling a critical shopping experience flaw?</span>
        </div>
        <div class="flex justify-end basis-1/3">
          <NuxtLink class="md:hidden" to="/case-studies">
            <ButtonGreen>View all</ButtonGreen>
          </NuxtLink>
          <div class="flex items-center">
            <NuxtLink class="hidden md:flex" to="/case-studies">
              <ButtonGreen :show-arrow="true">View all case studies</ButtonGreen>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>-->

    <!-- <section>
      <div class="container flex flex-col gap-4 p-4 mx-auto md:gap-20 md:flex-row-reverse">
        <div class="flex flex-col gap-4 md:gap-6 basis-1/2">
          <img class="w-auto" src="/images/home/ace-thumbnail.png" alt />
          <div class="flex flex-col gap-3 md:gap-12">
            <div class="flex gap-20">
              <div class="flex flex-col text-sm">
                <span class="font-semibold md:text-lg">Customer</span>
                <span class="font-light md:text-lg">ACE Group</span>
              </div>
              <div class="flex flex-col text-sm">
                <span class="font-semibold md:text-lg">Region</span>
                <span class="font-light md:text-lg">India</span>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-sm font-semibold md:text-lg">Service type</span>
              <div class="flex flex-wrap gap-3">
                <TagLabel>E-Commerce services</TagLabel>
                <TagLabel>UX CX services</TagLabel>
                <TagLabel>Cloud and DevOps</TagLabel>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-sm font-semibold md:text-lg">Technologies</span>
              <div class="flex flex-wrap gap-3">
                <TagLabel>Saleor</TagLabel>
                <TagLabel>Algolia</TagLabel>
                <TagLabel>AWS</TagLabel>
                <TagLabel>Google cloud</TagLabel>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3 md:gap-7 basis-1/2">
          <div class="flex flex-col gap-3">
            <span class="text-lg font-medium md:font-semibold md:text-3xl">Customer needs</span>
            <p
              class="text-sm font-light text-gray-600 md:text-xl"
            >To streamline operations and enhance administrative control, we aim to integrate numerous disjointed systems, minimizing instances of missing orders and process delays. This integration will significantly reduce the need for manual intervention, providing administrators with a more efficient and centralized oversight of the entire process.</p>
          </div>
          <div class="flex flex-col gap-3">
            <span class="text-lg font-medium md:font-semibold md:text-3xl">Our Solution</span>
            <p
              class="text-sm font-light text-gray-600 md:text-xl"
            >Our solution automates the entire process, seamlessly integrating catalogue management with carrier logistics. Configurable interfaces contribute to accelerated turnaround times for brand launches or re-launches. Through our innovative design, we have implemented an automated system that establishes connectivity between the catalogue system, ERP, loyalty programs, and carrier management systems. This holistic integration ensures a swift and efficient workflow, enhancing the overall efficiency of brand launches and re-launches.</p>
          </div>
          <div class="flex">
            <ButtonOutline class="flex grow-0 md:py-4 md:px-6">
              <span class="text-xs font-normal md:text-base">Read More</span>
              <img class="w-auto h-auto" src="/images/home/right-arrow-icon.svg" alt />
            </ButtonOutline>
          </div>
        </div>
      </div>
      <div class="container flex flex-col gap-6 px-4 mx-auto">
        <span class="text-lg font-semibold md:text-3xl">Client’s feedback</span>
        <ClientFeedback />
      </div>
      <div class="flex py-5">
        <CustomerLogos />
      </div>
    </section>-->
    <div>
      <Loader v-if="pagePending" />
      <section class="min-h-0 py-6 text-white bg-black" v-else>
        <div class="px-4 pb-4 border-b md:px-0 md:py-10 border-white/25">
          <div class="container flex items-center justify-between mx-auto">
            <div class="flex px-4 flex-col">
              <h2
                class="text-xl font-semibold md:text-4xl"
              >{{content.data.attributes.service_section.heading}}</h2>
              <p
                class="text-base font-normal text-gray-200 md:text-2xl"
              >{{content.data.attributes.service_section.sub_heading}}</p>
            </div>
              <div class="flex">
              <NuxtLink to="/services">
                <ButtonGreen class="flex items-center whitespace-nowrap" :show-arrow="true">
                  View all
                  <span class="hidden md:flex">services</span>
                </ButtonGreen>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="container px-4 grid grid-rows-1 gap-4 p-4 mx-auto md:px-0 md:grid-cols-2">
          <HomeServicesCard
            v-for="(service, idx) in content.data.attributes.service_section.service_card"
            :key="idx"
            :img="service.image.data.attributes.url"
            :title="service.title"
          />
        </div>
        <div class="flex py-5">
          <CustomerLogos />
        </div>
      </section>
    </div>
    <div>
      <Loader v-if="pagePending" />
      <section class="text-white bg-black" v-else>
        <!-- <div class="border-b border-gray-500">
        <div class="container px-4 py-6 mx-auto md:py-10">
          <h2 class="text-xl font-semibold md:text-4xl">Careers</h2>
        </div>
        </div>-->
        <div class="container flex flex-col gap-8 px-4 py-6 mx-auto md:px-0 md:py-10 md:flex-row">
          <div class="flex px-4 flex-col justify-center gap-6 basis-1/2">
            <h3
              class="text-lg font-medium md:text-3xl"
            >{{content.data.attributes.openings_section.description}}</h3>
            <!-- <p
            class="text-sm font-medium leading-5 text-gray-300 md:leading-7 md:text-xl"
            >Valoriz invites you to be a part of a community that values progress, innovation, and a commitment to excellence.</p>-->
            <div class="flex basis-0 md:basis-1/3">
              <NuxtLink to="/careers">
                <ButtonGreen :show-arrow="true">Explore opportunities</ButtonGreen>
              </NuxtLink>
            </div>
          </div>
          <div class="flex justify-end basis-1/2">
            <img :src="content.data.attributes.openings_section.image.data.attributes.url" alt />
          </div>
        </div>
      </section>
    </div>
    <div>
      <Loader v-if="pagePending" />
      <section class="flex flex-col min-h-0 gap-4 py-6 md:gap-10 md:pb-10" v-else>
        <div class="border-b border-[#D4D4D8] md:py-10">
          <div class="container flex items-center justify-between px-4 pb-4 mx-auto md:px-0">
            <div class="flex px-4 flex-col">
              <h2
                class="text-xl font-semibold md:text-4xl"
              >{{content.data.attributes.about_us_section.heading}}</h2>
              <p
                class="text-base font-normal text-gray-600 md:text-2xl"
              >{{content.data.attributes.about_us_section.sub_heading}}</p>
            </div>
            <div class="flex">
              <NuxtLink to="/about">
                <ButtonGreen :show-arrow="true">Explore about us</ButtonGreen>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="container flex px-4 mx-auto md:px-0">
          <p
            class="text-base px-4 font-medium leading-6 text-gray-600 md:leading-8 md:text-xl"
          >{{content.data.attributes.about_us_section.description}}</p>
        </div>
        <div class="container grid grid-rows-1 gap-4 px-4 mx-auto md:px-0 md:grid-cols-3 md:gap-5">
          <HomeAboutCard
            v-for="(about,idx) in content.data.attributes.about_us_section.about_us_card"
            :key="idx"
            :img="about.image.data.attributes.url"
            :title="about.title"
            :count="about.no_of_items"
            :text="about.description"
          />
        </div>
      </section>
    </div>
    <div>
      <Loader v-if="csPending" />
      <section class="flex flex-col gap-6 py-6 text-white bg-black" v-else>
        <div class="border-b border-gray-500">
          <div
            class="container flex items-center justify-between px-4 pb-2 mx-auto md:px-0 md:py-10"
          >
            <h2 class="text-xl px-4 font-semibold md:text-4xl">Our stories</h2>
            <NuxtLink to="/our-stories">
              <ButtonGreen class="flex" :show-arrow="true">
                View all
                <span class="hidden md:flex">stories</span>
              </ButtonGreen>
            </NuxtLink>
          </div>
        </div>
        <div class="container grid grid-cols-1 gap-5 px-4 mx-auto md:grid-cols-3 md:px-0">
          <ServicesCaseStudyCard
            v-for="(cs, idx) in caseStudies.data"
            :key="idx"
            :title="cs.attributes.title"
            :img="cs.attributes.image.data.attributes.url"
            :region="cs.attributes.region"
            :type="cs.attributes.service_types.data"
            :services="cs.attributes.service_types.data"
            :link="cs.attributes.slug"
          />
        </div>
        <!-- <div class="flex py-5">
        <CustomerLogos />
        </div>-->
      </section>
    </div>
    <section class="min-h-0 py-6 text-white bg-black md:min-h-screen">
      <div class="border-b border-[#71717A] md:py-10">
        <div class="container flex items-center justify-between px-4 pb-4 mx-auto md:px-0">
          <div class="flex px-4 flex-col">
            <h2 class="text-xl font-semibold md:text-4xl">Blogs and media</h2>
            <p class="text-xs font-normal text-gray-200 md:text-2xl">We share wisdom and thoughts</p>
          </div>
          <div class="flex">
            <NuxtLink to="/blogs-podcast">
              <ButtonGreen :show-arrow="true">
                View all
                <span class="hidden md:flex">blogs</span>
              </ButtonGreen>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="container flex gap-5 p-4 mx-auto md:p-0 md:py-10">
        <button
          class="flex items-center justify-center gap-3 px-4 py-3 text-sm font-medium border rounded md:text-xl md:grow-0 grow min-h-10 border-primary bg-primary/25"
        >
          <img src="/images/home/blog-ico.svg"/>
          Blogs
        </button>
        <!-- <button
          class="flex items-center justify-center gap-3 px-4 py-3 rounded md:text-xl md:grow-0 grow min-h-10 bg-white/20"
        >
          <img src="/images/home/podcast-ico.svg" alt />
          Podcast
        </button>-->
      </div>
      <div>
        <Loader v-if="blogPending" />
        <div class="container flex flex-col gap-5 px-4 mx-auto md:px-0 md:flex-row" v-else>
          <div class="flex flex-col px-4 gap-6 basis-1/2" v-if="blogs.data.length > 0">
            <img
              class="w-full max-h-[500px] object-cover rounded"
              :src="blogs.data[0].attributes.image.data.attributes.url"
              alt
            />
            <div class="flex px-4 flex-col gap-4">
              <!-- <span class="text-lg font-medium text-primary">#technology #ai</span> -->
              <h2 class="text-2xl font-medium leading-9">{{ blogs.data[0].attributes.title }}</h2>
              <div class="flex items-center gap-2">
                <span
                  class="text-xs font-medium md:text-sm" 
                >{{ blogs.data[0].attributes.blog_category.data.attributes.name }}</span>
                <div class="w-1 h-1 rounded-full bg-primary"></div>
                <span
                  class="text-sm font-normal text-gray-50" v-if="blogs && blogs.data && blogs.data[0] && blogs.data[0].attributes.date"
                >{{ moment(blogs.data[0].attributes.date).format('DD-MM-YYYY') }}</span>
              </div>
              <NuxtLink
                :to="'/blog/'+blogs.data[0].attributes.slug"
                class="flex gap-2 text-base font-semibold"
              >
                Read More
                <img src="/images/home/right-arrow-white.svg" alt />
              </NuxtLink>
            </div>
          </div>
          <div class="flex flex-col px-4 gap-10 basis-1/2">
            <HomeBlogCard
              v-for="(blog, idx) in blogs.data.slice(1)"
              :key="idx"
              :img="blog.attributes.image.data.attributes.url"
              :title="blog.attributes.title"
              :category="blog.attributes.blog_category.data.attributes.name"
              :date="blog.attributes.date"
              :link="blog.attributes.slug"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- <Menu/> -->
  </div>
</template>