import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rust: {
          DEFAULT: "#C1502E",
          hover: "#A8431F",
          dark: "#8B3518",
        },
        cream: "#F7F1E8",
        tan: "#D8C4A8",
        espresso: {
          DEFAULT: "#2A211A",
          text: "#EDE6DC",
        },
        emergency: {
          from: "#B23A2E",
          to: "#C86A3D",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "emergency-gradient":
          "linear-gradient(to right, #B23A2E, #C86A3D)",
      },
      boxShadow: {
        warm: "0 4px 24px rgba(42, 33, 26, 0.10)",
        "warm-lg": "0 8px 40px rgba(42, 33, 26, 0.15)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
