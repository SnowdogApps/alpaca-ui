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
    variant: {
      type: String,
      default: ''
    },
    styles: {
      type: Object,
      default: () => ({
        base: {
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
        }
      })
    }
  },
  methods: {
    getClass (el) {
      const classes = []
      const baseStyles = this.styles.base
      const variantStyles = this.styles[this.variant]

      if (baseStyles) {
        classes.push(baseStyles[el] || '')
      }

      if (variantStyles) {
        classes.push(variantStyles[el] || '')
      }

      return classes.join(' ')
    }
  }
}
