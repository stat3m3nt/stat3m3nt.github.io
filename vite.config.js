import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// base "./" lets the build work on any GitHub Pages path.
// viteSingleFile inlines JS and CSS into dist/index.html.
export default defineConfig({
  base: "./",
  plugins: [react(), viteSingleFile()],
});
