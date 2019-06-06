// @vue/component
export default {
  props: {
    /**
     * Product id
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Product name
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Product url
     */
    url: {
      type: String,
      required: true
    },
    /**
     * Product image url
     */
    imageUrl: {
      type: String,
      required: true
    },
    /**
     * Product standard price
     */
    price: {
      type: String,
      required: true
    },
    /**
     * Product special price
     */
    specialPrice: {
      type: String,
      required: true
    },
    /**
     * Product old price
     */
    oldPrice: {
      type: String,
      required: true
    },
    /**
     * Product badge text
     */
    badgeText: {
      type: String,
      default: null
    },
    /**
     * Product add to cart button default text
     */
    addToCartText: {
      type: String,
      default: 'Add to cart'
    }
  },
  methods: {
    addToCart (event) {
    /**
     * Triggered when product is added to cart
     * @type {Event}
     */
      this.$emit('addToCart', event)
    },
    addToWishList (event) {
    /**
     * Triggered when product is added to wishlist
     * @type {Event}
     */
      this.$emit('addToWishList', event)
    },
    /**
     * Triggered when product is added to compare
     * @type {Event}
     */
    addToCompare (event) {
      this.$emit('addToCompare', event)
    }
  }
}
