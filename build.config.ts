import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
  {
    name: 'Nuxt module',
    entries: ['./src/module'],
    outDir: './dist',
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
/*{
    name: 'Vue library',
    entries: [
      { builder: 'mkdist', input: './src/runtime', pattern: ['./!*.ts'], format: 'cjs', loaders: ['js'] },
      { builder: 'mkdist', input: './src/runtime', pattern: ['./!*.ts'], format: 'esm', loaders: ['js'] },
      { builder: 'mkdist', input: './src/runtime/components', outDir: './dist/components', pattern: ['**!/!*.vue'], loaders: ['vue'] },
      { builder: 'mkdist', input: './src/runtime/composables', outDir: './dist/composables', pattern: ['**!/!*.ts'], loaders: ['js'] },
      { builder: 'mkdist', input: './src/runtime', pattern: ['**!/!*.css'] },
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
  },*/
