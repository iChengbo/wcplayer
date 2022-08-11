import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@wcplayer/components-vue': resolve(__dirname, '../../packages/wcplayer-components-vue/src/index.ts'),
    },
  },
})
