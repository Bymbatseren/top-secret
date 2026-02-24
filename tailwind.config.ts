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
        brand: {
          purple: "#6366f1",
          dark: "#0f0f1a",
          card: "#1e1e3a",
          border: "#2d2d50",
        },
      },
    },
  },
  plugins: [],
};
export default config;
