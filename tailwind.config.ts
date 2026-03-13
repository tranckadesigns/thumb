import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base backgrounds — layered dark system
        base: {
          DEFAULT: "#080808",
          surface: "#0F0F0F",
          elevated: "#161616",
          overlay: "#1E1E1E",
        },
        // Borders
        border: {
          subtle: "#1A1A1A",
          DEFAULT: "#242424",
          strong: "#333333",
        },
        // Text
        content: {
          primary: "#F2F2F2",
          secondary: "#8E8E8E",
          muted: "#525252",
          inverse: "#0A0A0A",
        },
        // Accent — warm muted gold, premium and restrained
        accent: {
          DEFAULT: "#C9A96E",
          hover: "#D4B882",
          muted: "rgba(201,169,110,0.12)",
        },
        // Status
        success: "#4ADE80",
        error: "#F87171",
        warning: "#FBBF24",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        wide: "0.08em",
        widest: "0.16em",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,0.5), 0 1px 2px -1px rgba(0,0,0,0.4)",
        elevated: "0 4px 16px 0 rgba(0,0,0,0.6)",
        overlay: "0 8px 32px 0 rgba(0,0,0,0.8)",
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-out",
        "slide-up": "slideUp 0.25s ease-out",
        marquee: "marquee 40s linear infinite",
        "glow-pulse": "glowPulse 7s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "accent-dot": "accentDot 3s ease-in-out infinite",
        "border-glow": "borderGlow 4s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 4s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        accentDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.7)" },
        },
        borderGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,169,110,0)" },
          "50%": { boxShadow: "0 0 20px 2px rgba(201,169,110,0.12)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
