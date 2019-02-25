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
    }
  },
  methods: {
    setAriaLabel(type) {
      if (type === this.specialPrice) {
        return `${this.ariaLabelSpecial} ${this.specialPrice}`
      }
      if (type === this.oldPrice) {
        return `${this.ariaLabelOld} ${this.oldPrice}`
      }
      return `${this.ariaLabelPrice} ${this.price}`
    }
  }
}
