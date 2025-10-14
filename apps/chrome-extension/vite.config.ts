import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import hotReloadExtensionVite from "hot-reload-extension-vite";

export default defineConfig({
  plugins: [
    react(),
    hotReloadExtensionVite({
      log: true,
      backgroundPath: "src/background/index.ts",
    }),
    viteStaticCopy({
      targets: [
        {
          src: "public/manifest.json",
          dest: ".",
        },
      ],
    }),
  ],
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        main: "./index.html",
        background: "./src/background/index.ts",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
