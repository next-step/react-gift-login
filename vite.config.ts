import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') }, // 절대 경로로 설정
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') }, // 절대 경로로 설정
    ],
  },
  plugins: [react(), tsconfigPaths()],
});