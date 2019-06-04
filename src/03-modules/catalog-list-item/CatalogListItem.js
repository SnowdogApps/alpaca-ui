// @vue/component
export default {
  props: {
    tag: {
      type: String,
      default: 'section'
    },
    href: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    badgeText: {
      type: String,
      default: null
    },
    badgeType: {
      type: String,
      default: null
    },
    textSwatch: {
      type: Array,
      default: null
    },
    iconSwatch: {
      type: Array,
      default: null
    },
    addToCartButton: {
      type: String,
      default: null
    },
    buttonWishlist: {
      type: String,
      default: 'heart'
    },
    ariaLabelCompare: {
      type: String,
      default: 'Add to compare'
    },
    ariaLabelWishList: {
      type: String,
      default: 'Add to wish list'
    },
    buttonCompare: {
      type: String,
      default: 'compare'
    }
  },
  methods: {
    addToCart (event) {
      this.$emit('addToCart', event)
    },
    addToWishList (event) {
      this.$emit('addToWishList', event)
    },
    compare (event) {
      this.$emit('compare', event)
    }
  }
}
