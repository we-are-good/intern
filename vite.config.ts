import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "no-jj",
    project: "javascript-react"
  })],

  server: {
    proxy: {
      "/api": {
        target: "https://moneyfulpublicpolicy.co.kr",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  build: {
    sourcemap: true
  }
});