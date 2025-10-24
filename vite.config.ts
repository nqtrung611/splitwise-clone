import { defineConfig } from 'vite'

export default defineConfig({
  base: '/splitwise-clone/',
  build: {
    outDir: 'docs'
  },
  server: {
    port: 5173
  },
  define: {
    'import.meta.env': 'import.meta.env'
  }
})