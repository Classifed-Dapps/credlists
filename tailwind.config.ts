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
        inter: "var(--font-inter)",
        mansalva: "var(--font-mansalva)",
        manrope: "var(--font-manrope)",
      },
      colors: {
        primary: {
          1: "#FFFFFF",
          2: "#1D1D1D",
          3: "#4B4B4B",
          4: "#8C94A3",
          5: "#363B47",
          6: "#B7BAC7",
          7: "#1D2026",
        },
        secondary: {
          1: "#08998A",
          2: "#6B89B7",
          3: "#0B225A",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
