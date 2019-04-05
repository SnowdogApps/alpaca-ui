import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import ABadge from '../../atoms/badge/Badge.vue'
import APrice from '../../atoms/price/Price.vue'
import AImage from '../../atoms/image/Image.vue'
import ASwatch from '../../02-elements/swatch/Swatch.vue'

export default {
  components: {
    AIcon,
    AButton,
    ABadge,
    AImage,
    APrice,
    ASwatch
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
