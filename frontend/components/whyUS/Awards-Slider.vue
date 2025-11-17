<script setup>
const settings = {
  itemsToShow: 2,
  snapAlign: "center"
};
const breakpoints = {
  768: {
    itemsToShow: 3,
    snapAlign: "center"
  }
};
</script>
<template>
  <carousel :autoplay="1000" :wrap-around="true" v-bind="settings" :breakpoints="breakpoints">
    <slide :key="1">
      <img src="/images/awards/award-1.png" alt />
    </slide>
    <slide :key="2">
      <img src="/images/awards/award-2.png" alt />
    </slide>
    <slide :key="3">
      <img src="/images/awards/award-3.png" alt />
    </slide>
    <slide :key="4">
      <img src="/images/awards/award-4.png" alt />
    </slide>
    <slide :key="5">
      <img src="/images/awards/award-5.png" alt />
    </slide>
    <slide :key="6">
      <img src="/images/awards/award-6.png" alt />
    </slide>
  </carousel>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  :deep(.carousel__slide) {
    padding: 5px;
  }
}
</style>