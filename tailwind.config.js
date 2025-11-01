/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          700: '#0E6A68',
          800: '#0c5856',
          900: '#0a4644',
        },
        amber: {
          400: '#fbbf24',
          500: '#D7A945',
          600: '#c89a3d',
        }
      }
    },
  },
  plugins: [],
}