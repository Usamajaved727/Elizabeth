/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.liquid',  // for Shopify liquid files
    './src/**/*.{html,js}',  // for HTML and JS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

