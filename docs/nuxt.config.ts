import pkg from '../package.json'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    'nuxt-og-image'
  ],
  runtimeConfig: {
    public: {
      version: pkg.version,
      name: pkg.name
    }
  },
  content: {
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/'
      ]
    }
  }
})
