<script setup>
import { gsap } from "gsap";
import { ExpoScaleEase } from "gsap/EasePack";
gsap.registerPlugin(ExpoScaleEase);
const props = defineProps(["menu"]);
const config = useRuntimeConfig();

let mm;
const main = ref();
let tl;
function animation() {
  tl = gsap.timeline({ paused: true });
  tl.from(".menu-wrapper", {
    scale: 2,
    duration: 1,
    autoAlpha: 0,
    ease: "expoScale(2, 1)"
  });
  tl.from(".header-wrapper", {
    y: "-=100",
    // delay:0.5,
    autoAlpha: 0
  });
  tl.from(".links", {
    x: "-=100",
    // delay:0.5,
    autoAlpha: 0
  });
  // tl.from(".main-media", {
  //   y: "+=100",
  //   autoAlpha: 0
  // });
  tl.from(".updates-wrapper", {
    x: "+=100",
    // delay:0.5,
    autoAlpha: 0
  });
}

function hoverLinkAnimation() {
  let activeNavLinkIndex = 0;
  const medias = document.querySelectorAll(".menu-media");
  const navLinks = document.querySelectorAll(".menu-link");
  medias[activeNavLinkIndex].classList.add("active-media");
  navLinks.forEach((navLink, i) => {
    navLink.addEventListener("mouseover", () => {
      navLinks.forEach((link, index) => {
        if (index !== i) {
          medias[index].classList.remove("active-media");
        }
      });
      if (i !== activeNavLinkIndex) {
        activeNavLinkIndex = i;
        medias[i].classList.add("active-media");
      }
    });
  });
}
function openMenu() {
  tl.play(0.8);
}
function closeMenu() {
  tl.reverse(0.8);
}
onMounted(() => {
  mm = gsap.matchMedia();
  animation();
  hoverLinkAnimation();
});
onUnmounted(() => {
  tl.revert();
});
watch(
  () => props.menu,
  menu => {
    if (menu) {
      openMenu();
    } else {
      closeMenu();
    }
  }
);
const { pending, data: updates } = await useFetch(
  `${config.public.API_BASE_URL}/api/latest-updates?populate=*`,
  {
    method: "get",
    server: false
  }
);
// const updates = [
//   {
//     date: "April 30th 2024",
//     img: "/images/mock/update-1.png",
//     text:
//       "Valoriz Digital rebranded from Mozanta, marking 9 years of transformative growth, emphasizing value elevation for clients and partners alike."
//   },
//   {
//     date: "Jun 20th, 2023",
//     img: "/images/mock/update-2.png",
//     text:
//       "Valoriz Digital officially signed up with MAGRABi to revolutionize the future of eye care."
//   },
//   {
//     date: "Jan 21st 2023",
//     img: "/images/mock/update-3.png",
//     text:
//       "The Valoriz team has earned KIBO Certification, highlighting our dedication to digital excellence and proactive industry engagement for fostering meaningful partnerships."
//   }

// ];
const emit = defineEmits(["closeMenu"]);
</script>

<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 z-30  px-4 invisible overflow-hidden text-black bg-white menu-wrapper"
  >
    <div
      class="container flex flex-col flex-grow w-full h-full gap-10 px-4 py-4 mx-auto md:px-0 md:py-20"
    >
      <div class="relative flex justify-between invisible header-wrapper">
        <div
          class="flex items-center px-2 py-2 rounded cursor-pointer md:px-4 md:py-2 md:gap-3 bg-black/10"
          @click.prevent="$emit('closeMenu')"
        >
          <img src="/images/close-ico.svg" alt />
          <span class="hidden text-sm font-medium md:flex">Close</span>
        </div>
        <div
          class="absolute flex justify-center flex-grow left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]"
        >
          <img class="max-h-5 md:max-h-[35px]" src="/images/logo-dark.svg" alt />
        </div>
        <NuxtLink
          @click.prevent="$emit('closeMenu')"
          to="/contact-us"
          class="flex px-2 py-2 rounded cursor-pointer md:px-3 md:py-2 bg-black/10"
        >
          <img src="/images/sms-ico.svg" alt />
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 gap-4 md:h-full md:items-center md:grid-cols-3">
        <div
          class="flex flex-col justify-center flex-grow order-2 invisible gap-4 text-xl font-medium md:order-1 md:gap-8 links"
        >
          <NuxtLink
            @click.prevent="$emit('closeMenu')"
            class="hover:text-primary hover:underline underline-offset-4 menu-link"
            active-class="underline text-primary underline-offset-4"
            to="/"
          >Home</NuxtLink>
          <NuxtLink
            @click.prevent="$emit('closeMenu')"
            class="hover:text-primary hover:underline underline-offset-4 menu-link"
            active-class="underline text-primary underline-offset-4"
            to="/services"
          >Our services</NuxtLink>
          <NuxtLink
            @click.prevent="$emit('closeMenu')"
            class="hover:text-primary hover:underline underline-offset-4 menu-link"
            active-class="underline text-primary underline-offset-4"
            to="/careers"
          >Careers</NuxtLink>
          <NuxtLink
            @click.prevent="$emit('closeMenu')"
            class="hover:text-primary hover:underline underline-offset-4 menu-link"
            active-class="underline text-primary underline-offset-4"
            to="/about"
          >About us</NuxtLink>
          <NuxtLink
            @click.prevent="$emit('closeMenu')"
            class="hover:text-primary hover:underline underline-offset-4 menu-link"
            active-class="underline text-primary underline-offset-4"
            to="/our-stories"
          >Our stories</NuxtLink>
          <!-- <NuxtLink
            @click.prevent="$emit('closeMenu')"
            class="hover:text-primary hover:underline underline-offset-4 menu-link"
            active-class="underline text-primary underline-offset-4"
            to="/why-choose-us"
          >Why choose us</NuxtLink>-->
          <NuxtLink
            @click.prevent="$emit('closeMenu')"
            class="hover:text-primary hover:underline underline-offset-4 menu-link"
            active-class="underline text-primary underline-offset-4"
            to="/blogs-podcast"
          >Blogs and media</NuxtLink>
        </div>

        <div
          class="relative items-center order-1 hidden h-full max-h-full overflow-hidden rounded md:flex md:order-2 main-media"
        >
          <img
            class="absolute inset-0 top-0 bottom-0 left-0 right-0 w-full h-full transition-all bg-black menu-media"
            src="/images/logo-vector.svg"
            alt
          />

          <!-- <video class="object-cover w-full h-auto" height="480" width="360" muted autoplay loop>
              <source src="/videos/about-menu.mp4" type="video/mp4" />Your browser does not support HTML video.
          </video>-->
          <video
            class="absolute inset-0 top-0 bottom-0 left-0 right-0 object-cover w-full h-full transition-all opacity-0 menu-media"
            height="480"
            width="360"
            muted
            autoplay
            loop
          >
            <source src="/videos/serviceVertical.mp4" type="video/mp4" />Your browser does not support HTML video.
          </video>
          <video
            class="absolute inset-0 top-0 bottom-0 left-0 right-0 object-cover w-full h-full transition-all opacity-0 menu-media"
            height="480"
            width="360"
            muted
            autoplay
            loop
          >
            <source src="/videos/careersVertical.mp4" type="video/mp4" />Your browser does not support HTML video.
          </video>
          <video
            class="absolute inset-0 top-0 bottom-0 left-0 right-0 object-cover w-full h-full transition-all opacity-0 menu-media"
            height="480"
            width="360"
            muted
            autoplay
            loop
          >
            <source src="/videos/about_usVertical.mp4" type="video/mp4" />Your browser does not support HTML video.
          </video>
          <video
            class="absolute inset-0 top-0 bottom-0 left-0 right-0 object-cover w-full h-full transition-all opacity-0 menu-media"
            height="480"
            width="360"
            muted
            autoplay
            loop
          >
            <source src="/videos/storiesVertical.mp4" type="video/mp4" />Your browser does not support HTML video.
          </video>

          <!-- <video
            class="absolute inset-0 top-0 bottom-0 left-0 right-0 object-cover w-full h-full transition-all opacity-0 menu-media"
            height="480"
            width="360"
            muted
            autoplay
            loop
          >
            <source src="/videos/why-choose-us-menu.mp4" type="video/mp4" />Your browser does not support HTML video.
          </video>-->
          <video
            class="absolute inset-0 top-0 bottom-0 left-0 right-0 object-cover w-full h-full transition-all opacity-0 menu-media"
            height="480"
            width="360"
            muted
            autoplay
            loop
          >
            <source src="/videos/blogs-v3.mp4" type="video/mp4" />Your browser does not support HTML video.
          </video>
        </div>

        <div
          class="items-center justify-center order-3 hidden w-full md:flex md:invisible md:justify-end updates-wrapper"
        >
          <Loader v-if="pending" />
          <div class="flex flex-col gap-4 md:basis-3/4" v-else>
            <!-- <div class="justify-end hidden md:flex">
              <span class="text-lg font-medium text-gray-400">Latest Valoriz updates</span>
            </div>-->
            <div class="flex-col hidden gap-2 md:flex basis-1/2">
              <UpdateCard
                v-for="(update, idx) in updates.data"
                :key="idx"
                :text="update.attributes.content"
              />
            </div>
            <div class="block w-full md:hidden">
              <carousel :items-to-show="1" :autoplay="3000" :wrap-around="true">
                <slide v-for="(update, idx) in updates" :key="idx">
                  <UpdateCard :date="update.date" :img="update.img" :text="update.text" />
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
:deep(.carousel__slide) {
  padding: 5px;
}
/* .menu-wrapper{
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);
} */
.menu-media.active-media {
  opacity: 1;
}
</style>