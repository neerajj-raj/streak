<script setup>
const props = defineProps(["careers"]);

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
</script>

<template>
  <section class="flex flex-col py-6 md:p-0 md:gap-14">
    <!-- <div class="border-b border-gray-300">
        <div class="container flex justify-between px-4 py-4 mx-auto md:py-10 md:px-0">
          <h2 class="flex flex-col text-xl md:text-4xl">
            Explore the
            <span class="font-semibold">open positions</span>
          </h2>
          <div class="flex">
            <select class="block">
              <option disabled value>Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
        </div>
    </div>-->

    <div class="flex flex-col px-4 w-full md:hidden">
      <div class="flex justify-center py-5 text-gray-500" v-if="careers.data.length === 0">
        <span class="text-sm">No opening for now. please come back later.</span>
      </div>
      <CareerCard
        v-for="(career, idx) in careers.data"
        :key="idx"
        :role="career.attributes.position"
        :exp="career.attributes.experience"
        :location="career.attributes.location"
        :link="'/career/'+career.attributes.slug"
      />
    </div>
    <div class="container px-4 hidden mx-auto md:flex md:flex-col">
      <div class="flex justify-center py-5 text-gray-500" v-if="careers.data.length === 0">
        <span>Stay tuned! We will be hiring soon..</span>
      </div>
      <table class="w-full table-auto" v-else>
        <thead>
          <tr>
            <th class="py-10 text-xl font-normal text-left text-gray-500">Position</th>
            <th class="text-xl font-normal text-left text-gray-500">Department</th>
            <th class="text-xl font-normal text-left text-gray-500">Experience</th>
            <th class="text-xl font-normal text-left text-gray-500">Location</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="(career, idx) in careers.data" :key="idx">
            <td class="py-10 text-xl">{{ career.attributes.position }}</td>
            <td
              class="py-10 text-lg text-gray-600"
            >{{ career.attributes.department.data.attributes.title }}</td>
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
  
    </div>
  </section>
</template>