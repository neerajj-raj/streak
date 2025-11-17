<script setup>
const props = defineProps(["img", "title", "date", "link"]);
</script>

<template>
  <div class="flex flex-grow gap-3 pb-6 border-b border-gray-700 md:gap-16 last:border-b-0">
    <img class="rounded" :src="img" alt />
    <div class="flex flex-col items-start justify-between flex-grow gap-3 md:items-center md:flex-row">
      <div class="flex flex-col gap-3">
        <h3 class="text-base font-medium md:text-4xl">{{ title }}</h3>
        <div class="flex items-center gap-2">
          <span class="pr-2 text-xs border-r border-gray-700 md:text-sm">{{ date }}</span>
          <img class="w-auto h-6 md:h-4" src="/images/podcast/spotify-ico.svg" alt />
        </div>
      </div>
      <a class="flex items-center gap-1" href="#">
        <span class="text-xs md:text-2xl">Listen</span>
        <img src="/images/podcast/right-arrow-ico.svg" alt />
      </a>
    </div>
  </div>
</template>