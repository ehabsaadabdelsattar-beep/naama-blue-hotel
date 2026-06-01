import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const deployToVercel = process.env.VERCEL === "1";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    ...(deployToVercel ? [nitro({ preset: "vercel" })] : []),
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
