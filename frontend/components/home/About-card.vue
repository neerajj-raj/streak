<script setup>
const props = defineProps(["img", "title", "count", "text"]);
</script>
<template>
  <div class="flex flex-col gap-4 px-4 py-8 md:py-10 lg:px-12 border border-[#E4E4E7] rounded">
    <div class="flex items-center gap-4">
      <img class="w-20 h-20 md:w-24 md:h-24" :src="img" alt />
      <div class="flex flex-col md:gap-2">
        <span
            class="text-3xl md:text-[48px] font-semibold drop-shadow-xl text-primary custom-text-shadow"
          >{{ count }}</span>
        <h3 class="text-base font-medium">{{ title }}</h3>
      </div>
    </div>
    <div class="flex">
        <p class="text-sm font-normal leading-normal text-gray-600 md:leading-5">{{ text }}</p>
    </div>
  </div>
</template>
<style scoped>
.custom-text-shadow {
  text-shadow: 2px 2px #fff, 3px 3px #1db100;
}
</style>