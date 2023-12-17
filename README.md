![Mockline Social Preview](assets/social-preview.jpg)

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/mockline">
    <img alt="" src="https://img.shields.io/npm/v/mockline.svg?style=for-the-badge&labelColor=000000&color=E0E0E0">
  </a>
  <a aria-label="License" href="https://github.com/mockline/mockline/main/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/mockline.svg?style=for-the-badge&labelColor=000000&color=212121">
    </a>
  <a aria-label="Join the community on Discord" href="https://discord.gg/BkgyMzvJ3p">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-F74804.svg?style=for-the-badge&logo=Discord&labelColor=000000&logoWidth=20&logoColor=white">
  </a>
  <a aria-label="Mockline logo" href="https://mockline.dev/">
    <img src="https://img.shields.io/badge/MADE%20WITH%20Mockline-000000.svg?style=for-the-badge&logo=Mockline&labelColor=000000&logoWidth=20&logoColor=white">
  </a>
  <a aria-label="Follow Hugo on Twitter" href="https://twitter.com/HugoRCD__">
    <img alt="" src="https://img.shields.io/twitter/follow/HugoRCD__.svg?style=for-the-badge&labelColor=000000&logo=twitter&label=Follow%20Hugo&logoWidth=20&logoColor=white">
  </a>
</p>

Welcome to Mockline, your go-to design library crafted to elevate your creative journey. Whether you're a seasoned designer or a budding developer, Mockline is designed to empower you with efficient, innovative, and collaborative tools, putting the joy back into the design process.


## Getting Started

Visit [mockline.dev](https://mockline.dev) to get started with Mockline.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more information.

## Community

The Mockline community can be found on Discord, to chat with other community members, you can join the [Mockline Discord](https://discord.gg/BkgyMzvJ3p).

## Features

- **Fully customizable**: All components are customizable via props and slots.
- **Lightweight**: No external CSS file. All styles are generated via Tailwind CSS.
- **Fully typed**: Written in TypeScript with predictable static types.
- **Developer friendly**: Fully documented and easy to contribute.
- **SSR**: Server-side rendering supported.
- **Dark mode**: Dark mode supported.

## Quick Setup

For the moment Mockline is only available for Nuxt projects (Vue 3 support and react support will be added soon).
To get started, follow these steps:


1. Add `mockline` dependency to your project

```bash
# Using bun
bun install -D mockline

# Using pnpm
pnpm add -D mockline

# Using yarn
yarn add --dev mockline

# Using npm
npm install --save-dev mockline
```

2. Add `@nuxtjs/mockline` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'mockline'
  ]
})
```

That's it! You can now use Mockline in your Nuxt app ✨

## Authors

**Mockline Module**

- Hugo Richard ([@HugoRCD__](https://x.com/HugoRCD__))