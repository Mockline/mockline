import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
  {
    name: 'Vue library',
    entries: [
      { builder: 'mkdist', input: './src', pattern: ['./*.ts'], format: 'cjs', loaders: ['js'] },
      { builder: 'mkdist', input: './src', pattern: ['./*.ts'], format: 'esm', loaders: ['js'] },
      { builder: 'mkdist', input: './src/components', outDir: './dist/components', pattern: ['**/*.vue'], loaders: ['vue'] },
      { builder: 'mkdist', input: './src/index', pattern: ['**/*.css'] },
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
    entries: ['./nuxt/index'],
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
