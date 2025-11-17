<script setup>
import { SFacebook, STwitter, SLinkedIn } from "vue-socials";
import moment from 'moment'

const route = useRoute();
const config = useRuntimeConfig();
const { data: content, pending } = await useFetch(
  `${config.public.API_BASE_URL}/api/blog-posts?filters[slug][$eq]=${route.params.slug}&populate=*`,
  {
    method: "get",
    server: false,
    onResponse({ request, response, options }) {
      useHead({
          meta: [
            { name: 'title', content: response._data.data[0].attributes?.seo_section?.title || '' },
            { name: 'description', content: response._data.data[0].attributes?.seo_section?.description || '' },
            { name: 'keywords', content: response._data.data[0].attributes?.seo_section?.keywords || '' }
          ],
        })
      }
    
  }
);
const fbShareOptions = {
  url: "https://github.com/",
  quote: "Quote",
  hashtag: "#Github"
};
const twitterShareOptions = {
  url: "https://github.com/",
  text: "Hello world",
  hashtags: ["hash", "tag"],
  via: "twitterdev"
};
const linkedshareOptions = {
  url: "https://github.com/"
};
const useNativeBehavior = false;
</script>

<template>
  <div class="flex flex-col py-5 text-white bg-black md:gap-10">
    <Loader v-if="pending" />
    <div v-else>
      <div
        class="flex gap-1 px-4 pt-6 pb-4 text-[#7D8995] items-center text-xs border-b border-gray-700 container mx-auto md:text-sm"
      >
        <NuxtLink to="/">
          <img class="w-4 h-4" src="/images/home-ico.svg" alt />
        </NuxtLink>
        <span>/</span>
        <span>
          <NuxtLink to="/blogs-podcast">Blogs</NuxtLink>
        </span>
        <span>/</span>
        <span class="text-white">{{ content.data[0].attributes.title.substring(0,30)+".." }}</span>
      </div>
      <div class="container flex flex-col gap-5 mx-auto md:gap-10">
        <div class="flex flex-col gap-4 px-4 pt-5">
          <h1
            class="text-2xl text-center md:text-6xl md:max-w-[75%] mx-auto font-semibold"
          >{{ content.data[0].attributes.title }}</h1>
          <div class="flex justify-between">
            <div class="flex items-center gap-2">
              <span class="text-xs font-medium md:text-sm" v-if="content && content.data && content.data[0] && content.data[0].attributes && content.data[0].attributes.date">{{ moment(content?.data[0]?.attributes?.date).format('DD-MM-YYYY') }}</span>
              <div class="w-1 h-1 rounded-full bg-primary"></div>
              <span class="text-xs font-medium md:text-sm">{{ content.data[0].attributes.blog_category.data.attributes.name }}</span>
            </div>
            <!-- <span class="flex gap-2 text-xs font-medium md:text-sm">
            <img src="/images/blog/share-ico.svg" alt /> Share
            </span>-->
            <div class="flex justify-center gap-4">
              <s-facebook :share-options="fbShareOptions" :use-native-behavior="useNativeBehavior">
                <img class="w-4 h-4" src="/images/fb.svg" alt />
              </s-facebook>
              <s-twitter
                :share-options="twitterShareOptions"
                :use-native-behavior="useNativeBehavior"
              >
                <img class="w-4 h-4" src="/images/twitter.svg" alt />
              </s-twitter>
              <s-linked-in
                :share-options="linkedshareOptions"
                :use-native-behavior="useNativeBehavior"
              >
                <img class="w-4 h-4" src="/images/linkin.svg" alt />
              </s-linked-in>

              <!-- <img class="w-4 h-4" src="/images/link.svg" alt /> -->
            </div>
          </div>
        </div>
        <div class="flex flex-col px-4">
          <img :src="content.data[0].attributes.image.data.attributes.url" alt />
        </div>
        <!-- <div
          class="flex flex-col gap-5 md:gap-10 px-8 md:max-w-[75%] mx-auto md:text-lg md:leading-7 font-normal"
        >
          <p>
            Every year, we have a line up of new design trends that not only look good, but also stick around and influence other designers to “steal” the trend. Love it or hate it, there are actually some design waves that are smart and functional. These functions could range from including more information in less space, to build more engagement with the users.
            Let’s have a look at some of these trends that are here to stay and are taking over the internet!
          </p>
          <h2
            class="text-base font-semibold md:text-2xl"
          >More than a child’s lunch box — bento boxes</h2>
          <p>Bento boxes are a staple in japan’s culture of tiffins and lunch boxes. They are well known for storing food in a rather organised format and keeping things clean.</p>
          <img src="/images/blog/single-blog2.png" alt />
          <p>
            We’ll never know who thought about this, however bento boxes are as great digitally on a screen as they are filled with food in a bag.
            Bento is another design trend that started making waves on platforms like dribbble and behance for millions of designers to pick up on, however the concept of “modular” design started with dashboards for websites. This includes sales and finance dashboards like payPal, analytics like google ads, and a bunch more.
            Remember windows phone and lumia? Well, the UI they used was essentially early iterations of bento designs. Later, microsoft also implemented this concept to their windows desktop start menu with windows 8.
          </p>
        </div>-->
        <div class="max-w-[75%] mx-auto px-4 flex flex-col gap-6">
          <div
            class="flex flex-col"
            v-for="(content, idx) in content.data[0].attributes.content"
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
              <!-- <img :src="l.children[0].text" alt=""/> -->
              <li v-for="(l, inx) in content.children" :key="inx">{{ l.children[0].text }}</li>
            </ul>
            <div v-else v-for="(p, indx) in content.children" :key="indx">
              <span v-html="p.text" class="flex flex-col gap-4 text-sm font-medium md:text-lg"></span>
            </div>
          </div>
        </div>
        <div class="justify-center hidden w-full md:flex md:mt-16">
          <BlogRecentBlogs />
        </div>
      </div>
    </div>
  </div>
</template>