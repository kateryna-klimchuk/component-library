import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  core: {
    builder: "@storybook/builder-vite",
  },
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../public"],
  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  viteFinal: async (config) => {
    // Set the base path for deployment to GitHub Pages
    config.base = process.env.GITHUB_ACTIONS
      ? "/component-library/" // This matches your repo name and URL
      : "/"; // For local development, use the root path

    return config;
  },
};

export default config;
