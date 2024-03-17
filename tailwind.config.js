/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: '432px',
      sm: '480px',
      md: '832px',
      lg: '976px',
      xl: '1440px',
    }
  },
  plugins: [],
}