<script setup>
const props = defineProps(['img','title','content','date','link'])
</script>
<template>
    <div class="flex flex-col gap-5">
        <img class="h-[240px] object-cover" :src="img" alt="">
        <div class="flex flex-col">
            <h3 class="text-xl font-medium">{{ title }}</h3>
            <p class="text-sm font-normal leading-7">{{ content }}</p>
        </div>
        <div class="flex justify-between">
            <span class="text-sm font-normal">{{ date }}</span>
            <NuxtLink :to="'/blog/'+link">
                <img src="/images/blog/right-arrow.svg" alt="">
            </NuxtLink>
        </div>
    </div>
</template>