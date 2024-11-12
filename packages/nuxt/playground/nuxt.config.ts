export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  modules: ['../src/module'],
  mockline: {
    content: true,
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-07-09'
})
