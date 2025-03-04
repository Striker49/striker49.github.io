import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/striker49/',
  plugins: [vue()],
  root: './web-ui', // Set the root to web-ui folder
  build: {
    outDir: '../dist', // Build output will go to the parent directory
    emptyOutDir: true, // Make sure the output directory is emptied before the build
  },
})
