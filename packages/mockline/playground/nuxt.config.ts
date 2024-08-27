export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '../src/module',
    '@nuxt/content',
    '@nuxt/image'
  ],
  mockline: {
    content: true,
  },
  devtools: { enabled: true },
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons'
      },
    ],
  },
  compatibilityDate: '2024-07-09'
})