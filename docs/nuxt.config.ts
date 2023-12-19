import pkg from "../package.json";

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-og-image",
    "@nuxtjs/color-mode",
  ],

  css: ["~/assets/style/main.scss"],

  runtimeConfig: {
    public: {
      version: pkg.version,
      name: pkg.name,
    },
  },

  content: {
    highlight: {
      theme: {
        dark: "github-dark",
        default: "github-light",
      },
    },
  },

  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
    storageKey: "mockline-color-mode",
    classSuffix: "",
  },
});
