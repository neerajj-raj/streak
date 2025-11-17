<script setup>
import { SFacebook, STwitter, SLinkedIn } from "vue-socials";
const route = useRoute();
const config = useRuntimeConfig();
const { data: content, pending } = await useFetch(
  `${config.public.API_BASE_URL}/api/case-studies?filters[slug][$eq]=${route.params.slug}&populate=*`,
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
function onClose() {}
function onOpen() {}
function onBlock() {}
function onFocus() {}
</script>

<template>
  <div>
    <Loader v-if="pending" />
    <div class="py-5 text-white bg-black" v-else>
      <div
        class="flex gap-1 px-4 pt-6 pb-4 md:pb-6 md:px-0 text-[#7D8995] items-center text-xs md:text-sm border-b border-gray-700 container mx-auto"
      >
        <NuxtLink to="/">
          <img class="w-4 h-4" src="/images/home-ico.svg" alt />
        </NuxtLink>
        <span>/</span>
        <span>
          <NuxtLink to="/our-stories">Our stories</NuxtLink>
        </span>
        <span>/</span>
        <span class="text-white">{{ content.data[0].attributes.title }}</span>
      </div>
      <div class="container flex flex-col justify-center gap-5 px-4 py-6 mx-auto md:gap-10 md:px-0">
        <!-- <img
          class="mx-auto max-w-fit"
          :src="content.data[0].attributes.logo.data.attributes.url"
          alt
        />-->
        <h1
          class="text-2xl text-center md:text-6xl md:max-w-[75%] mx-auto font-semibold"
        >{{ content.data[0].attributes.title }}</h1>
        <p
          class="text-sm font-medium text-center md:text-xl"
        >{{content.data[0].attributes.short_description }}</p>
        <img class="w-full h-auto" :src="content.data[0].attributes.image.data.attributes.url" alt />
        <div class="flex flex-col gap-6 md:relative">
          <div class="flex flex-col justify-center flex-grow gap-4 md:flex-row">
            <!-- <div class="flex flex-col md:pl-[10%] flex-grow gap-4 md:gap-8">
              <div class="flex flex-row items-center gap-3 text-sm font-semibold md:flex-col">
                Customer:
                <span class="text-lg font-normal">{{ content.data[0].attributes.title }}</span>
              </div>
              <div class="flex flex-row items-center gap-3 text-sm font-semibold md:flex-col">
                Region:
                <span class="text-lg font-normal">India</span>
              </div>
            </div>-->
            <div class="flex flex-col flex-grow gap-8 px-4 max-w-[75%]">
              <div class="flex flex-col gap-3">
                <div class="text-sm font-semibold md:text-lg">Service type</div>
                <div class="flex flex-wrap gap-3">
                  <ServicePill
                    v-for="(service, idx) in content.data[0].attributes.service_types.data"
                    :key="idx"
                  >{{ service.attributes.name }}</ServicePill>
                </div>
              </div>
              <div class="flex flex-col gap-3">
                <h4 class="text-sm font-semibold md:text-lg">Technologies</h4>
                <div class="flex flex-wrap gap-3">
                  <ServicePill
                    v-for="(service, idx) in content.data[0].attributes.technologies.data"
                    :key="idx"
                  >{{ service.attributes.name }}</ServicePill>
                </div>
              </div>
            </div>
          </div>
          <div class="container mx-auto md:max-w-[75%] px-4 flex flex-col gap-6">
            <div
              class="flex flex-col gap-4"
              v-for="(content,idx) in content.data[0].attributes.content"
              :key="idx"
            >
              <div v-if="content.type === 'image'">
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
                <span class="flex flex-col gap-4 text-sm font-medium md:text-lg" v-html="p.text"></span>
              </div>
              <!-- <h3 class="text-base font-semibold md:text-2xl">ACE Digital strategy</h3>
              <p class="text-sm font-normal leading-5 md:text-lg">
                Every year, we have a line up of new design trends that not only look good, but also stick around and influence other designers to “steal” the trend. Love it or hate it, there are actually some design waves that are smart and functional. These functions could range from including more information in less space, to build more engagement with the users.
                Let’s have a look at some of these trends that are here to stay and are taking over the internet!
                Every year, we have a line up of new design trends that not only look good, but also stick around and influence other designers to “steal” the trend. Love it or hate it, there are actually some design waves that are smart and functional. These functions could range from including more information in less space, to build more engagement with the users.
                Let’s have a look at some of these trends that are here to stay and are taking over the internet!
              </p>
              <img src="/images/case-study/mock1.png" alt />
              <p class="text-sm font-medium md:text-lg">
                We’ll never know who thought about this, however bento boxes are as great digitally on a screen as they are filled with food in a bag.
                Bento is another design trend that started making waves on platforms like Dribbble and Behance for millions of designers to pick up on, however the concept of “modular” design started with dashboards for websites. This includes sales and finance dashboards like PayPal, analytics like Google Ads, and a bunch more.
                Remember Windows phone and Lumia? Well, the UI they used was essentially early iterations of Bento designs. Later, Microsoft also implemented this concept to their Windows desktop start menu with Windows 8.
              </p>
              <img src="/images/case-study/mock2.png" alt />-->
            </div>
          </div>
          <div
            class="flex flex-col justify-center items-center gap-3 md:absolute md:left-[5%] md:top-[10%]"
          >
            <span class="text-sm font-normal text-center underline underline-offset-4">Share</span>
            <div class="flex justify-center gap-4 md:flex-col">
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
      </div>
    </div>
  </div>
</template>