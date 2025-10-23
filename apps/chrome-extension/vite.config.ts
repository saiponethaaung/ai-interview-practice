import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import hotReloadExtensionVite from "hot-reload-extension-vite";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

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
    sourcemap: "inline",
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
  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
  },
});
