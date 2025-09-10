// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Hosting.github.io/", // 👈 IMPORTANT: must match repo name
});
