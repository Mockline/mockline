import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
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
