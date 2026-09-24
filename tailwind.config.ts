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
        background: "#080C14",
        surface: {
          50: "#1E293B",
          100: "#161F33",
          200: "#101728",
          300: "#0C1220",
          400: "#080C14",
        },
        soft: {
          violet: "#A78BFA",
          cyan: "#38BDF8",
          emerald: "#34D399",
          amber: "#FBBF24",
          rose: "#FB7185",
          slate: "#94A3B8",
        },
      },
      boxShadow: {
        "soft-glow-violet": "0 0 40px -10px rgba(167, 139, 250, 0.25)",
        "soft-glow-cyan": "0 0 40px -10px rgba(56, 189, 248, 0.25)",
        "soft-glow-emerald": "0 0 40px -10px rgba(52, 211, 153, 0.25)",
        "3d-glass": "0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
