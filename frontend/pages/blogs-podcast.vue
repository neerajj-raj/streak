<script setup>
const config = useRuntimeConfig();

const { pending, data } = await useFetch(
  `${config.public.API_BASE_URL}/api/blog-posts?populate=*&sort[0]=createdAt:desc`,
  {
    method: "get",
    server: false
  }
);
// const blogs = [
//   {
//     img: "/images/blog/blog1.png",
//     title: "Embracing the Future: Exploring the Concept of Future Factories",
//     category: "Technology",
//     date: "17 January, 2024",
//     link: ""
//   },
//   {
//     img: "/images/blog/blog2.png",
//     title: "Embracing the Future: Exploring the Concept of Future Factories",
//     category: "Technology",
//     date: "17 January, 2024",
//     link: ""
//   },
//   {
//     img: "/images/blog/blog3.png",
//     title: "Embracing the Future: Exploring the Concept of Future Factories",
//     category: "Technology",
//     date: "17 January, 2024",
//     link: ""
//   }
// ];

</script>
<template>
  <div>
    <Loader v-if="pending" />
    <section class="flex flex-col px-3 py-6 text-white bg-black" v-else>
      <div class="container flex justify-center mx-auto">
        <h1 class="flex flex-row gap-1 text-2xl font-semibold text-center md:text-6xl md:flex-col">
          Blogs and media
          <!-- <span class="text-gray-400">Words as Well</span> -->
        </h1>
      </div>
      <div
        class="container flex gap-5 p-4 mx-auto border-b-0 border-gray-700 md:pb-6 md:px-0 md:border-b md:mb-5"
      >
        <button
          class="flex items-center justify-center gap-3 px-4 py-3 text-sm font-medium border rounded md:flex-grow-0 grow min-h-10 border-primary bg-primary/25"
        >
          <img src="/images/home/blog-ico.svg" alt />
          Blogs
        </button>
        <!-- <button
          class="flex items-center justify-center gap-3 px-4 py-3 rounded grow md:flex-grow-0 min-h-10 bg-white/20"
        >
          <img src="/images/home/podcast-ico.svg" alt />
          Podcast
        </button>-->
      </div>
      <div class="container flex flex-col gap-5 px-4 mx-auto md:px-0">
        <div
          class="flex pb-6 border-b border-gray-700 last:border-b-0"
          v-for="(blog, idx) in data.data"
          :key="idx"
        >
          <BlogCard
            :img="blog.attributes.image.data.attributes.url"
            :title="blog.attributes.title"
            :category="blog.attributes.blog_category.data.attributes.name"
            :date="blog.attributes.date"
            :link="blog.attributes.slug"
          />
        </div>
      </div>
    </section>
  </div>
</template>