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
      colors: {
        'primary': '#1f2937',
        'gray-1': '#d1d5db',
        'gray-2': '#9ca3af'
      },
    },
  },
  plugins: [],
}

