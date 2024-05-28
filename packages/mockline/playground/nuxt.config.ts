export default defineNuxtConfig({
  modules: ['../src/module', '@nuxt/content'],
  devtools: { enabled: true },
  css: ['~/assets/style/main.css'],
  content: {
    highlight: {
      theme: {
        default: 'github-dark-default',
        dark: 'github-dark-default',
        light: 'github-light-default'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
    },
  },
})
