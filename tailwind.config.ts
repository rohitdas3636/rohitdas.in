import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050914",
        navy: {
          950: "#07111F",
          900: "#0A1830",
          800: "#0F2854",
          700: "#14386C",
          600: "#1C4D8D",
        },
        mist: "#DDE9F8",
        steel: "#8CA6C8",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 20px 80px rgba(28, 77, 141, 0.28)",
        soft: "0 16px 60px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "radial-premium":
          "radial-gradient(circle at top left, rgba(28, 77, 141, 0.34), transparent 34%), radial-gradient(circle at 85% 8%, rgba(15, 40, 84, 0.65), transparent 30%)",
      },
    },
  },
  plugins: [],
};

export default config;
