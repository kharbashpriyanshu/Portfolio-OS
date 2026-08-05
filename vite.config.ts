import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@common": path.resolve(__dirname, "./src/components/common"),
        "@layout": path.resolve(__dirname, "./src/components/layout"),
        "@sections": path.resolve(__dirname, "./src/components/sections"),
        "@ui": path.resolve(__dirname, "./src/components/ui"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@lib": path.resolve(__dirname, "./src/lib"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@types": path.resolve(__dirname, "./src/types"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@constants": path.resolve(__dirname, "./src/constants"),
        "@config": path.resolve(__dirname, "./src/config"),
        "@context": path.resolve(__dirname, "./src/context"),
        "@providers": path.resolve(__dirname, "./src/providers"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@animations": path.resolve(__dirname, "./src/animations"),
        "@data": path.resolve(__dirname, "./src/data"),
      },
    },
    server: {
      port: 3000,
      open: false,
      host: true,
    },
    preview: {
      port: 4173,
      host: true,
    },
    esbuild: {
      drop: isProduction ? ["console", "debugger"] : [],
    },
    build: {
      target: "es2022",
      sourcemap: true,
      minify: "esbuild",
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name]-[hash].[ext]",
          chunkFileNames: "chunks/[name]-[hash].js",
          entryFileNames: "entries/[name]-[hash].js",
          manualChunks: {
            "react-vendor": ["react", "react-dom", "react-router-dom"],
            "motion-vendor": ["framer-motion"],
            "ui-vendor": ["clsx", "tailwind-merge", "class-variance-authority", "lucide-react"],
          },
        },
      },
    },
  };
});
