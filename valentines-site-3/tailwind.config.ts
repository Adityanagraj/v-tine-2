import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "accent-rose": "#c9a0a8",
        "accent-gold": "#d4af37",
        "accent-wine": "#722f37",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        "card": "0 4px 24px -4px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,175,55,0.08)",
        "card-hover": "0 8px 32px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.15)",
        "elegant": "0 25px 50px -12px rgba(0,0,0,0.5)",
      },
      animation: {
        "shimmer": "shimmer 2s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
