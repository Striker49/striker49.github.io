import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // Add the Vue plugin to handle .vue files
  build: {
    outDir: 'dist', // Specify the output folder
    emptyOutDir: true, // Empty outDir before building
  },
  base: '/dist/', // Ensure correct base path
});
