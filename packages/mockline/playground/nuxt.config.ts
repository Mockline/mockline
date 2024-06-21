export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  modules: ['../src/module', '@nuxt/content'],
  mockline: {
    content: true,
  },
  devtools: { enabled: true },
})
