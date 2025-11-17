<script setup></script>
<template>
  <div class="w-full">
    <carousel :items-to-show="1" :autoplay="1000" :wrap-around="true">
      <slide v-for="slide in 5" :key="slide">
        <AboutTeamMember />
      </slide>
      <template #addons>
        <Pagination />
      </template>
    </carousel>
  </div>
</template>
<style scoped>
/* :deep(.carousel__slide) {
  padding: 5px;
} */
:deep(.carousel__pagination-button::after) {
  background-color: #d9d9d9;
  border-radius: 50%;
  width: 6px;
  height: 6px;
}
:deep(.carousel__pagination-button:hover::after) {
  background-color: #229E79;
}
:deep(.carousel__pagination-button:active::after) {
  width: 40px;
  border-radius: 5px;
}
:deep(.carousel__pagination-button--active::after) {
  background-color: #229E79;
  width: 40px;
  border-radius: 5px;
  transition: width 1s;
  transition-timing-function: ease-in-out;
}
</style>