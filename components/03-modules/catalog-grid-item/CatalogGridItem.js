import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaBadge from '../../02-elements/badge/Badge.vue'
import AlpacaPrice from '../../02-elements/price/Price.vue'
import AlpacaImage from '../../02-elements/image/Image.vue'
import AlpacaSwatch from '../../02-elements/swatch/Swatch.vue'

export default {
  components: {
    AlpacaButton,
    AlpacaBadge,
    AlpacaImage,
    AlpacaPrice,
    AlpacaSwatch
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    product: {
      type: Object,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    price: {
      type: [String, Number],
      default: null
    },
    oldPrice: {
      type: [String, Number],
      default: null
    },
    specialPrice: {
      type: [String, Number],
      default: null
    },
    badge: {
      type: String,
      default: null
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
    addToCart(event) {
      this.$emit('addToCart', event)
    },
    addToWishList(event) {
      this.$emit('addToWishList', event)
    },
    compare(event) {
      this.$emit('compare', event)
    }
  }
}
