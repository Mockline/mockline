export default defineNuxtConfig({
  modules: ['mockline', '@nuxt/image', '@nuxt/content'],
  devtools: { enabled: true },
  content: {
    highlight: {
      theme: {
        light: 'material-theme-lighter',
        default: 'material-theme',
        dark: 'material-theme-palenight'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
    },
  },
  mockline: {
    icons: ['vscode-icons'],
  },
  css: ['~/assets/style/main.css'],
})
