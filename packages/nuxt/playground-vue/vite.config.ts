import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import mockline from '../src/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      allow: ['..']
    }
  },
  plugins: [
    vue(),
    mockline({
      mockline: {
        colors: {
          primary: 'orange',
        }
      },
      autoImport: {
        imports: ['vue']
      },
      components: {
        dirs: ['../playground/app/components']
      }
    })
  ],
  optimizeDeps: {
    // prevents reloading page when navigating between components
    include: ['reka-ui/namespaced']
  }
})
