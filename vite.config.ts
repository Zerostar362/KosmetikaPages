import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/KosmetikaPages/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        products: resolve(import.meta.dirname, 'services.html'),
        about: resolve(import.meta.dirname, 'about.html'),
      },
    },
  },
})
