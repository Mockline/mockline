import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
  {
    name: 'Nuxt module',
    entries: ['./nuxt/index'],
    outDir: './dist',
    clean: false,
    declaration: true,
    externals: ['@nuxt/schema'],
    rollup: {
      emitCJS: true,
    },
  },
  {
    name: 'Package',
    entries: ['./src/index'],
    outDir: './dist',
    clean: false,
    declaration: true,
    rollup: {
      emitCJS: true,
    },
  }
])
