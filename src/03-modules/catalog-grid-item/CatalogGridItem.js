// @vue/component
export default {
  props: {
    tag: {
      type: String,
      default: 'li'
    },
    product: {
      type: Object,
      required: true
    },
    compareAriaLabel: {
      type: String,
      default: 'Add to compare'
    },
    wishListAriaLabel: {
      type: String,
      default: 'Add to Wish List'
    },
    compareIcon: {
      type: String,
      default: 'compare'
    },
    wishListIcon: {
      type: String,
      default: 'heart'
    }
  },
  methods: {
    addToCart (event) {
      this.$emit('addToCart', event)
    },
    addToWishList (event) {
      this.$emit('addToWishList', event)
    },
    addToCompare (event) {
      this.$emit('addToCompare', event)
    }
  }
}
