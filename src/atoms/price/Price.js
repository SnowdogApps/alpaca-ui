import alpacaUIMixin from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  props: {
    /**
     * Regular price value
     */
    regularPrice: {
      type: [String, Number],
      default: null
    },
    /**
     * Special price value
     */
    specialPrice: {
      type: [String, Number],
      default: null
    },
    /**
     * Aria label for special price
     */
    ariaLabelSpecialPrice: {
      type: String,
      default: null
    },
    /**
     * Aria label for old price
     */
    ariaLabelOldPrice: {
      type: String,
      default: null
    }
  },
  config: {
    base: {
      price: [
        'text-lg', 'font-bold'
      ],
      price__old: [
        'mr-3',
        'text-xs', 'md:text-sm', 'font-normal', 'text-gray-500', 'line-through'
      ],
      price__special: [
        'text-red-300', 'no-underline'
      ]
    }
  }
}
