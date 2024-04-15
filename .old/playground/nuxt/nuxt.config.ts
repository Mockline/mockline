export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/style/main.css'],
  modules: ['mockline/nuxt', '@nuxtjs/tailwindcss'],
  mockline: {
    prefix: 'M'
  }
})
