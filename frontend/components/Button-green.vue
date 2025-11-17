<script setup>
const props = defineProps(['showArrow'])
</script>

<template>
    <div>
        <button class="flex items-center gap-2 px-3 py-3 font-semibold text-white rounded md:py-5 md:px-10 bg-primary"><slot/>
            <img class="hidden md:flex" v-if="showArrow" src="/images/right-arrow-white.svg" alt />
        </button>
    </div>
</template>