<script setup>
const activities = [
    {
        title:'Aradhana Eye Hospital, Trivandrum',
        img:'/images/csr/aradhana.jpg',
        content:'At Valoriz, we are deeply committed to making a positive impact beyond business and giving back to the community. Over the past two years, we have proudly partnered with Aradhana Eye Hospital, Trivandrum, in our pursuit of corporate social responsibility. In both 2022 and 2023, our contributions have facilitated cataract surgeries for numerous patients in need. These initiatives have enabled us to extend our support to individuals struggling with visual impairments, empowering them to regain their independence and improve their quality of life. Our unwavering dedication to corporate social responsibility fuels our quest to continuously identify and seize opportunities to create a meaningful difference in the lives of the individuals and communities we are privileged to serve.'
    },
    {
        title:'Pratyasha Cancer Children\'s Welfare Society, Trivandrum',
        img:'/images/csr/csr2.png',
        content:'As part of our ongoing commitment to social responsibility, we are proud to reflect on our recent collaborations with Pratyasha Cancer Children\'s Welfare Society, Trivandrum. In 2022, we provided vital funding to support the food and accommodation needs of child cancer patients under their care. Through this initiative, we were able to offer essential support to numerous young cancer patients and their families during challenging times. Our dedication to corporate social responsibility extends beyond business, as we strive to make a positive impact on the lives of those in need. We remain steadfast in our commitment to fostering a brighter future for our communities and look forward to continuing our efforts in the years to come'
    },
    {
        title:'Theruvoram NGO',
        img:'/images/csr/theruvoram.jpg',
        content:'At Valoriz, we believe in making a tangible difference in the lives of those in need. In 2023, Valoriz proudly collaborated with Theruvoram NGO, providing essential funding to support their rescue mission for street dwellers. Through this initiative, we were able to extend a helping hand to numerous individuals living on the streets, providing them with access to shelter homes and a chance for a new life. Our commitment to corporate social responsibility drives us to actively seek opportunities to make a meaningful impact in our communities. We are honored to have been a part of this transformative journey and look forward to continuing our efforts to create positive change in our communities.'
    }
]
</script>

<template>
  <section class="flex flex-col  gap-4 pb-6 md:pb-10 md:gap-10">
    <div class="flex justify-between py-6 px-4 border-b border-gray-300 md:py-10">
      <div class="container flex flex-col items-start justify-between px-4 mx-auto md:items-center md:flex-row md: md:px-0 md:p-0">
        <h2 class="flex items-center text-xl font-semibold md:text-3xl basis-1/2">CSR @ Valoriz</h2>
        <p
          class="flex text-base md:text-2xl basis-1/2"
        >We are committed to creating sustainable opportunities and solutions for the community, economy, environment, and society through our CSR engagements.</p>
      </div>
    </div>
    <carousel :items-to-show="1" :autoplay="4000" :wrap-around="true">
      <slide v-for="(activity, idx) in activities" :key="idx">
        <div class="container flex flex-col gap-4 px-4 mx-auto md:px-0 md:flex-row">
          <div class="flex justify-center order-1 md:justify-end md:order-2 basis-1/2">
            <img class="object-fill rounded-xl" :src="activity.img" alt />
          </div>
          <div class="flex flex-col px-4 justify-center order-2 gap-2 text-left md:gap-5 md:order-1 basis-1/2">
            <h2 class="text-xl font-semibold md:text-3xl">{{ activity.title  }}</h2>
            <!-- <span>March 2024</span> -->
            <p
              class="text-sm font-normal leading-6 text-gray-600 md:text-lg"
            >{{ activity.content }}</p>
          </div>
        </div>
      </slide>
      <template #addons>
        <div class="mt-4 md:mt-10">
          <Pagination />
          <!-- <navigation/> -->
        </div>
      </template>
    </carousel>
  </section>
</template>
<style scoped>
:deep(.carousel__pagination-button::after) {
  background-color: #fff;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  outline: #4caf50 solid 1px;
  outline-offset: 3px;
  margin: 0 5px;
}
:deep(.carousel__pagination-button:hover::after) {
  background-color: #229e79;
}
/* :deep(.carousel__pagination-button:active::after) {
  width: 40px;
  border-radius: 5px;
} */
:deep(.carousel__pagination-button--active::after) {
  background-color: #229e79;
  /* width: 40px; */
  /* border-radius: 5px; */
}
@media only screen and (max-width: 600px) {
  :deep(.carousel__pagination-button::after) {
    width: 7px;
    height: 7px;
    outline-offset: 1px;
  }
}
</style>