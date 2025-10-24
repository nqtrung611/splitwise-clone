import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173
  },
  define: {
    'import.meta.env': 'import.meta.env'
  }
})