/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'primary': {
        100: '#D5EBF8',
        900: '#259BD7'
      },
      'secundary': {
        100: '#F6FBFE',
        200: '#F0F5F8',
        300: '#F5F5F5'
      },
      'gray': {
        100: '#d3d3d3',
        900: '#474747',
      },
      'orange': {
        100: '#FFE6C0',
        900: '#FF9900'
      },
      'green': {
        100: '#D4FFC0',
        300: '#22C55E',
        900: '#27C100',
      },
      'blue-dark': {
        100: '#2929e782',
        900: '#2929e7',
      },
      'white': '#FFFFFF',
      'black': '#000000',
      'red': {
        300: '#EF4444'
      }
    },
    fontFamily: {
      'inter': ['"Inter"', 'cursive'],
    },
    fontSize: {
      sm: '14px',
      md: '16px',
      xl: '24px',
      '2xl': '36px'
    },
    extend: {
      width: {
        '155': '155px',
        '188': '188px',
      },
      height: {
        '50': '50px',
        '60': '60px',
      }
    }

  },
  plugins: [],
}

