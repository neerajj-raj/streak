<script setup></script>

<template>
  <div class="text-white bg-black">
    <section class="flex flex-col gap-6 px-4 py-6 md:gap-16">
      <div class="container flex flex-col gap-3 mx-auto md:gap-5">
        <h1 class="text-2xl font-semibold text-center md:text-6xl">Why you choose us</h1>
        <p class="flex flex-col text-sm font-normal text-center md:text-xl">
          We're not content with the red ocean; we're pioneers in the blue ocean of possibilities. Join us as we create
          <span>a space where innovation knows no bounds.</span>
        </p>
      </div>
      <div class="container flex mx-auto">
        <video autoplay height="200" loop muted>
          <source src="/videos/why-choose-us.mp4" type="video/mp4" />Your browser does not support HTML video.
        </video>
      </div>
    </section>
    <section class="py-6">
      <div class="container flex flex-col justify-between gap-4 px-4 mx-auto md:py-20 md:flex-row">
        <h2
          class="text-xl font-medium leading-7 text-center md:text-4xl"
        >Join us as we create a space where innovation knows no bounds.</h2>
        <div class="flex border-b border-gray-700">
          <ButtonGreen :show-arrow="true"
          >Join Us</ButtonGreen>
        </div>
      </div>
      <div class="relative flex flex-col items-center justify-center min-h-screen gap-2">
        <img
          class="absolute top-0 max-h-[100px] md:max-h-[250px]"
          src="/images/why-us/top-center.png"
          alt
        />
        <img
          class="absolute right-0 bottom-20 max-h-[100px] md:max-h-[250px]"
          src="/images/why-us/bottom-right.png"
          alt
        />
        <img
          class="absolute bottom-0 left-[50%] translate-x-[-50%] max-w-[100px] md:max-w-[250px]"
          src="/images/why-us/center-bottom.png"
          alt
        />
        <img
          class="absolute left-0 bottom-20 max-h-[100px] md:max-h-[250px]"
          src="/images/why-us/left-bottom.png"
          alt
        />
        <img
          class="absolute left-0 top-20 max-h-[100px] md:max-h-[250px]"
          src="/images/why-us/rect-left-top.png"
          alt
        />
        <!-- <img class="absolute left-0 top-20" src="/images/why-us/top-center.png" alt /> -->
        <img
          class="absolute right-0 top-20 max-h-[100px] md:max-h-[250px]"
          src="/images/why-us/top-right.png"
          alt
        />

        <div class="flex w-full h-full bg-black opacity-60 grow"></div>
        <h2 class="text-xl font-semibold md:text-4xl">Empowering Tech Creators</h2>
        <p class="flex flex-row text-sm font-normal text-center md:text-2xl md:flex-col">
          Valoriz is dedicated to enabling upcoming top-class technology creators to
          <span>raise and shine. Your journey with us is an odyssey of growth and success</span>
        </p>
        <div class="flex w-full h-full bg-black opacity-60 grow"></div>
      </div>
    </section>
    <section class="flex flex-col gap-20 px-4 py-6">
      <div class="container flex flex-col gap-2 mx-auto">
        <h2 class="text-xl font-semibold text-center md:text-4xl">Awards</h2>
        <p class="flex flex-row text-sm font-normal leading-5 text-center md:text-2xl md:flex-col">
          Valoriz is dedicated to enabling upcoming top-class technology creators to raise and shine.
          <span>Your journey with us is an odyssey of growth and success</span>
        </p>
      </div>
      <!-- TODO slider here -->
      <div class="container relative flex mx-auto">
        <div class="absolute left-[50%] top-[50%] translate-y-[-50%]  translate-x-[-50%] flex justify-between flex-grow">
          <span class="text-stroke text-[64px] md:text-[280px]">A</span>
          <span class="text-stroke text-[64px] md:text-[280px]">W</span>
          <span class="text-stroke text-[64px] md:text-[280px]">A</span>
          <span class="text-stroke text-[64px] md:text-[280px]">R</span>
          <span class="text-stroke text-[64px] md:text-[280px]">D</span>
          <span class="text-stroke text-[64px] md:text-[280px]">S</span>
        </div>
        <div class="container z-10 mx-auto">
      <WhyUSAwardsSlider/>

      </div>
      </div>
    
    </section>
  </div>
</template>

<style scoped>
.text-stroke {
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black;
}
</style>