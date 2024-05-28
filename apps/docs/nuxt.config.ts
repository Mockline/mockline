export default defineNuxtConfig({
  modules: ['mockline', '@nuxt/image', '@nuxt/content'],
  devtools: { enabled: true },
  mockline: {
    icons: ['vscode-icons'],
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },
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
  css: ['~/assets/style/main.css'],
})
