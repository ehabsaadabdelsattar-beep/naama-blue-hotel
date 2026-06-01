import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isDev = process.argv.includes("dev");

export default isDev
  ? defineConfig({
      plugins: [tanstackStart({ server: { entry: "server" } }), viteReact(), tailwindcss(), tsconfigPaths()],
    })
  : defineConfig({
      plugins: [
        tanstackStart({ server: { entry: "server" } }),
        nitro({ preset: "vercel" }),
        viteReact(),
        tailwindcss(),
        tsconfigPaths(),
      ],
    });
