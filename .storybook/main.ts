import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/preset-create-react-app",
    // "@storybook/addon-onboarding",
    // "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    // "@storybook/addon-interactions",
    // "@storybook/addon-mdx-gfm",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  staticDirs: ["../public"],

  docs: {
    autodocs: true,
  },
};
export default config;
