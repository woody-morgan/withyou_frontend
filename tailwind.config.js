/** @type {import('tailwindcss').Config} */
// generate custom color using https://tailwindcolorgenerator.com/
// eslint-disable-next-line @typescript-eslint/no-var-requires
const appMetadata = require('./src/config/appMetadata')

module.exports = {
  mod: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        center: '0 auto',
      },
      spacing: {
        'gb-header': appMetadata.headerHeight,
        'bt-nav': appMetadata.bottomNavigationHeight,
        'side-padding': appMetadata.sidePadding,
      },
      maxWidth: {
        'mobile-app': appMetadata.mobileAppMaxWidth,
      },
      colors: {
        'primary-bg': appMetadata.backgroundColor,
        primary: {
          300: '#fffff6',
          400: '#fff8ec',
          500: '#f8eee2',
          600: '#eee4d8',
          700: '#e4dace',
          800: '#dad0c4',
          900: '#d0c6ba',
        },
        secondary: {
          300: '#fffff9',
          400: '#ffffef',
          500: '#fff8e5',
          600: '#f5eedb',
          700: '#ebe4d1',
          800: '#e1dac7',
          900: '#d7d0bd',
        },
        link: {
          50: '#35f0ff',
          100: '#2be6ff',
          200: '#21dcff',
          300: '#17d2ff',
          400: '#0dc8ff',
          500: '#03befc',
          600: '#00b4f2',
          700: '#00aae8',
          800: '#00a0de',
          900: '#0096d4',
        },
      },
    },
  },
  plugins: [],
}
