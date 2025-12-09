import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E4FB6",
          dark: "#133479",
          light: "#4C73D0"
        },
        accent: "#F7941D"
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 10px 25px rgba(0, 0, 0, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

