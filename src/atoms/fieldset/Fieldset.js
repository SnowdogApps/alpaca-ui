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
    }
  },
  computed: {
    id () {
      return this.legendText.toLowerCase().replace(/ /g, '-')
    }
  }
}
