const { text } = require("stream/consumers")
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        ms: { min: "1320px" },
        mg: { min: "800px", max: "1320px" },
        xs: "425px",
      },
      colors: {
        background: "#0d121f",
        "background-opacity": "#0d121f61",
        "background-light": "#F3F5F7",
        primary: "#7C5CFC",
        secondary: "#1A202C",
        "text-light": "#F3F4F6",
        "text-secondary-dark": "#90A3BF",
        "text-secondary-light": "#596780",
        "text-dark": "#040815",
        "transparent-white": "rgba(255, 255, 255, 0.08)",
        description: "#5d596c",
      },

      perspective: {
        1200: "1200px",
      },

      transform: {
        "rotate-x": "-47.9deg",
        "rotate-y": "6.24deg",
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
