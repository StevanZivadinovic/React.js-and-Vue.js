const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    mode:'layers',
    content:['/public/**/*.html','./src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        emerald:colors.emerald,
        grey:colors.trueGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
