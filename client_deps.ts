export * from "https://raw.githubusercontent.com/lucacasonato/fresh/59e6398d7724f4990aa3ace12dce36e11b20e1ba/runtime.ts";

export { default as colors } from "./colors.js";

// Setup twind/tailwind

import { IS_BROWSER } from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";
import colors from "./colors.js";
import { apply, setup, silent, tw } from "https://esm.sh/twind@0.16.17";
export { apply, setup, silent, tw };

export const theme = {
  extend: {
    colors: {
      slate: colors.slate,
      sky: colors.sky,
      cyan: colors.cyan,
      teal: colors.teal,
      stone: colors.stone,
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    boxShadow: {
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.5)",
      "5xl": "0 50px 75px -25px rgba(0, 0, 0, 0.3)",
    },
  },
  mode: silent,
};

if (IS_BROWSER) {
  setup(theme);
}
