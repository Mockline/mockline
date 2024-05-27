export default defineNuxtConfig({
  modules: ['mockline', '@nuxt/image', '@nuxt/content'],
  devtools: { enabled: true },
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
        light: 'github-light',
      }
    },
  },
  css: ['~/assets/style/main.css'],
})
