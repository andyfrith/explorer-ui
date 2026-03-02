import React from "react";
import { type Preview, ReactRenderer } from "@storybook/react-vite";
import {
  RouterContextProvider,
  createMemoryHistory,
  createRouter,
} from "@tanstack/react-router";
import { routeTree } from "../src/routeTree.gen";
import "../src/styles.css";
import { withThemeByClassName } from "@storybook/addon-themes";

/**
 * Storybook router: same route tree as the app, but memory history
 * so stories don't depend on the browser URL. Initial entry "/" so
 * Link to="/" and useRouter() resolve correctly.
 */
const storybookRouter = createRouter({
  routeTree,
  history: createMemoryHistory({ initialEntries: ["/"] }),
});

export const decorators = [
  (Story) => (
    <RouterContextProvider router={storybookRouter}>
      <Story />
    </RouterContextProvider>
  ),
  withThemeByClassName<ReactRenderer>({
    themes: {
      light: "light",
      dark: "dark",
      graphite: "graphite",
    },
    defaultTheme: "light",
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators,
};

export default preview;
