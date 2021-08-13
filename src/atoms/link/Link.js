import alpacaUIMixin from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  props: {
    tag: {
      type: String,
      default: 'a'
    }
  },
  config: {
    base: {
      link: [
        'no-underline', 'hover:underline', 'focus:underline',
        'leading-relaxed',
        'cursor-pointer'
      ]
    },
    primary: {
      link: [
        'text-primary', 'hover:text-blue-500', 'focus:text-blue-500'
      ]
    },
    inverted: {
      link: [
        'text-blue-500', 'hover:text-primary', 'focus:text-primary'
      ]
    },
    secondary: {
      link: [
        'text-secondary', 'hover:text-primary', 'focus:text-primary'
      ]
    }
  }
}
