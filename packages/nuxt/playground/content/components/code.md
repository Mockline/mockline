### Inline code

This is a `inline code` example.

### Basic code block

```vue
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>
```

### Code block with filename

```ts [nuxt.config.ts] transparent test
export default defineNuxtConfig({
  modules: ['mockline']
})
```

### Enable light mode

```ts [nuxt.config.ts] light
export default defineNuxtConfig({
  modules: ['mockline']
})
```

### Code group

::code-group{sync="pm"}
```bash [bun]
bun add mockline
```

```bash [pnpm]
pnpm add mockline
```

```bash [yarn]
yarn add mockline
```

```bash [npm]
npm install mockline
```
::
