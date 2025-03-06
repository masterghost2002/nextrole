import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["var(--font-silkscreen)"],
        terminal: ["var(--font-vt323)"],
        mono: ["var(--font-ibm-plex)"],
      },
      boxShadow: {
        retro: "4px 4px 0px 0px rgba(0,0,0,0.9)",
        "retro-sm": "2px 2px 0px 0px rgba(0,0,0,0.9)",
      },
      // Custom Color Palette
      colors: {
        // Neutral shades (based on #03051E)
        neutral: {
          900: "#03051E", // Darkest text
          800: "#1A1C35",
          700: "#31344C",
          600: "#484B63",
          500: "#5F627A",
          400: "#767991",
          300: "#8D90A8",
          200: "#A4A7BF",
          100: "#BBBED6", // Lightest neutral
        },
        // Primary color (based on #D91656)
        primary: {
          DEFAULT: "#D91656", // Main primary color
          900: "#D91656",
          800: "#DD2E66",
          700: "#E14676",
          600: "#E55E86",
          500: "#E97696",
          400: "#ED8EA6",
          300: "#F1A6B6",
          200: "#F5BEC6",
          100: "#F9D6D6", // Lightest primary
        },
        // Background and foreground colors
        background: "#F7F7F7",
        foreground: "var(--foreground)",
      },
      // Typography Settings
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      lineHeight: {
        tight: "1.2",
        snug: "1.4",
        normal: "1.6",
        relaxed: "1.8",
        loose: "2",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
