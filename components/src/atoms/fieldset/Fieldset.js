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
    }
  }
}
