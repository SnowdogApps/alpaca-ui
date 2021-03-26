module.exports = {
  AlpacaLink: {
    base: {
      link: [
        'no-underline',
        'leading-relaxed',
        'hover:underline',
        'focus:underline',
        'hover:cursor-pointer'
      ]
    },
    primary: {
      link: [
        'text-primary',
        'hover:text-blue-400',
        'focus:text-blue-400'
      ]
    },
    inverted: {
      link: [
        'text-blue-400',
        'hover:text-primary',
        'focus:text-primary'
      ]
    },
    secondary: {
      link: [
        'text-secondary',
        'hover:text-primary',
        'focus:text-primary'
      ]
    }
  }
}
