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
        hiwi: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#E54E2A',
          primary: '#D03B1E', // AA-compliant Berbere Terracotta primary CTA & brand text
          hover: '#B22F16',
          bright: '#F25C05',  // Accent highlight on dark bands
          amber: '#9A3412',   // Warm dark-amber readable ink on cream/white
          gold: '#EAA228',    // Ethiopian saffron gold accent on dark surfaces
          dark: '#1C1917',    // Deep warm charcoal
          charcoal: '#262220',
          cream: '#FFFBF5',   // Warm hospitality canvas
          stone: '#F5F0E8',   // Elevated muted warm surface
          border: '#E5DDD3',  // Warm hairline border
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 28px -6px rgba(208, 59, 30, 0.16)',
        'warm-lg': '0 20px 40px -12px rgba(28, 25, 23, 0.18)',
        'card': '0 2px 12px -2px rgba(28, 25, 23, 0.06)',
        'card-hover': '0 16px 32px -10px rgba(28, 25, 23, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
