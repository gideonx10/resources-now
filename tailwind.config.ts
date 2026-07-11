import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#3B6CF4",
        "blue-deep": "#1A3A9B",
        "blue-light": "#EEF2FF",
        "blue-mid": "#6B8FFF",
        navy: "#0F1C3F",
        bg: "#FFFFFF",
        "bg-soft": "#F8F9FF",
        "bg-section": "#F3F5FF",
        border: "#E2E6F3",
        "text-primary": "#0F1C3F",
        "text-secondary": "#4A5568",
        "text-muted": "#8896AD",
        success: "#22C55E",
      },
      fontFamily: {
        display: ["var(--font-lato)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
};

export default config;
