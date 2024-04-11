import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  rollup: {
    inlineDependencies: true,
    resolve: {
      exportConditions: ['production', 'node'] as any,
    },
  },
  entries: [
    'src/index',
    {
      builder: 'mkdist',
      input: './src/components/',
      outDir: './build/components',
    },
  ],
})
