// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        { type: 'text/javascript' },
        { src: 'https://unpkg.com/@studio-freight/lenis@1.0.35/dist/lenis.min.js' },
        {
          children: `
        const lenis = new Lenis()
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
     `
        },
        { src: 'https://www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js' },
        {
          children:`
          document.addEventListener('DOMContentLoaded', function () {
            cookieconsent.run({"notice_banner_type":"simple","consent_type":"implied","palette":"dark","language":"en","page_load_consent_levels":["strictly-necessary","functionality","tracking","targeting"],"notice_banner_reject_button_hide":false,"preferences_center_close_button_hide":false,"page_refresh_confirmation_buttons":false,"website_name":"Valoriz"});
            });
            `
        },
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-PD96E03Q6N', async: true  },
        {
          children:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PD96E03Q6N');
          `
        },
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    'vue3-carousel-nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    }
  }
})
