import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      firebaseConfig: path.resolve(__dirname, './src/firebaseConfig'),
      pages: path.resolve(__dirname, './src/pages'),
      Theme: path.resolve(__dirname, './src/Theme')
    }
  }
})
