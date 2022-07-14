import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
import { orange } from "twind/colors";
export * from "twind";

export const config: Configuration = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
      },
      colors: {
        orange: orange,
      },
    },
  },
};

if (IS_BROWSER) setup(config);
