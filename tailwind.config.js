var flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default
var plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*{vue,html,js}'
    ]
  },
  theme: {
    extend: {
      maxWidth: {
        content: '1328px'
      },
      colors: {
        gray: {
          100: '#dde1e6',
          200: '#c1c7cd',
          300: '#a2a9b0',
          400: '#6e767c',
          500: '#121619'
        },
        coral: {
          100: '#ffefec',
          200: '#f5dbd7',
          300: '#deb9b3',
          400: '#956760'
        },
        red: {
          100: '#ffd7d9',
          200: '#ff8389',
          300: '#da1e28'
        },
        blue: {
          100: '#d0e2ff',
          200: '#78a9ff',
          300: '#0043ce'
        },
        green: {
          100: '#cfe8cc',
          200: '#6eb966',
          300: '#0e8a00'
        },
        yellow: {
          100: '#fcf3d1',
          200: '#f7da76',
          300: '#f1c21b'
        },
        orange: {
          100: '#ffe6d5',
          200: '#ffb580',
          300: '#ff832b'
        },
        focus: '#00b8ff'
      }
    },
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      xxl: '1600px'
    },
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      sans: ['Work Sans', 'sans-serif'],
      mono: ['menlo', 'monaco', 'consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: theme('colors.white'),
      secondary: theme('colors.gray.200'),
      dark: theme('colors.gray.500')
    }),
    borderColor: theme => ({
      ...theme('colors'),
      primary: theme('colors.coral.300'),
      secondary: theme('colors.gray.500'),
      form: theme('colors.gray.200'),
      dark: theme('colors.gray.500'),
      light: theme('colors.gray.200')
    }),
    textColor: theme => ({
      ...theme('colors'),
      primary: theme('colors.gray.500'),
      secondary: theme('colors.gray.400')
    }),
    placeholderColor: theme => ({
      primary: theme('colors.gray.400'),
    }),
    fill: theme => ({
      ...theme('colors'),
      dark: theme('colors.gray.500'),
      light: theme('colors.gray.200')
    }),
    outline: theme => ({
      focus: [`2px solid ${theme('colors.focus')}`, '-1px']
    })
  },
  variants: {},
  plugins: [
    plugin(function({ addUtilities, theme, variants }) {
      let colors = flattenColorPalette(theme('borderColor'))

      if (theme.extend && theme.extend.colors) {
          colors = Object.assign(colors, theme.extend.colors)
      }

      const colorMap = Object.keys(colors)
          .map(color => ({
              [`.border-t-${color}`]: {borderTopColor: colors[color]}
          }))
      const utilities = Object.assign({}, ...colorMap)

      addUtilities(utilities, variants('borderColor'))
    })
  ],
  corePlugins: {}
}
