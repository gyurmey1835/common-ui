import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],          // Generate .d.ts for all source files
      insertTypesEntry: true,    // Adds "types" entry in package.json automatically
      outDir: "dist",            // Put types into dist/
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "weets-ui",
      formats: ["es", "umd"],
      fileName: (format) => `weets-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});


