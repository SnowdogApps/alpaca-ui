import alpacaUIMixin from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  props: {
    /**
     * To use another tag instead of `p`
     */
    tag: {
      type: String,
      default: 'p'
    }
  },
  config: {
    base: {
      paragraph: [
        'leading-loose'
      ]
    },
    primary: {
      paragraph: [
        'text-primary'
      ]
    }
  }
}
