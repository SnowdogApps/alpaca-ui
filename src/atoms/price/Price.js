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
        primary: {
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
        },
        secondary: {
          price__special: `
            text-blue
          `
        }
      })
    }
  },
  methods: {
    getClass (el) {
      let classes = this.styles.primary[el]

      if (this.variant) {
        classes += this.styles[this.variant][el] || ''
      }

      return classes
    }
  }
}
