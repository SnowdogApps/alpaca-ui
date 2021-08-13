import alpacaUIMixin from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  config: {
    base: {
      label: [
        'leading-relaxed'
      ]
    },
    primary: {
      label: [
        'text-gray-400'
      ]
    },
    hidden: {
      label: [
        'sr-only'
      ]
    }
  }
}
