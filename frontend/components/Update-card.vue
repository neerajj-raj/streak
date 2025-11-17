<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <div class="flex flex-col gap-2 p-2 bg-[#F7FDFC] rounded">
    <!-- <div class="flex justify-between">
      <span class="text-sm">{{ date }}</span>
      <img class="w-3 h-3" src="/images/close-ico.svg" alt />
    </div>-->
    <div class="flex items-center gap-3">
      <!-- <img class="rounded w-14 h-14" v-if="text" :src="img" alt />
      <img class="w-full rounded" :src="img" v-else alt />-->
      <img src="/images/right-arrow-ico.svg" alt="Arrow icon" />
      <span class="text-sm font-medium leading-6" v-if="text">{{ text }}</span>
    </div>
  </div>
</template>