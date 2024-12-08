export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '../src/module',
    '@nuxt/content'
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-07-09',


  routeRules: {
    '/getting-started/installation': { redirect: '/getting-started/installation/nuxt', prerender: false }
  },
})
