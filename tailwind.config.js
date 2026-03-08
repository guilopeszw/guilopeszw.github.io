/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "SF Pro Text", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
