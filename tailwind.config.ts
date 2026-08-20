import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          violet: "#8B5CF6",
          purple: "#7C3AED",
          blue: "#2563EB",
          royal: "#1D4ED8",
          cyan: "#0EA5E9",
          sky: "#0284C7",
          navy: "#0B192C",
          dark: "#09090B",
          slate: "#334155",
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
        heading: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      backgroundImage: {
        "radiant-gradient":
          "linear-gradient(135deg, #8B5CF6 0%, #2563EB 50%, #0EA5E9 100%)",
        "radiant-subtle":
          "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(37,99,235,0.06) 50%, rgba(14,165,233,0.08) 100%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(139,92,246,0.15), rgba(37,99,235,0.08), rgba(255,255,255,0))",
      },
      boxShadow: {
        "radiant-sm": "0 2px 12px -2px rgba(37, 99, 235, 0.12)",
        "radiant-md": "0 8px 30px -4px rgba(37, 99, 235, 0.16)",
        "radiant-lg": "0 16px 40px -8px rgba(139, 92, 246, 0.22)",
        "radiant-glow": "0 0 35px -5px rgba(37, 99, 235, 0.35)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 150s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
