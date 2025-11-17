<script setup>
  const props = defineProps(['label', 'link'])
</script>

<template>
    <div class="z-20 flex w-fit px-4 py-[6px] md:px-5 md:py-2 rounded items-center gap-3 bg-gradient-to-r from-[#229E71]/20 to-[#00E0FF33]/20 border-b-2 border-primary max-w-[80%]  md:max-w-[40%]">
        <span class="text-xs font-normal text-white md:text-sm">{{ label }}</span>
        <NuxtLink :to="link" class="flex items-center gap-1 text-xs font-medium md:text-sm text-primary" target="_blank">Read more <img src="/images/link-arrow-ico.svg" alt=""></NuxtLink>
    </div>
</template>