import alpacaUIMixin from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  config: {
    base: {
      loader: [
        'inline-block',
        'absolute', 'top-0', 'left-0',
        'w-full', 'h-full'
      ],
      loader__circle: [
        'absolute', 'inset-0',
        'm-auto',
        'border-4', 'border-transparent', 'rounded-full',
        'animate-spin'
      ]
    },
    primary: {
      loader__circle: [
        'border-t-secondary',
      ]
    },
    small: {
      loader__circle: [
        'h-6', 'w-6'
      ]
    },
    medium: {
      loader__circle: [
        'h-8', 'w-8'
      ]
    },
    large: {
      loader__circle: [
        'h-12', 'w-12'
      ]
    },
    'x-large': {
      loader__circle: [
        'h-14', 'w-14'
      ]
    }
  }
}
