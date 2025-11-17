<script setup>
const props = defineProps(['title', 'links'])
</script>

<template>
    <div class="flex flex-col gap-2 md:gap-10 md:flex-row">
        <h3 class="text-sm font-semibold md:text-lg">{{ title }}</h3>
        <ul class="flex flex-col gap-2 md:gap-12 md:flex-row">
          <li class="text-sm font-light md:text-lg" v-for="(link,idx) in links" :key="idx">{{ link }}</li>
          
        </ul>
      </div>
</template>