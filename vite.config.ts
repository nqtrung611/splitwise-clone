import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: '.'
  },
  server: {
    port: 5173
  },
  define: {
    'import.meta.env': 'import.meta.env'
  }
})