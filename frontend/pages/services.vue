<script setup>
const config = useRuntimeConfig();
const { data: content, pending:cpending, refresh } = await useFetch(
  `${config.public.API_BASE_URL}/api/service-page?populate[0]=image&populate[1]=service_section.service_card.main_image&populate[2]=service_section.service_card.logo`,
  {
    method: "get",
    server: false,

  onResponse({ request, response, options }) {
      useHead({
          meta: [
            { name: 'title', content: response._data.data.attributes?.seo_section?.title || '' },
            { name: 'description', content: response._data.data.attributes?.seo_section?.description || '' },
            { name: 'keywords', content: response._data.data.attributes?.seo_section?.keywords || '' }
          ],
        })
      }
  }
);
// const solutions = [
//   {
//     icon: "/images/services/ecommerce.svg",
//     title: "Digital commerce services",
//     text:[
//       'Advisory & Consulting Services',
//       'Business Analysis & Strategy Development',
//       'Digital Commerce implementation',
//       'Managed commerce services'
//     ],
//     img: "/images/services/ui-cx-thumb.png"
//   },
//   {
//     icon: "/images/services/product-engineering.svg",
//     title: "Cloud consulting services",
//     text:[
//     'Cloud native development',
//     'Cloud operations and DevSecOps',
//     'Cloud migration & Application Modernisation',
//     'Cloud workload assessment and optimisation',
//     'Cloud data engineering and integrations'
//     ],
//     img: "/images/services/product-engg-thumb.png"
//   },
//   {
//     icon: "/images/services/cloud-devops.svg",
//     title: "Software engineering services",
//     text:[
//       'Web and Mobile Application development',
//       'AI & Machine Learning',
//       'Data Engineering & Integrations',
//       'UI UX Design',
//       'Application modernisation/re-engineering',
//       'Support and maintenance services'
//     ],
//     img: "/images/services/qa-automation-thumb.png"
//   },
//   {
//     icon: "/images/services/application.svg",
//     title: "Quality assurance services",
//     text:[
//       'QA strategy & management',
//       'Manual Testing',
//       'Test automation',
//       'Performance testing'
//     ],
//     img: "/images/services/cloud-devop-thumb.png"
//   },
// {
//   icon: "/images/services/e-commerce-ico.svg",
//   title: "E-Commerce Services",
//   text:
//     "Lorem ipsum dolor sit amet consectetur. Ut morbi urna tortor amet id pharetra vitae. Nunc commodo accumsan ultricies nibh. Laoreet vitae eu tempus tempus turpis commodo faucibus sodales. Platea arcu pulvinar eu ultricies.Lorem ipsum dolor sit amet consectetur. Ut morbi urna tortor amet id pharetra vitae.",
//   img: "/images/services/e-commerce-thumb.png"
// }
// ];
const { data: caseStudies, pending:dpending, } = await useFetch(
  `${config.public.API_BASE_URL}/api/case-studies?populate=*`,
  {
    method: "get",
    server: false
  }
);

// const { data: serviceCard } = await useFetch(
//   `${config.public.API_BASE_URL}/api/service-page?populate=service_section.service_card.main_image,service_section.service_card.logo`,
//   {
//     method: "get",
//     server: false
//   }
// );
</script>

<template>
  <div>
    <Loader v-if="cpending || dpending" />
    <div v-else>
      <section
        class="flex flex-col gap-3 px-4 py-6 text-white bg-black md:px-0 md:py-20 md:flex-row md:gap-6 md:min-h-screen"
      >
        <div class="container grid grid-cols-1 gap-20 mx-auto md:grid-cols-2 place-content-center">
          <div class="flex flex-col px-4 gap-3 md:gap-10">
            <h1
              class="flex flex-row justify-center gap-1 text-2xl font-semibold text-center md:text-6xl md:justify-start md:flex-col md:text-left"
            >
              {{ content.data.attributes.heading}}
              <!-- Tech
              <span class="text-gray-400">partnerships</span>-->
            </h1>
            <p
              class="text-sm font-normal text-center text-gray-200 md:text-left md:text-xl"
            >{{ content.data.attributes.description}}</p>
          </div>
          <div class="flex px-4 justify-center">
            <img
              class="max-w-[220px] md:max-w-full h-auto"
              :src="content.data.attributes.image.data.attributes.url"
              alt
            />
          </div>
        </div>
      </section>
      <section class="py-6 text-white bg-black">
        <div class="pb-10 border-b border-gray-500">
          <div class="container flex px-4 mx-auto md:px-0">
            <h2
              class="text-xl font-semibold px-4 md:text-3xl"
            >{{ content.data.attributes.service_section.heading}}</h2>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <ServicesSolutionCard
            v-for="(serviceData, idx) in content.data.attributes.service_section.service_card"
            :key="idx"
            :order="idx+1"
            :icon="serviceData.logo.data.attributes.url"
            :title="serviceData.heading"
            :text="serviceData.description"
            :img="serviceData.main_image.data.attributes.url"
          />
        </div>
      </section>
      <section class="flex flex-col gap-4 py-6 text-white bg-black">
        <div class="border-b border-gray-500">
          <div
            class="container flex items-center justify-between px-4 pb-2 mx-auto md:px-0 md:py-10"
          >
            <h2 class="text-xl font-semibold px-4 md:text-4xl">Our stories</h2>
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
      </section>
    </div>
  </div>
</template>