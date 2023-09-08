/** @type {import('tailwindcss').Config} */
module.exports = {

  //...
  plugins: [require("daisyui")],

  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
}