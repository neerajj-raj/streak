<script setup>
const config = useRuntimeConfig();
const route = useRoute();

const { pending, data: recentBlogs } = await useFetch(
  `${config.public.API_BASE_URL}/api/blog-posts?filters[slug][$ne]=${route.params.slug}&populate=*&pagination[limit]=3&sort[0]=createdAt:desc`,
  {
    method: "get",
    server: false
  }
);
// const recentBlogs = [
//   {
//     img: "/images/blog/blog1.png",
//     title: "Building effective design systems for the web",
//     content:
//       "The above example is from diagram.com, which uses bento grids to show real life examples of what its tool can do through an interactive experience. This makes the tool so much more appealing and tells the users what they should expect.",
//     date: "January 17,2024",
//     link: "/blogs"
//   },
//   {
//     img: "/images/blog/blog2.png",
//     title: "Building effective design systems for the web",
//     content:
//       "The above example is from diagram.com, which uses bento grids to show real life examples of what its tool can do through an interactive experience. This makes the tool so much more appealing and tells the users what they should expect.",
//     date: "January 17,2024",
//     link: "/blogs"
//   },
//   {
//     img: "/images/blog/blog3.png",
//     title: "Building effective design systems for the web",
//     content:
//       "The above example is from diagram.com, which uses bento grids to show real life examples of what its tool can do through an interactive experience. This makes the tool so much more appealing and tells the users what they should expect.",
//     date: "January 17,2024",
//     link: "/blogs"
//   }
// ];
</script>

<template>
  <div class="flex justify-center w-full">
    <Loader v-if="pending" />
    <div class="flex flex-col gap-10" v-else-if="!pending && recentBlogs.data.length > 0">
      <div class="flex justify-center">
        <h2 class="text-4xl font-semibold">Recent blogs</h2>
      </div>
      <div class="grid grid-cols-3 gap-7">
        <BlogCardSec
          v-for="(blog,index) in recentBlogs.data"
          :key="index"
          :img="blog.attributes.image.data.attributes.url"
          :title="blog.attributes.title"
          :content="blog.content"
          :date="blog.attributes.date"
          :link="blog.attributes.slug"
        />
      </div>
      <div class="flex justify-center mt-10">
        <NuxtLink to="/blogs-podcast">
          <button class="flex gap-3 px-4 py-2 rounded bg-white/10">
            More blogs
            <img src="/images/blog/right-arrow.svg" alt />
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>