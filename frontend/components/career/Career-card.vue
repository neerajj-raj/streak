<script setup>
const props= defineProps(['role', 'exp', 'location', 'link'])
</script>

<template>
    <div class="flex justify-between gap-2 p-5 border-b border-gray-200 last:border-b-0 grow">
        <div class="flex flex-col gap-2">
            <h3 class="text-sm font-medium">{{ role }}</h3>
            <span class="text-xs font-medium text-gray-600">{{ exp }}</span>
            <span class="text-xs font-medium text-gray-600">{{ location }}</span>
        </div>
        <div class="flex items-center">
            <a :href="link">
                <img class="w-7 h-7" src="/images/career/right-arrow-green.svg" alt="">
            </a>
        </div>
    </div>
</template>