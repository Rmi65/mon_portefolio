import { fileURLToPath, URL } from 'node:url'; // Corriger fileURLToPath et URL

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // Corriger le nom du plugin Vue
import vueDevTools from 'vite-plugin-vue-devtools'; // Corriger le nom du plugin vue-devtools

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // Corriger 'import.meta.url'
    },
  },
});
