/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato'],
        haptik: ['GT Haptik'],
        arial: ['Arial'],
        moglandemo: ['MoglanDemo'],
      },
    },
  },
  plugins: [],
}
