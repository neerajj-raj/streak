<script setup>
import {gsap} from "gsap";
const route = useRoute();
const menu = ref(false);
function toggleMenu() {
  menu.value = !menu.value;
}

let mm;
const main = ref();

// function homePageAnimation() {
//   mm.add(
//     "(min-width: 800px)",
//     () => {
//       gsap.from(".header-comp", {
//         yPercent: "-=300",
//         delay: 0.5,
//         duration: 4,
//         autoAlpha: 0
//       });
//     },
//     main.value
//   );
// }
// onMounted(() => {
//   mm = gsap.matchMedia();
//   if (route.path === "/") {
//     homePageAnimation();
//   }
// });
// onUnmounted(() => {
//   mm.revert();
// });
// watch(
//   () => route.path,
//   newPath => {
//     if (newPath === "/") {
//       homePageAnimation();
//     }
//   }
// );
</script>

<template>
  <header class="sticky top-0 z-30 bg-black md:pt-5">
    <nav
      class="container relative flex items-center justify-between p-4 mx-auto md:px-0  md:px-4 header-comp"
    >
      <div class="flex gap-3 p-2 rounded cursor-pointer bg-white/10" @click.prevent="toggleMenu">
        <img class="menu-icon" src="/images/menu-ico.svg" alt />
        <span class="hidden text-sm font-medium text-white md:flex">Explore</span>
      </div>
      <div class="flex justify-center absolute left-[50%] translate-x-[-50%]">
        <NuxtLink to="/" class="cursor-pointer">
          <img class="max-h-5 md:max-h-[35px] cursor-pointer" src="/images/valoriz-logo.svg" alt />
        </NuxtLink>
      </div>
      <NuxtLink
        to="/contact-us"
        class="z-30 flex items-center justify-center gap-3 p-2 text-white rounded cursor-pointer bg-white/10"
      >
        <img src="/images/get-in-touch-ico.svg" alt />
        <span class="hidden text-sm font-medium md:flex">Get in touch</span>
      </NuxtLink>
    </nav>
    <Menu :menu="menu" @close-menu="toggleMenu" />
  </header>
</template>

<style scoped>
.menu-icon {
  color: green;
}
</style>