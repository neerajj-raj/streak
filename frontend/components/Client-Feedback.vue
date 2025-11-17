<script setup></script>
<template>
  <carousel :items-to-show="1" :autoplay="2000" :wrap-around="true">
    <slide v-for="slide in 10" :key="slide">
      <div class="flex flex-col gap-6 md:flex-row">
        <div class="flex">
          <img
            class="hidden w-12 h-12 md:w-44 md:h-44 md:flex"
            src="/images/mock-user-avatar-big.png"
            alt
          />

          <div class="flex grow basis-1/12">
            <img class="w-4 h-4 md:w-11 md:h-11" src="/images/home/quotes-left.svg" alt />
          </div>
          <div class="flex flex-col justify-center gap-3 basis-10/12">
            <p class="text-xs font-medium text-left md:text-2xl">
              Valoriz's AI/ML expertise exceeded our expectations, ensuring flawless project delivery. Their solution
              transformed our operations, and we're thrilled with the results. Thank you, Valoriz!
            </p>
            <div class="flex-col self-start hidden text-left md:flex">
              <span class="text-lg font-semibold md:text-3xl">Alex Paul</span>
              <span class="text-sm font-medium text-gray-500 md:text-xl">Managing Director</span>
            </div>
          </div>
          <div class="flex items-end basis-1/12">
            <img class="w-4 h-4 md:w-11 md:h-11" src="/images/home/quotes-right.svg" alt />
          </div>
        </div>
        <div class="flex order-2 gap-3 px-6 text-left md:hidden md:order-1">
          <img class="w-12 h-12" src="/images/mock-user-avatar.png" alt />
          <div class="flex flex-col">
            <span class="text-lg font-semibold">Alex Paul</span>
            <span class="text-sm font-medium text-gray-500">Managing Director</span>
          </div>
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
</template>
<style scoped>
/* :deep(.carousel__slide) {
  padding: 5px;
} */

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