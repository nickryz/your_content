/** @type {import('tailwindcss').Config} */

import theme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'Arial', 'sans-serif'],
      title: ['Yanone Kaffeesatz', 'sans-serif']
    },
    container: {
      padding: '1.25rem',
      center: true
    },
    extend: {
      fontSize: {
        's-4xl': [`calc(${theme.fontSize['4xl'][0]} + 1.4vw)`, '1'],
        's-5xl': [`clamp(${theme.fontSize['5xl'][0]},11.2vw,${theme.fontSize['9xl'][0]})`, '1']
      },
      spacing: {
        'header-h': 'var(--header-height)',
        'header-h-0.5': 'calc(var(--header-height) * 0.5)'
      },
      borderWidth: {
        0.5: '0.5px'
      },
      colors: {
        accent: '#d52c47',
        secondary: '#1D2145',
        light: 'var(--main-font-color)',
        'light-10': 'var(--light-font-color-1)'
      }
    }
  },

  plugins: []
}
