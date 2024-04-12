import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
  {
    name: 'Nuxt module',
    entries: ['./nuxt/index'],
    outDir: './dist',
    clean: false,
    declaration: true,
    externals: [
      '@nuxt/schema',
      '@nuxt/kit',
    ],
    rollup: {
      emitCJS: true,
    },
  }
])
