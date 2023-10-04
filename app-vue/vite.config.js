import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/app/',
  build: {
    outDir: '../public/app',
    assetsDir: '.', 
    assetsInlineLimit: 0, 
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: 'entry/[name]-[hash].js',
      },
    },
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});