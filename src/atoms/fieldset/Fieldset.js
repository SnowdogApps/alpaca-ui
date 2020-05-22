// @vue/component
export default {
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
    legendClass: {
      type: String,
      default: null
    },
    /**
     * Visually hide legend
     */
    hideLegend: {
      type: Boolean,
      default: false
    },
    /**
     * Disable content of fieldset
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id () {
      return this.legendText.toLowerCase().replace(/ /g, '-')
    }
  }
}
