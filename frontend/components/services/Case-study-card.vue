<script setup>
const props = defineProps(["title", "img", "region", "services", "link"]);
</script>

<template>
  <div class="flex flex-col px-4 justify-between gap-4 pb-6 border rounded-b border-white/25">
    <img class="w-full h-auto" :src="img" alt />
    <div class="flex flex-col gap-4 px-4">
      <!-- <img class="max-w-fit" :src="logo" alt=""> -->
      <h2 class="text-lg font-semibold md:text-xl">{{ title }}</h2>
    </div>
    <div class="flex flex-col justify-between gap-4 px-4">
      <!-- <span class="text-sm font-normal">Region: {{ region }}</span> -->
      <!-- <span class="text-sm font-normal">Service type:</span> -->
      <div class="flex flex-wrap gap-3">
        <div
          class="flex flex-wrap px-4 py-2 text-xs font-normal whitespace-normal border rounded border-primary"
          v-for="(service, idx) in services"
          :key="idx"
        >{{ service.attributes.name }}</div>
        <!-- <div class="flex px-4 py-2 text-xs font-normal border rounded border-primary">UX CX services</div> -->
      </div>
      <NuxtLink :to="'/our-story/'+link" class="flex gap-2 text-xs font-semibold">
        Read More
        <img src="/images/home/right-arrow-white.svg" alt />
      </NuxtLink>
    </div>
  </div>
</template>