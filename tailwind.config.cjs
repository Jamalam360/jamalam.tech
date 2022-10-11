/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
    },
  },
  safelist: [
    "bg-blue-400",
    "bg-blue-700",
    "bg-yellow-500",
    "bg-orange-500",
  ],
  plugins: [],
};
