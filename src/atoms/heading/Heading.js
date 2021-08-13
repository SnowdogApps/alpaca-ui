import alpacaUIMixin from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  props: {
    /**
     * To define tag for component
     */
    tag: {
      type: String,
      required: true
    }
  },
  config: {
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
  }
}
