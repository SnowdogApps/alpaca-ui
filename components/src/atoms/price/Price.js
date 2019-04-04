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
      default: 'Special price:'
    },
    /**
     * Aria label for old price
     */
    ariaLabelOld: {
      type: String,
      default: 'Old price:'
    }
  },
  computed: {
    specialPriceAriaLabel() {
      return `${this.ariaLabelSpecial} ${this.specialPrice}`
    },
    oldPriceAriaLabel() {
      return `${this.ariaLabelOld} ${this.oldPrice}`
    }
  }
}