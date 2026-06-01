import { defineConfig as lovableDefineConfig } from "@lovable.dev/vite-tanstack-config";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

/** Vercel sets VERCEL=1 during production builds. */
const isVercel = process.env.VERCEL === "1";

export default isVercel
  ? defineConfig({
      plugins: [
        tanstackStart({
          server: { entry: "server" },
        }),
        nitro({ preset: "vercel" }),
        viteReact(),
        tailwindcss(),
        tsconfigPaths(),
      ],
    })
  : lovableDefineConfig({});
