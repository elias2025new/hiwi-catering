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
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          primary: '#F25C05', // Official Brand Orange from flyer
          hover: '#dc4e02',
          dark: '#111827',
          charcoal: '#1f2937',
          gold: '#F59E0B',
          cream: '#FFFBF5',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -5px rgba(242, 92, 5, 0.15)',
        'warm-lg': '0 20px 40px -10px rgba(242, 92, 5, 0.25)',
      }
    },
  },
  plugins: [],
} satisfies Config;
