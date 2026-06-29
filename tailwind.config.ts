import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#06101f",
          900: "#0d1a33",
          800: "#122044",
          700: "#172855",
          600: "#1e3368",
          100: "#d4dbe8",
          50:  "#eef1f7",
        },
        // Primary accent — blue from the DTR logo globe
        brand: {
          50:  "#eef6fd",
          100: "#d7eafa",
          200: "#aacef5",
          300: "#72aedf",
          400: "#4aaed4",
          500: "#2275b8",
          600: "#1a5c9a",
          700: "#144a82",
          800: "#0f3868",
        },
        // Secondary accent — green from the DTR logo globe
        green: {
          50:  "#eef5e8",
          100: "#d3e8c4",
          200: "#a8d28a",
          300: "#7aad4a",
          400: "#6b9e3e",
          500: "#5d8a3c",
          600: "#4a7030",
          700: "#3a5a24",
        },
        cream: {
          50:  "#faf9f6",
          100: "#f5f3ee",
          200: "#e9e6de",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body:    ["var(--font-body)",    "system-ui", "sans-serif"],
        sans:    ["var(--font-body)",    "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
