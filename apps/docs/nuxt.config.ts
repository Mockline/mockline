import pkg from '../../packages/nuxt/package.json'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  modules: ['mockline', '@nuxt/content', 'nuxt-llms', '@nuxthub/core'],
  devtools: { enabled: true },
  compatibilityDate: '2024-07-09',

  css: ['~/assets/css/main.css'],
  mdc: {
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-dark',
        light: 'github-dark',
      }
    },
  },

  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'ts', 'typescript', 'diff', 'vue', 'json', 'yml', 'css', 'mdc']
        }
      }
    }
  },

  runtimeConfig: {
    public: {
      version: pkg.version
    }
  },

  llms: {
    domain: 'https://mockline.hrcd.fr',
    title: 'Mockline Docs',
    description: 'Mockline is a premium UI Kit for Nuxt and VueJS based on TailwindCSS. It provides a set of components and utilities to help you build your next project.',
    full: {
      title: 'Mockline Docs',
      description: 'The complete Mockline documentation, blog posts and changelog written in Markdown (MDC syntax).'
    }
  },

  routeRules: {
    '/getting-started/installation': { redirect: '/getting-started/installation/nuxt', prerender: false }
  },
})
