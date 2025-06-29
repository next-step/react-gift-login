import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import p from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@':p.resolve(__dirname,'src'),
      '@utils':p.resolve(__dirname,'src/utils'),
    }
  }
})
