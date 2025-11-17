<script setup>
const config = useRuntimeConfig();

const { pending, data: caseStudies } = await useFetch(
  `${config.public.API_BASE_URL}/api/case-studies?populate=*&sort[0]=createdAt:desc`,
  {
    method: "get",
    server: false
  }
);
// const caseStudies = [
//   {
//     img: "/images/services/ace-case-study.png",
//     logo: "/images/services/ace-logo.svg",
//     region: "India",
//     type: "Service type",
//     services: ["E-Commerce services", "UX CX services"],
//     link: "#"
//   },
//   {
//     img: "/images/services/magrabi-case-study.png",
//     logo: "/images/services/magrabi-logo.svg",
//     region: "India",
//     type: "Service type",
//     services: ["E-Commerce services", "UX CX services"],
//     link: "#"
//   },
//   {
//     img: "/images/services/reebok-case-study.png",
//     logo: "/images/services/reebok-logo.svg",
//     region: "India",
//     type: "Service type",
//     services: ["E-Commerce services", "UX CX services"],
//     link: "#"
//   }
// ];
</script>

<template>
  <div>
    <Loader v-if="pending" />
    <div class="flex flex-col gap-6 text-white bg-black md:gap-20" v-else>
      <div class="container flex flex-col gap-3 px-4 pt-6 mx-auto md:px-0 md:gap-8">
        <h1 class="text-2xl font-semibold text-center md:text-6xl">Our stories</h1>
        <!-- <p
          class="text-sm font-normal text-center md:text-xl"
        >Lorem ipsum dolor sit amet consectetur. Varius turpis eget tellus cum nibh. A at eu nulla faucibus vulputate. Nulla in quam morbi interdum est erat. Nunc amet viverra.</p>-->
      </div>
      <div class="container grid grid-cols-1 gap-5 px-4 py-6 mx-auto md:px-0 md:grid-cols-3">
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
    </div>
  </div>
</template>