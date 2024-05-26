export default defineNuxtConfig({
  modules: ['mockline', '@nuxt/image', '@nuxt/content'],
  devtools: { enabled: true },
  content: {
    documentDriven: true,
  }
})
