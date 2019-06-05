// @vue/component
export default {
  props: {
    /**
     * Special price value
     */
    specialPrice: {
      type: [String, Number],
      default: null
    },
    /**
     * Old price value
     */
    oldPrice: {
      type: [String, Number],
      default: null
    },
    /**
     * Aria label for special price
     */
    ariaLabelSpecial: {
      type: String,
      default: null
    },
    /**
     * Aria label for old price
     */
    ariaLabelOld: {
      type: String,
      default: null
    }
  },
  computed: {
    specialPriceAriaLabel () {
      return `${this.ariaLabelSpecial} ${this.specialPrice}`
    },
    oldPriceAriaLabel () {
      return `${this.ariaLabelOld} ${this.oldPrice}`
    }
  }
}
