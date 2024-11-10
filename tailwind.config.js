// import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': '2.25rem', // 36px
        'h2': '1.875rem', // 30px
        'h3': '1.5rem',   // 24px
        'h4': '1.25rem',  // 20px
      },
      fontWeight: {
        'h1': '700',      // Bold
        'h2': '600',      // Semi-bold
        'h3': '500',      // Medium
        'h4': '500',      // Medium
      },
      lineHeight: {
        'h1': '1.2',
        'h2': '1.3',
        'h3': '1.4',
        'h4': '1.5',
      },
      colors: {
        'primary': '#1f2937',
        'gray-outline': '#d1d5db',
        'gray-1': '#f3f4f6',
        'gray-2': '#9ca3af',
        'gray-3': '#6b7280'
      },
      boxShadow: {
        'top': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}

