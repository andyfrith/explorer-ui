import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

/**
 * Dedicated Vite config for Storybook.
 * Excludes app-only plugins (TanStack Start, Nitro, devtools) to avoid
 * "ReferenceError: module is not defined" and port conflicts.
 */
export default defineConfig({
  plugins: [
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    viteReact(),
  ],
});
