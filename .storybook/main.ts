import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
  ],
  framework: "@storybook/react-vite",
  core: {
    builder: {
      name: "@storybook/builder-vite",
      options: {
        viteConfigPath: path.join(dirname, "..", "vite.config.storybook.ts"),
      },
    },
  },
};
export default config;
