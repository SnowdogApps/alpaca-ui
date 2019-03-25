import AlpacaLink from '../../01-globals/link/Link.vue'
import AlpacaImage from '../../02-elements/image/Image.vue'
import AlpacaBadge from '../../02-elements/badge/Badge.vue'
import AlpacaSwatch from '../../02-elements/swatch/Swatch.vue'
import AlpacaPrice from '../../02-elements/price/Price.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'

export default {
  components: {
    AlpacaLink,
    AlpacaImage,
    AlpacaBadge,
    AlpacaSwatch,
    AlpacaPrice,
    AlpacaButton
  },
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
