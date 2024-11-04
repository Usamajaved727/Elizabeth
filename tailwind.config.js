/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.liquid',    // Shopify Liquid files
    './src/**/*.{js,css}', // Specify only the necessary directories and file types
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
