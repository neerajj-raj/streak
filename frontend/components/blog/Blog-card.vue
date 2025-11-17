<script setup>
const props = defineProps(['img', 'title', 'category', 'date', 'link'])
import moment from 'moment'

</script>

<template>
    <div class="flex flex-col gap-4 md:gap-12 md:flex-row md:flex-grow md:justify-between">
        <img class="rounded md:order-2 w-[450px] h-[260px] object-cover" :src="img" alt="">
        <div class="flex flex-col justify-center gap-3 border-bborder-gray-600">
            <h3 class="text-base font-medium md:text-4xl">{{ title }}</h3>
            <div class="flex items-center gap-2">
                <span class="text-xs font-medium md:text-sm">{{ category }}</span>
                <div class="w-1 h-1 rounded-full bg-primary"></div>
                <span class="text-xs font-normal md:text-sm"  v-if="date">{{ moment(date).format('DD-MM-YYYY') }}</span>
            </div>
            <NuxtLink :to="'/blog/'+link" class="flex gap-2 text-xs font-semibold">Read More <img src="/images/home/right-arrow-white.svg" alt=""></NuxtLink>
        </div>
    </div>
</template>