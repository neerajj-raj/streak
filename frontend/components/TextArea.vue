<script setup>
const props = defineProps( ['label','inputBg']);
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="text-xs text-gray-200 md:text-base">{{ label }}</label>
    <textarea class="p-2 text-sm font-medium border rounded md:text-2xl border-white/20 outline-0" rows="4" :class="[inputBg ? inputBg : 'bg-black']"></textarea>
  </div>
</template>