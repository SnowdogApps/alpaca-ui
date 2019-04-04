export default {
  props: {
    specialPrice: {
      type: [String, Number],
      default: null
    },
    oldPrice: {
      type: [String, Number],
      default: null
    },
    ariaLabelSpecial: {
      type: String,
      default: 'Special price:'
    },
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
