// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      target: 'esnext',
      cssMinify: true,
      rollupOptions: {
        output: {
          // Separar CSS en chunks
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) {
              return 'assets/css/[name]-[hash][extname]'
            }
            return 'assets/[name]-[hash][extname]'
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      }
    },
    plugins: [tailwindcss()],
    // Optimizaciones de CSS
    css: {
      devSourcemap: false,
    }
  },
  integrations: [react()]
})