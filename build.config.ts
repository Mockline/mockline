import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
  {
    name: 'Vue library',
    entries: [
      { builder: 'mkdist', input: './src/runtime', pattern: ['./*.ts'], format: 'cjs', loaders: ['js'] },
      { builder: 'mkdist', input: './src/runtime', pattern: ['./*.ts'], format: 'esm', loaders: ['js'] },
      { builder: 'mkdist', input: './src/runtime/components', outDir: './dist/components', pattern: ['**/*.vue'], loaders: ['vue'] },
      { builder: 'mkdist', input: './src/runtime/index', pattern: ['**/*.css'] },
    ],
    declaration: true,
    rollup: {
      esbuild: {
        target: 'esnext'
      },
      emitCJS: true,
    },
    failOnWarn: false,
    externals: ['vue']
  },
  {
    name: 'Nuxt module',
    entries: ['./src/module'],
    declaration: true,
    rollup: {
      esbuild: {
        target: 'esnext'
      },
      emitCJS: true,
    },
    failOnWarn: false,
    externals: [
      '@nuxt/schema',
      '@nuxt/kit',
      'nuxt',
      'nuxt-edge',
      'nuxt3',
      'vue',
      'vue-demi'
    ],
  },
])
