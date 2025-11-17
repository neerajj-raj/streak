<script setup>
const props = defineProps(["serial", "title", "text"]);
</script>

<template>
  <div class="flex flex-col gap-4 py-6 border-b md:border-b-0 md:border-l border-[#727274] last:border-b-0 md:max-w-[50%] md:p-10">
    <span class="drop-shadow-xl text-[40px] md:text-[80px] font-semibold text-primary custom-text-shadow">{{ serial  }}</span>
    <h3 class="text-base font-medium md:text-2xl">{{ title }}</h3>
    <p
      class="text-sm font-normal leading-5 text-gray-300 md:text-xl"
    >{{ text }}</p>
  </div>
</template>
<style scoped>
.custom-text-shadow {
  text-shadow: 3px 3px #000, 3px 3px #229e79;
}
</style>