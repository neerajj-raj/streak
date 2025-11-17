<script setup>
const podcasts = [
  {
    img: "/images/podcast/podcast1.png",
    title: "The hidden messages of Jack nielson",
    date: "17 January, 2024",
    link: "#"
  },
  {
    img: "/images/podcast/podcast2.png",
    title: "The hidden messages of Jack nielson",
    date: "17 January, 2024",
    link: "#"
  },
  {
    img: "/images/podcast/podcast3.png",
    title: "The hidden messages of Jack nielson",
    date: "17 January, 2024",
    link: "#"
  }
];
</script>
<template>
  <div>
    <section class="flex flex-col px-3 py-6 text-white bg-black">
      <div class="container flex justify-center mx-auto">
        <h1 class="flex text-2xl font-semibold text-center md:text-6xl md:flex-col">
          We Craft
          <span class="text-gray-400">Words as Well</span>
        </h1>
      </div>
      <div class="container flex gap-5 p-4 mx-auto border-b-0 border-gray-700 md:pb-6 md:px-0 md:border-b md:mb-5">
        <button
          class="flex items-center justify-center gap-3 px-4 py-3 text-sm font-medium border rounded md:flex-grow-0 grow min-h-10 border-primary bg-primary/25"
        >
          <img src="/images/home/blog-ico.svg" alt />
          Blog
        </button>
        <button
          class="flex items-center justify-center gap-3 px-4 py-3 rounded md:flex-grow-0 grow min-h-10 bg-white/20"
        >
          <img src="/images/home/podcast-ico.svg" alt />
          Podcast
        </button>
      </div>
      <div class="container flex flex-col gap-6 mx-auto">
        <PodcastCard
          v-for="(podcast, idx) in podcasts"
          :key="idx"
          :img="podcast.img"
          :title="podcast.title"
          :date="podcast.date"
          :link="podcast.link"
        />
      </div>
    </section>
  </div>
</template>