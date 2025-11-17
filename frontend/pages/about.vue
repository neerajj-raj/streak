<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const { data: content, pending, refresh } = await useFetch(
  `${config.public.API_BASE_URL}/api/about-us-page?populate[0]=video&populate[1]=solution_section.solution_card.image&populate[2]=solution_section.about_us_card.image&populate[3]=team_section.teams&populate[4]=history_section.histories&populate[5]=career_section.openings_sections.image&populate[6]=award_section.awards.image`,
  {
    method: "get",
    server: false,
     onResponse({ request, response, options }) {
      useHead({
          meta: [
            { name: 'title', content: response._data.data.attributes?.seo_section?.title || '' },
            { name: 'description', content: response._data.data.attributes?.seo_section?.description || '' },
            { name: 'keywords', content: response._data.data.attributes?.seo_section?.keywords || '' }
          ],
        })
      }
  
    }
);
const { data: contentComponent } = await useFetch(
  `${config.public.API_BASE_URL}/api/about-us-page?populate=solution_section.solution_card.image&populate=solution_section.about_us_card.image`,
  {
    method: "get",
    server: false
  }
);
const { data: contentHistory } = await useFetch(
  `${config.public.API_BASE_URL}/api/about-us-page?populate=history_section.histories`,
  {
    method: "get",
    server: false
  }
);
const { data: contentCareer } = await useFetch(
  `${config.public.API_BASE_URL}/api/about-us-page?populate=career_section.openings_sections.image`,
  {
    method: "get",
    server: false
  }
);
</script>

<template>
  <div>
    <Loader v-if="pending" />
    <div v-else>
      <section
        class="flex flex-col min-h-0 gap-6 px-4 py-6 text-white bg-black md:px-0 md:gap-10 md:min-h-screen"
      >
        <div class="container flex flex-col gap-3 mx-auto md:gap-5">
          <h1 class="text-2xl font-semibold text-center md:text-6xl">
            {{ content.data.attributes.heading.substring(0, 30) }}
            <br />
            {{ content.data.attributes.heading.substring(30)}}
          </h1>
          <!-- <p 
            class="flex justify-center leading-5 text-center text-gray-200 md:mx-48 md:text-xl"
          >We believe that every line of code is a vital part of the puzzle and understands its importance in the bigger scheme. This is reflected in our culture of teamwork, openness and transparency. Every team member synergizes to create, design, develop, test, and deliver exactly what our clients want.</p>-->
        </div>

        <div class="container flex justify-center max-h-screen mx-auto">
          <video autoplay muted loop>
            <source :src="content.data.attributes.video.data.attributes.url" type="video/mp4" />Your browser does not support HTML video.
          </video>
        </div>
      </section>
      <section class="flex flex-col gap-8 px-4 py-6 md:px-0 md:gap-20 md:py-10">
        <div class="border-b-0 border-gray-300 md:border-b">
          <div
            class="container flex flex-col px-4 gap-10 mx-auto md:items-center md:flex-row md:justify-between md:pb-10"
          >
            <h2
              class="text-xl font-semibold md:text-4xl basis-1/2"
            >{{ content.data.attributes.solution_section.sub_heading }}</h2>
            <p
              class="text-base font-normal text-gray-600 md:font-medium md:text-xl basis-1/2"
            >{{ content.data.attributes.solution_section.description }}</p>
          </div>
        </div>
        <div class="container grid grid-rows-1 px-4 mx-auto md:grid-cols-3">
          <AboutStrategyCard
            v-for="(solutionCard, idx) in content.data.attributes.solution_section.solution_card"
            :key="idx"
            :img="solutionCard.image.data.attributes.url"
            :title="solutionCard.title"
          />
        </div>
        <div class="container grid grid-rows-1 gap-4 px-4 mx-auto md:px-0 md:grid-cols-3 md:gap-5">
          <HomeAboutCard
            v-for="(about,idx) in content.data.attributes.solution_section.about_us_card"
            :key="idx"
            :img="about.image.data.attributes.url"
            :title="about.title"
            :count="about.no_of_items"
            :text="about.description"
          />
        </div>
      </section>

      <section class="flex flex-col gap-4 py-6 text-white bg-black md:gap-10" id="leadership-team">
        <!-- <div class="flex px-4 pb-4 border-b border-gray-500 md:px-0 md:py-10">
          <div class="container mx-auto">
            <h2 class="flex flex-col text-xl font-semibold leading-8 md:leading-normal md:text-4xl">
              <span class="font-medium">Meet our exceptional team of visionaries</span>
              behind the success stories
            </h2>
          </div>
        </div>-->
        <!-- <div class="container flex flex-col gap-2 px-4 mx-auto md:px-0 md:flex-row">
          <h3 class="text-lg font-medium md:text-3xl basis-1/2">
            Expert teams, seamless delivery
          </h3>
          <p
            class="text-sm font-normal basis-1/2 md:text-xl"
          >Our dynamic teams are capable to handle projects from start to successful handover. With our unmatchable expertise in the digital retail domain, we strive to deliver the best in class solutions for our customers.</p>
        </div>-->
        <!-- TODO Add teammembers here -->
        <!-- <div class="flex flex-grow md:hidden">
          <AboutTeamMemberSlider />
        </div>
        <div class="container hidden grid-cols-4 gap-5 mx-auto md:grid">
          <AboutTeamMember v-for="card in 8" :key="card" />
        </div>-->
      </section>
      <section class="py-10 text-white bg-black md:py-20" id="history">
        <div class="container flex flex-col px-4 gap-4 mx-auto md:flex-row md:items-center">
          <div class="flex flex-col gap-2 px-4 md:px-0">
            <h2
              class="text-xl font-semibold md:text-4xl"
            >{{ content.data.attributes.history_section.heading }}</h2>
            <!-- <p
              class="hidden text-sm font-medium leading-5 md:flex md:text-xl md:flex-col"
            >
            <span>At Valoriz, we place paramount</span> <span>importance on prominently showcasing </span> <span> our core values, ensuring they are visible </span><span> and upheld across all platforms and </span> <span> interactions, without compromise.</span></p>-->
            <p
              class="flex text-sm font-medium leading-5 md:text-xl"
            >{{ content.data.attributes.history_section.sub_heading }}</p>
          </div>
          <div class="flex flex-col items-start px-4 md:px-0 md:gap-12 md:items-end">
            <CareerValues
              v-for="(value, idx) in content.data.attributes.history_section.histories"
              :key="idx"
              :serial="value.year"
              :title="value.title"
              :text="value.description"
            />
          </div>
        </div>
      </section>

      <CSR id="csr" />
      <!-- <section class="flex flex-col gap-4 pb-6 md:pb-10 md:gap-10">
        <div class="py-6 border-b border-gray-300 md:py-10">
          <div class="container flex items-center px-4 mx-auto md:px-0 md:p-0">
            <h2 class="flex items-center text-xl font-semibold md:text-4xl">Our innovation hub</h2>
          </div>
        </div>
        <div class="container flex flex-col gap-4 px-4 mx-auto md:px-0 md:flex-row">
          <div class="flex justify-center order-1 md:justify-end md:order-2 basis-1/2">
            <img class="object-fill rounded-xl" src="/images/about/innovation-hub.png" alt />
          </div>
          <div class="flex items-center order-2 md:order-1 basis-1/2">
            <p
              class="text-base font-normal leading-6 text-gray-600 md:text-xl"
            >Step into the Valoriz innovation hub, your gateway to a future where technology transcends expectations. With Valoriz, UX/CX services blend design with function, creating seamless experiences. Product engineering transforms bold ideas into reality, defining excellence. QA automation ensures each innovation stands on reliability. Cloud and DevOps elevate agility and scalability, harmonizing operations. E-Commerce services reinvent the digital marketplace, setting new standards. This hub isn’t just a showcase; it’s a journey towards innovation, streamlined for efficiency and progression. Discover how we elevate potential, one solution at a time.</p>
          </div>
        </div>
      </section>-->
      <!-- TODO Add Career section here -->
      <section class="text-white bg-black">
        <div class="border-b border-gray-500">
          <div class="container px-4 py-6 mx-auto md:px-0 md:py-10">
            <h2
              class="text-xl px-4 font-semibold md:text-4xl"
            >{{content.data.attributes.career_section.heading}}</h2>
          </div>
        </div>
        <div class="container flex flex-col gap-8 px-4 py-6 mx-auto md:px-0 md:py-10 md:flex-row">
          <div class="flex flex-col px-4  justify-center gap-10 basis-1/2">
            <h3
              class="text-lg font-medium md:text-3xl"
            >
            {{content.data.attributes.career_section.openings_sections.description}}
            </h3>
            <!-- <p
              class="text-sm font-medium leading-5 text-gray-300 md:leading-7 md:text-xl"
            >Valoriz invites you to be a part of a community that values progress, innovation, and a commitment to excellence.</p>-->
            <div class="flex basis-0 md:basis-1/3">
              <NuxtLink to="/careers">
                <ButtonGreen :show-arrow="true">Explore opportunities</ButtonGreen>
              </NuxtLink>
            </div>
          </div>
          <div class="flex justify-end basis-1/2">
            <img
              :src="content.data.attributes.career_section.openings_sections.image.data.attributes.url"
              alt
            />
          </div>
        </div>
      </section>
      <section
        class="flex flex-col gap-10 px-4 py-6 text-white bg-black md:px-0 md:gap-20"
        id="awards-recognitions"
      >
        <!-- <div class="container flex flex-col gap-2 mx-auto">
          <h2 class="text-xl font-semibold md:text-4xl">Awards</h2>
          <p class="flex flex-col gap-4 text-sm font-normal leading-5 md:text-center md:text-2xl">
            Valoriz is dedicated to enabling upcoming top-class technology creators to raise and shine.
            <span>Your journey with us is an odyssey of growth and success</span>
          </p>
        </div>-->
        <!-- <div class="border-b-0 border-gray-500 md:border-b">
          <div
            class="container flex flex-col gap-10 mx-auto md:items-center md:flex-row md:justify-between md:pb-10"
          >
            <h2
              class="text-xl font-semibold md:text-4xl basis-1/2"
            >Awards</h2>
            <p
              class="text-base font-normal md:font-medium md:text-xl basis-1/2"
            >We offer advanced digital solutions, leveraging AI and machine learning to stay competitive in the evolving tech landscape.</p>
          </div>
        </div>-->
        <!-- TODO slider here -->
        <!-- <div class="container relative flex mx-auto">
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
        </div>-->
      </section>
    </div>
  </div>
</template>
<style scoped>
.text-stroke {
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black;
}
</style>