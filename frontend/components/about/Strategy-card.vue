<script setup>
const props = defineProps(['img', 'title', 'text'])
</script>

<template>
  <div class="flex flex-col gap-3 md:gap-12 md:justify-between p-4 md:px-8 md:py-10 odd:bg-white even:bg-[#F6F6F6]">
    <img class="w-16 h-16 md:w-24 md:h-24" :src="img" alt />
    <div class="flex flex-col gap-2">
      <h3 class="text-base font-semibold md:text-2xl">{{title}}</h3>
      <!-- <p
        class="text-sm font-medium leading-5 text-gray-600"
      >{{ text }}</p> -->
    </div>
  </div>
</template>