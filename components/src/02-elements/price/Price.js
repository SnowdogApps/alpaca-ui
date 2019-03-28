export default {
  props: {
    price: {
      type: [String, Number],
      default: null
    },
    specialPrice: {
      type: [String, Number],
      default: null
    },
    oldPrice: {
      type: [String, Number],
      default: null
    },
    regularPriceClass: {
      type: String,
      default: ''
    },
    specialPriceClass: {
      type: String,
      default: ''
    },
    oldPriceClass: {
      type: String,
      default: ''
    },
    ariaLabelPrice: {
      type: String,
      default: 'Price:'
    },
    ariaLabelSpecial: {
      type: String,
      default: 'Special price:'
    },
    ariaLabelOld: {
      type: String,
      default: 'Old price:'
    },
    large: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    specialPriceAriaLabel() {
      return `${this.ariaLabelSpecial} ${this.specialPrice}`
    },
    oldPriceAriaLabel() {
      return `${this.ariaLabelOld} ${this.oldPrice}`
    },
    normalPriceAriaLabel() {
      return `${this.ariaLabelPrice} ${this.price}`
    }
  }
}
