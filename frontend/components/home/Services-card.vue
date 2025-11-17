<script setup>
const props = defineProps(['img', 'title'])
</script>
<template>
  <div class="flex flex-col px-4 justify-between gap-5 p-4 md:p-10 bg-[#0D0D0D]">
    <img class="w-16 h-16 md:w-24 md:h-24" :src="img" alt />
    <div class="flex flex-col gap-2">
      <h3 class="text-base font-semibold md:text-2xl whitespace-nowrap md:whitespace-break-spaces">{{ title }}</h3>
      <!-- <p class="text-sm font-medium text-gray-300">{{ text }}</p> -->
    </div>
  </div>
</template>