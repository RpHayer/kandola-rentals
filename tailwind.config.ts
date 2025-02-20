// tailwind.config.js
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1c1c1c", // Near-black for main backgrounds
          secondary: "#2c2c2c", // Dark gray for sections/headers
          accent: "#e53935", // Bold red accent
          accentDark: "#b71c1c", // Darker red for hover/active states
          logoRed: "#FF0000",
          text: "#ffffff", // White text for dark backgrounds
          silver: "#c0c0c0", // Optional silver/gray for highlights
        },
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
