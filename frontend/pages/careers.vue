<script setup>
const config = useRuntimeConfig();
const { pending:ppending, data: content } = await useFetch(
  `${config.public.API_BASE_URL}/api/career-page?populate[0]=video&populate[1]=image_1&populate[2]=image_2`,
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
const { pending:cpending, data: careers } = await useFetch(
  `${config.public.API_BASE_URL}/api/careers?populate=*`,
  {
    method: "get",
    server: false
  }
);
const { pending:dpending, data: departments } = await useFetch(
  `${config.public.API_BASE_URL}/api/departments`,
  {
    method: "get",
    server: false
  }
);
const selectedDepartment = ref(null);

// const careers = [
//   {
//     role: "Senior UI developer",
//     exp: "5-8 years",
//     location: "Trivandrum, india",
//     link: "#"
//   },
//   {
//     role: "Junior UI designer",
//     exp: "1-3 years",
//     location: "Trivandrum, india",
//     link: "#"
//   },
//   {
//     role: "Senior Hr Manager",
//     exp: "4-7 years",
//     location: "Trivandrum, india",
//     link: "#"
//   },
//   {
//     role: "Junior Accountant",
//     exp: "5-8 years",
//     location: "Trivandrum, india",
//     link: "#"
//   },
//   {
//     role: "Senior UI developer",
//     exp: "5-8 years",
//     location: "Trivandrum, india",
//     link: "#"
//   }
// ];
const values = [
  {
    serial: "01",
    title: "Growth",
    text:
      "Our vision is to grow together as an organization while working towards achieving individual and professional goals"
  },
  {
    serial: "02",
    title: "People",
    text:
      "We recognize that our team members are the cornerstone of our success, and it is our priority to reinvest in their development and support as a token of appreciation for their invaluable contributions."
  },
  {
    serial: "03",
    title: "Balance",
    text:
      "We place a high premium on life's delicate balance, actively promoting equilibrium among our team members as they navigate their professional and personal responsibilities."
  }
];
const rolesSection =ref(null)
function scrollToEl(el) {
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <div>
    <Loader v-if="cpending || dpending" ||ppending />
    <div v-else>
      <section class="flex flex-col gap-6 px-4 py-6 text-white bg-black md:min-h-screen">
        <div class="container flex flex-col items-center gap-2 mx-auto md:gap-5">
          <h1 class="text-2xl font-semibold md:text-6xl">  {{content.data.attributes.heading}}</h1>
          <p class="flex flex-col text-sm leading-6 text-center text-gray-200 md:text-xl max-w-[700px]">
            {{content.data.attributes.description}}
            <span>
             
            </span>
          </p>
        </div>
        <div class="container flex justify-center mx-auto">
          <ButtonGreen class="pt-4" @click.prevent="scrollToEl(rolesSection)">See open roles</ButtonGreen>
        </div>
        <div class="container justify-center hidden gap-4 mx-auto md:flex">
          <img class="rounded max-w-[360px] h-auto" :src="content.data.attributes.image_1.data.attributes.url" alt />
          <video class="rounded  object-cover h-[600px]" width="360" autoplay loop muted>
            <source :src="content.data.attributes.video.data.attributes.url" type="video/mp4" />Your browser does not support HTML video.
          </video>
          <img class="rounded max-w-[360px] h-auto" :src="content.data.attributes.image_2.data.attributes.url" alt />
        </div>
        <div class="flex md:hidden">
          <video class="rounded" autoplay loop muted>
            <source :src="content.data.attributes.video.data.attributes.url" type="video/mp4" />Your browser does not support HTML video.
          </video>
        </div>
      </section>
      <section class="flex flex-col py-6 md:p-0 md:gap-2 scroll-margin" ref="rolesSection">
        <div class="border-b border-gray-300">
          <div
            class="container flex items-center justify-between px-4 py-4 mx-auto md:py-10 md:px-0"
          >
            <h2 class="flex flex-col px-4 text-xl md:text-4xl">
              Explore the
              <span class="font-semibold">open positions</span>
            </h2>
            <!-- <div class="flex">
              <select
                class="flex px-4 bg-gray-100 rounded-lg h-[50px]"
                v-model="selectedDepartment"
                @change.prevent="filterCareersByDepartment"
              >
                <option value="null" selected disabled>Please select one</option>
                <option
                  v-for="(department, idx) in departments.data"
                  :key="idx"
                  :value="department.attributes.title"
                >{{department.attributes.title}}</option>
              </select>
            </div> -->
          </div>
        </div>
        <CareerOpenPositions
        :careers="careers"
        />
        <!-- <div class="flex flex-col w-full md:hidden">
          <CareerCard
          v-for="(career, idx) in careers.data" :key="idx"
            :role="career.attributes.position"
            :exp="career.attributes.experience"
            :location="career.attributes.location"
            :link="'/career/'+career.attributes.slug"
          />
        </div> -->
        <!-- <div class="container hidden mx-auto md:flex">
          <table class="w-full table-auto">
            <thead>
              <tr>
                <th class="text-xl font-normal text-left text-gray-500">Position</th>
                <th class="text-xl font-normal text-left text-gray-500">Department</th>
                <th class="text-xl font-normal text-left text-gray-500">Experience</th>
                <th class="text-xl font-normal text-left text-gray-500">Location</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr v-for="(career, idx) in careers.data" :key="idx">
                <td class="py-10 text-xl">{{ career.attributes.position }}</td>
                <td class="py-10 text-lg text-gray-600">{{ career.attributes.department.data.attributes.title }}</td>
                <td class="py-10 text-lg text-gray-600">{{ career.attributes.experience }}</td>
                <td class="py-10 text-lg text-gray-600">{{ career.attributes.location }}</td>
                <td class="py-10">
                  <NuxtLink :to="'/career/'+ career.attributes.slug">
                  <img src="/images/career/right-arrow-black.svg" alt />
                </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div> -->
      </section>

      <!-- <section class="py-6 text-white bg-black">
        <div class="container flex flex-col gap-4 mx-auto md:flex-row md:items-center">
          <div class="flex flex-col gap-2 px-4">
            <h2 class="text-xl font-semibold md:text-4xl">Our Values</h2>
            <p
              class="flex text-sm font-medium leading-5 md:text-xl"
            >At Valoriz, we place paramount importance on prominently showcasing our core values, ensuring they are visible and upheld across all platforms and interactions, without compromise.</p>
          </div>
          <div class="flex flex-col items-start px-4 md:gap-12 md:items-end">
            <CareerValues
              v-for="(value, idx) in values"
              :key="idx"
              :serial="value.serial"
              :title="value.title"
              :text="value.text"
            />
          </div>
        </div>
      </section> -->
    </div>
  </div>
</template>

<style scoped>
.scroll-margin{
  scroll-margin: 100px;
}
</style>