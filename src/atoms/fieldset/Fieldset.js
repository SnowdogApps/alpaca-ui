import alpacaUIMixin from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  props: {
    /**
     * Text of legend
     */
    legendText: {
      type: String,
      required: true
    },
    /**
     * Class of legend
     */
    legendHidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id () {
      return this.legendText.toLowerCase().replace(/ /g, '-')
    }
  },
  config: {
    base: {
      fieldset__legend: [
        'text-lg leading-relaxed'
      ]
    },
    hidden: {
      fieldset__legend: [
        'sr-only' // should be added when legendHidden = true
      ]
    }
  }
}
