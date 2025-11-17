<script setup>
const props = defineProps(['img', 'title', 'category', 'date', 'link'])
import moment from "moment"
</script>

<template>
    <div class="flex flex-col px-4 gap-4 md:gap-8 md:flex-row ">
        <div class="flex basis-1/2">
        <img class="flex w-full object-cover h-[150px] rounded " :src="img" alt="">
    </div>
        <div class="flex flex-col px-4 justify-center gap-3 border-gray-600 basis-1/3">
            <h3 class="text-base font-medium md:text-lg">{{ title }}</h3>
            <div class="flex items-center gap-2">
                <span class="text-xs font-medium md:text-sm">{{ category }}</span>
                <div class="w-1 h-1 rounded-full bg-primary"></div>
                <span class="text-xs font-normal md:text-sm" v-if="date">{{ moment(date).format('DD-MM-YYYY') }}</span>
            </div>
            <NuxtLink :to="'/blog/'+link" class="flex gap-2 text-xs font-semibold md:text-base">Read More <img src="/images/home/right-arrow-white.svg" alt=""></NuxtLink>
        </div>
    </div>
</template>