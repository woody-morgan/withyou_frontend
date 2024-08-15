/** @type {import('tailwindcss').Config} */
// generate custom color using https://tailwindcolorgenerator.com/
// eslint-disable-next-line @typescript-eslint/no-var-requires
const appConfig = require('./src/core/config/appConfig')

module.exports = {
  mod: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: appConfig.mobileAppMaxWidth,
    },
    extend: {
      fontFamily: {
        'PyeongChangPeace-Bold': ['PyeongChangPeace-Bold', 'sans-serif'],
        Pretendard: ['Pretendard', 'sans-serif'],
      },
      margin: {
        center: '0 auto',
      },
      spacing: {
        'gb-header': appConfig.headerHeight,
        'bt-nav': appConfig.bottomNavigationHeight,
        'side-padding': appConfig.sidePadding,
      },
      maxWidth: {
        'mobile-app': appConfig.mobileAppMaxWidth,
      },

      colors: {
        'primary-bg': appConfig.backgroundColor,
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
          50: '#ff937e',
          100: '#ff8974',
          200: '#f77f6a',
          300: '#ed7560',
          400: '#e36b56',
          500: '#d9614c',
          600: '#cf5742',
          700: '#c54d38',
          800: '#bb432e',
          900: '#b13924',
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
        gray: {
          0: '#ffffff',
          50: '#f6f9fb',
          100: '#f6f9fb',
          200: '#e3e8ed',
          300: '#d5dde5',
          400: '#c5cdd5',
          500: '#a3aab2',
          600: '#81878f',
          700: '#62666c',
          800: '#4b4d53',
          900: '#2f3136',
          1000: '#191a1d',
        },
        'wy-blue': {
          100: '#f7f9fe',
          300: '#dce5ff',
          500: '#5a80e5',
        },
        'wy-red': {
          100: '#fcf4f4',
          300: '#f6dedd',
          500: '#e2918d',
        },
        'wy-yellow': {
          100: '#fef9f3',
          300: '#fbe7d0',
          500: '#f4c48a',
        },
        'wy-kakao-yellow': '#fee500',
        'wy-google-gray': '#eef2f6',
        'wy-apple-black': '#2f3136',
      },
    },
  },
  plugins: [],
}
