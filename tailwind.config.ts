import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alt: "var(--font-yatra)",
        sans: "var(--font-inter)",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translate(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
