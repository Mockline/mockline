export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  modules: ['../src/module'],
  mockline: {
    content: true,
  },
  icon: {
    class: 'fill-current',
    mode: 'svg',
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/icons'
      },
    ],
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-07-09'
})
