<script setup>
const config = useRuntimeConfig();
const { pending, data: policy } = await useFetch(
  `${config.public.API_BASE_URL}/api/privacy-policy`,
  {
    method: "get",
    server: false
  }
);
</script>

<template>
  <div class="py-20 text-white bg-black">
    <Loader v-if="pending" />

    <div class="max-w-[75%] mx-auto px-4 flex flex-col gap-6" v-else>
      <div
        class="flex flex-col"
        v-for="(content, idx) in policy.data.attributes.content"
        :key="idx"
      >
        <div v-if="content.type === 'image'" class="w-full h-fit">
          <img class="w-full h-auto" :src="content.image.url" alt />
        </div>
        <h2
          class="text-base font-semibold md:text-2xl"
          v-else-if="content.type === 'heading'"
        >{{ content.children[0].text }}</h2>
        <ul class="flex flex-col gap-2 pl-6 list-disc" v-else-if="content.type === 'list'">
          <li v-for="(l, inx) in content.children" :key="inx">{{ l.children[0].text }}</li>
        </ul>
        <div class="flex flex-wrap items-center gap-1" v-else>
          <div v-for="(p, indx) in content.children" :key="indx">
            <a
              class="text-sm font-medium text-primary md:text-lg"
              :href="p.url"
              v-if="p.type==='link'"
              target="_blank"
            >{{ p.children[0].text }}</a>
            <span
              v-html="p.text"
              v-if="p.type==='text'"
              class="flex flex-col gap-4 text-sm font-medium md:text-lg"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>