// @vue/component
export default {
  props: {
    /**
     * Regular price value
     */
    regularPrice: {
      type: [String, Number],
      default: null
    },
    /**
     * Special price value
     */
    specialPrice: {
      type: [String, Number],
      default: null
    },
    /**
     * Aria label for special price
     */
    ariaLabelSpecialPrice: {
      type: String,
      default: null
    },
    /**
     * Aria label for old price
     */
    ariaLabelOldPrice: {
      type: String,
      default: null
    },
    /**
     * Special price item custom class
     */
    specialPriceCustomClass: {
      type: String,
      default: null
    },
    /**
     * Old price item custom class
     */
    oldPriceCustomClass: {
      type: String,
      default: null
    }
  }
}
