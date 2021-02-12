module.exports = {
  AlpacaHeading: {
    base: {
      heading: [
        'leading-relaxed'
      ]
    },
    'first-level': {
      heading: [
        'text-3xl'
      ]
    },
    'second-level': {
      heading: [
        'text-2xl'
      ]
    },
    'third-level': {
      heading: [
        'text-xl'
      ]
    },
    'font-secondary': {
      heading: [
        'font-serif'
      ]
    }
  },
  AlpacaPrice: {
    base: {
      price: [
        'text-lg', 'font-bold'
      ],
      price__old: [
        'mr-3',
        'text-xs', 'md:text-sm', 'font-normal', 'text-gray-600', 'line-through'
      ],
      price__special: [
        'text-red', 'no-underline'
      ]
    }
  }
}
