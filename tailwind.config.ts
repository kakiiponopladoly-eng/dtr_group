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
        orange: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea6c0a",
          700: "#c2570d",
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
