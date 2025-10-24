import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/splitwise-clone/' : '/',
  server: {
    port: 5173
  },
  define: {
    'import.meta.env': 'import.meta.env'
  }
})