import alpacaUIMixin from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  props: {
    /**
     * Container tag
     */
    tag: {
      type: String,
      default: 'main'
    }
  },
  config: {
    base: {
      container: [
        'container', 'mx-auto'
      ]
    }
  }
}
