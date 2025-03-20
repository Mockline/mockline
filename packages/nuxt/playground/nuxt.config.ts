import pkg from '../package.json'

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

  mdc: {
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-dark',
        light: 'github-dark',
      }
    },
  },

  runtimeConfig: {
    public: {
      version: pkg.version
    }
  },

  routeRules: {
    '/getting-started/installation': { redirect: '/getting-started/installation/nuxt', prerender: false }
  },

  css: ['~/assets/css/main.css'],
})
