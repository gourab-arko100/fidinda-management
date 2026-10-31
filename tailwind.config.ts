import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        /*
         * THEME TOKENS — values live in src/app/globals.css (:root = light, .dark = dark).
         * Use these for anything that must change between light and dark theme.
         */
        canvas: "rgb(var(--c-canvas) / <alpha-value>)", // page background
        surface: "rgb(var(--c-surface) / <alpha-value>)", // cards, header, inputs on focus
        mist: "rgb(var(--c-mist) / <alpha-value>)", // soft section / input background
        heading: "rgb(var(--c-heading) / <alpha-value>)", // headings and main text
        ink: "rgb(var(--c-ink) / <alpha-value>)", // body copy
        line: "rgb(var(--c-line) / <alpha-value>)", // borders & rings (use with opacity, e.g. border-line/10)

        /* BRAND — fixed in both themes */
        navy: {
          DEFAULT: "#1C095A",
          50: "rgb(var(--c-tint) / <alpha-value>)", // light navy tint (themed)
          100: "#E6E1F4",
          200: "#C9C0E6",
          300: "#9D8ECF",
          400: "#6A56AE",
          500: "#3F2A86",
          600: "#2C1670",
          700: "#1C095A",
          800: "#150644",
          900: "#0E032F",
        },
        brand: {
          red: "#E1041C",
          redDark: "#B80317",
          redSoft: "rgb(var(--c-red-soft) / <alpha-value>)", // light red tint (themed)
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(28,9,90,0.04), 0 8px 24px -12px rgba(28,9,90,0.18)",
        lift: "0 2px 4px rgba(28,9,90,0.06), 0 20px 40px -16px rgba(28,9,90,0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
