import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaBadge from '../../atoms/badge/Badge.vue'
import AlpacaPrice from '../../02-elements/price/Price.vue'
import AlpacaImage from '../../atoms/image/Image.vue'
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
    addToCart(event) {
      this.$emit('addToCart', event)
    },
    addToWishList(event) {
      this.$emit('addToWishList', event)
    },
    addToCompare(event) {
      this.$emit('addToCompare', event)
    }
  }
}
