import alpacaUIMixin from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  props: {
    /**
     * To use another tag instead of `div`
     */
    tag: {
      type: String,
      default: 'div'
    }
  },
  config: {
    base: {
      badge: [
        'inline-flex', 'justify-center',
        'px-3',
        'font-bold', 'text-xs', 'leading-snug', 'uppercase'
      ]
    },
    primary: {
      badge: [
        'text-white', 'bg-black'
      ]
    },
    secondary: {
      badge: [
        'text-primary', 'bg-white'
      ]
    }
  }
}
