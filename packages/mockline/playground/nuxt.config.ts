export default defineNuxtConfig({
  modules: ['../src/module', '@nuxt/content'],
  mockline: {
    content: true,
  },
  devtools: { enabled: true },
  css: ['~/assets/style/main.css'],
})
