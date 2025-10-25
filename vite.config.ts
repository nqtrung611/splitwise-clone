import { defineConfig } from 'vite'

export default defineConfig({
  base: '/splitwise-clone/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 5173
  },
  define: {
    'import.meta.env': 'import.meta.env'
  }
})