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
    },
    styles: {
      type: Object,
      default: () => ({
        price: `
          text-lg font-bold
        `,
        price__old: `
          mr-3
          text-xs md:text-sm font-normal text-gray-600 line-through
        `,
        price__special: `
          text-red no-underline
        `
      })
    }
  },
  methods: {
    getClass (el) {
      return this.styles[el]
    }
  }
}
