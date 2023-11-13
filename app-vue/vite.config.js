import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/app/',
  server: {
        proxy: {
            // '/api': 'https://tasco.dutech.cl/', // Reemplaza con la URL de tu API Laravel
            '/api': 'http://tasco.test/', // Reemplaza con la URL de tu API Laravel
        },
    },
  build: {
    outDir: '../public/app',
    assetsDir: '.', 
    assetsInlineLimit: 0, 
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
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