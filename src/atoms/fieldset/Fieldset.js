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
      'fieldset-legend': [
        'text-lg leading-relaxed',
        { 'sr-only': this.legendHidden }
      ]
    }
  }
}
