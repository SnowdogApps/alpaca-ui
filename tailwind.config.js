module.exports = {
  purge: [
    'src/**/*.vue'
  ],
  theme: {
    extend: {
      minHeight: {
        24: '24px'
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
    colors: {
      white: '#fff',
      black: '#000',
      red: '#e62325',
      orange: '#fab216',
      yellow: '#ffd500',
      green: '#31e37d',
      blue: '#0075e4',
      'bright-sky-blue': '#00b8ff',
      'seafoam-blue': '#77ccb9',
      teal: '#0194ab',
      pink: '#ff5b77',
      gray: {
        100: '#f7f7f9',
        200: '#fbfbfb',
        300: '#eaeaea',
        400: '#bdbdbd',
        500: '#d8d8d8',
        600: '#6e7577',
        700: '#393243',
        800: '#1a1b1d'
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: theme('colors.white'),
      secondary: theme('colors.gray.200'),
      dark: theme('colors.gray.800')
    }),
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.500'),
      primary: theme('colors.gray.500'),
      secondary: theme('colors.gray.600'),
      dark: theme('colors.gray.800'),
      light: theme('colors.gray.300')
    }),
    textColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.800'),
      primary: theme('colors.gray.800'),
      secondary: theme('colors.gray.600')
    }),
    fill: theme => ({
      ...theme('colors'),
      dark: theme('colors.gray.800'),
      light: theme('colors.gray.200')
    }),
    maxWidth: {
      content: '1328px'
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    float: false
  }
}
