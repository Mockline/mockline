import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      cleanVueFileName: true,
      exclude: ['src/test/**'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
    },
  },
  build: {
    lib: {
      name: 'mockline',
      fileName: (format, name) => {
        return `${name}.${format === 'es' ? 'js' : 'umd.cjs'}`
      },
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
    },
    rollupOptions: {
      external: ['vue', '@floating-ui/vue'],
      output: {
        globals: {
          'vue': 'Vue',
          '@floating-ui/vue': '@floating-ui/vue',
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css')
            return 'index.css'
          return chunkInfo.name as string
        },
      },
    },
  },
})
