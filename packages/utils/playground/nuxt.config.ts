export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/icons'
      },
    ],
  },
})
