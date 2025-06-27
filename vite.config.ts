import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // ✅ Node.js path 모듈 사용

export default defineConfig({
  plugins: [react(
    {
      babel: {
        plugins: [
          ["@emotion/babel-plugin"],
        ],
      },
    }
  )],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"), // ✅ 타입 안전한 경로
      },
    ],
  },
});
