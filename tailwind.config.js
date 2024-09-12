/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",   // Include all .liquid files in the layout folder
    "./snippets/**/*.liquid", // Include all .liquid files in the snippets folder
    "./templates/**/*.liquid", // Include any other relevant liquid files in the templates folder
    "./sections/**/*.liquid",  // Sections folder for dynamic sections
    "./assets/**/*.js",        // Any JavaScript files in the assets folder
    "./assets/**/*.css",        // Any css files in the assets folder
    "./**/*.{html,js}"         // HTML and JS files at any level
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}