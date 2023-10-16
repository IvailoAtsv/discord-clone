/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: '#7289DA',
        lighterTheme: '#5D3FD3',
        primary: '#202225',
        secondary: '#5865f2',
        gray: colors.trueGray,
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: 'f2f3f5',
        },
      }

    },
  },
  plugins: [],
}

