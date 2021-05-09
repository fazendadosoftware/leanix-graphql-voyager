const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Axiforma-Regular', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
