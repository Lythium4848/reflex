const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        backgrounddark: '#121212',
        backgroundlight: '#f2f2f2',
        primary: '#ef505d',
        steam: '#171a21',
        blurple: '#5865F2',

        dark: {
          background: '#121212',
          secondary: '#262626'
        },

        light: {
          background: '#f2f2f2',
          secondary: '#cbd5e1'
        }
      }

    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
module.exports = tailwindConfig