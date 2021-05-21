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
    outline: theme => ({
      focus: [`2px solid ${theme('colors.bright-sky-blue')}`, '-1px']
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
