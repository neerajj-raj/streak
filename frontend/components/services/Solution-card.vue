<script setup>
const props = defineProps(["icon", "title", "text", "img", "order"]);
</script>

<template>
  <div class="md:py-20" :class="[order%2 === 0 ? 'bg-[#0D0D0D]': 'bg-inherit']">
    <div
      class="container grid grid-cols-1 gap-10 px-4 py-4 mx-auto place-content-center md:grid-cols-2"
    >
      <div :class="[order%2 === 0 ? 'md:order-2 md:items-end': 'md:order-1']" class="flex flex-col gap-6">
        <div class="flex flex-col gap-6">
        <img class="w-16 h-16" :src="icon" alt />
        <div class="flex flex-col gap-2 md:gap-6">
          <h3 class="text-base font-medium md:text-4xl">{{ title }}</h3>
          <!-- <p class="text-sm font-medium leading-5 md:leading-7 md:text-xl">{{ text }}</p> -->
          <ul class="pl-5 list-disc">
            <li v-for="(point, idx) in text.split(',')" :key="idx">
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div
        class="flex justify-center"
        :class="[order%2 === 0 ? 'md:order-1 md:justify-start': 'md:order-2 md:justify-end']"
      >
        <img :src="img" alt />
      </div>
    </div>
  </div>
</template>