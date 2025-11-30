import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#009688",        // Teal – Primary
        brandDark: "#00695C",    // Deep Teal
        brandLight: "#F7EECF",   // Beige Background
        brandGold: "#FFE07D",    // Golden Accent
        brandText: "#4B5563",    // Neutral Text
        darkSlate: "#0F172A",    // Dark Mode Base
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        card: "28px",
        pill: "999px",
      },
      boxShadow: {
        smooth: "0 6px 25px rgba(0,0,0,0.08)",
        premium: "0 12px 45px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
