import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3843D0", // Main blue
          dark: "#2832A0",
          light: "#A6B4FF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFEDD2", // Light beige
          foreground: "#111111",
        },
        accent: {
          DEFAULT: "#F24F00", // Orange accent
          light: "#FFCFCB",
        },
        soft: {
          green: "#F2FCE2",
          yellow: "#FEF7CD",
          orange: "#FEC6A1",
          purple: "#E5DEFF",
          pink: "#FFDEE2",
          peach: "#FDE1D3",
          blue: "#D3E4FD",
          gray: "#F1F0FB",
        },
        vivid: {
          purple: "#8B5CF6",
          pink: "#D946EF",
          orange: "#F97316",
          blue: "#0EA5E9",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;