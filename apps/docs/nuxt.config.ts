export default defineNuxtConfig({
  modules: ['mockline', '@nuxt/image'],
  devtools: { enabled: true },
  mockline: {
    content: true,
    icons: ['vscode-icons'],
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },
  css: ['~/assets/style/main.css'],
})
