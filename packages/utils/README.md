![Mockline Social Preview](../../assets/social-preview.jpg)

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@mockline/utils">
    <img alt="" src="https://img.shields.io/npm/v/@mockline/utils.svg?style=for-the-badge&labelColor=000000&color=E0E0E0">
  </a>
  <a aria-label="License" href="https://github.com/mockline/utils/main/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/mockline.svg?style=for-the-badge&labelColor=000000&color=212121">
    </a>
  <a aria-label="Join the community on Discord" href="https://discord.gg/BkgyMzvJ3p">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-F74804.svg?style=for-the-badge&logo=Discord&labelColor=000000&logoWidth=20&logoColor=white">
  </a>
  <a aria-label="Mockline logo" href="https://mockline.dev/">
    <img src="https://img.shields.io/badge/MADE%20WITH%20Mockline-000000.svg?style=for-the-badge&logo=Mockline&labelColor=000000&logoWidth=20&logoColor=white" alt="mockline logo">
  </a>
  <a aria-label="Follow Hugo on Twitter" href="https://twitter.com/HugoRCD__">
    <img alt="" src="https://img.shields.io/twitter/follow/HugoRCD__.svg?style=for-the-badge&labelColor=000000&logo=twitter&label=Follow%20Hugo&logoWidth=20&logoColor=white">
  </a>
</p>

## Features

- **Everything you need**: Mockline Utils is a minimal utility library for Mockline.
- **TailwindCSS v4 Alpha** is directly integrated, so you can use all the power of TailwindCSS with zero configuration.
- **Icons** provided by [Nuxt Icon](https://github.com/nuxt-modules/icon), U can use any icon from [Lucide](https://lucide.dev/), [Heroicons](https://heroicons.com/), etc...
- **Toasts** are also provided by [Vue Sonner](https://github.com/xiaoluoboding/vue-sonner), so you can easily create beautiful toasts with ease.
- **Fonts** are provided by [Nuxt Fonts](https://fonts.nuxt.com/), so you can easily use any font with magic 🧙‍♂️.
- **Themes** are provided by [Color Mode](https://github.com/nuxt-modules/color-mode), so you can easily switch between light and dark modes or even create your own themes.
- **Fully customizable**: All components are customizable via props and slots.
- **Dark mode**: Enjoy a seamless dark mode experience with no additional setup.
- **Easy to use**: Mockline is designed to be beginner-friendly, with a simple setup process.
- **Community-driven**: Join the Mockline community on Discord to connect with other users and share your feedback.
- **Open-source**: Mockline is open-source, and we welcome contributions from the community.

## Quick Setup

For the moment Mockline is only available for Nuxt projects (Vue 3 support and react support will be added soon).
To get started, follow these steps:

You can automatically install Mockline Utils in your Nuxt project using the following command:
```bash
npx nuxi@latest module add @mockline/utils
```

or install it manually:

1. Add `@mockline/utils` dependency to your project

```bash
# Using bun
bun install -D @mockline/utils

# Using pnpm
pnpm add -D @mockline/utils

# Using yarn
yarn add --dev @mockline/utils

# Using npm
npm install --save-dev @mockline/utils
```

2. Add `@mockline/utils` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@mockline/utils'
  ]
})
```

Then you will need to import the mockline css in your `app.vue` file:

```vue [app.vue]
<template>
  <MApp>
    <!-- Your app content -->
    <MToasts />
  </MApp>
</template>

<style>
@import "@mockline/utils";
</style>
```

That's it! You can now use Mockline Utils in your Nuxt app ✨

## Community

The Mockline community can be found on Discord, to chat with other community members, you can join the [Mockline Discord](https://discord.gg/BkgyMzvJ3p).

<!-- automd:fetch url="gh:hugorcd/markdown/main/src/contributions.md" -->

## Contributing
To start contributing, you can follow these steps:

1. First raise an issue to discuss the changes you would like to make.
2. Fork the repository.
3. Create a branch using conventional commits and the issue number as the branch name. For example, `feat/123` or `fix/456`.
4. Make changes following the local development steps.
5. Commit your changes following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
6. If your changes affect the code, run tests using `bun run test`.
7. Create a pull request following the [Pull Request Template](https://github.com/HugoRCD/markdown/blob/main/src/pull_request_template.md).
   - To be merged, the pull request must pass the tests/workflow and have at least one approval.
   - If your changes affect the documentation, make sure to update it.
   - If your changes affect the code, make sure to update the tests.
8. Wait for the maintainers to review your pull request.
9. Once approved, the pull request will be merged in the next release !

<!-- /automd -->

<!-- automd:fetch url="gh:hugorcd/markdown/main/src/local_development.md" -->

<details>
  <summary>Local development</summary>

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `bun install`

</details>

<!-- /automd -->

<!-- automd:contributors license=Apache author=HugoRCD github=Mockline/mockline -->

Published under the [APACHE](https://github.com/Mockline/mockline/blob/main/LICENSE) license.
Made by [@HugoRCD](https://github.com/HugoRCD) and [community](https://github.com/Mockline/mockline/graphs/contributors) 💛
<br><br>
<a href="https://github.com/Mockline/mockline/graphs/contributors">
<img src="https://contrib.rocks/image?repo=Mockline/mockline" />
</a>

<!-- /automd -->

<!-- automd:with-automd lastUpdate -->

---

_🤖 auto updated with [automd](https://automd.unjs.io) (last updated: Tue Oct 08 2024)_

<!-- /automd -->
