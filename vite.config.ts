import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 추가, Node.js 설치

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 절대경로로 @ 사용
    },
  },
})
