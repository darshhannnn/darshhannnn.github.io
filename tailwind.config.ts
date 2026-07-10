import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
      },
      colors: {
        background: "#09090b",
        foreground: "#fafafa",
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.02)",
          foreground: "#fafafa",
        },
        popover: {
          DEFAULT: "#09090b",
          foreground: "#fafafa",
        },
        primary: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#8b5cf6",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#1a1a2e",
          foreground: "#a1a1aa",
        },
        accent: {
          DEFAULT: "#a855f7",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#f43f5e",
          foreground: "#ffffff",
        },
        border: "rgba(255, 255, 255, 0.06)",
        input: "#1a1a24",
        ring: "#6366f1",
        chart: {
          "1": "#6366f1",
          "2": "#06b6d4",
          "3": "#f59e0b",
          "4": "#10b981",
          "5": "#ec4899",
        },
        sidebar: {
          DEFAULT: "#09090b",
          foreground: "#fafafa",
          primary: "#6366f1",
          "primary-foreground": "#ffffff",
          accent: "#1a1a2e",
          "accent-foreground": "#fafafa",
          border: "rgba(255, 255, 255, 0.06)",
          ring: "#6366f1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          from: { 
            opacity: "0" 
          },
          to: { 
            opacity: "1" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
