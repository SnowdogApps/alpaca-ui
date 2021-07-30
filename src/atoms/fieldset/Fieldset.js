import getClass from '../../../utils/helpers/get-class.js'

export default {
  mixins: [getClass],
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
  data () {
    return {
      config: {
        base: {
          'fieldset-legend': [
            'text-lg leading-relaxed',
            { 'sr-only': this.legendHidden }
          ]
        }
      }
    }
  }
}
