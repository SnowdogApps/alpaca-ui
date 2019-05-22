import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import ABadge from '../../atoms/badge/Badge.vue'
import APrice from '../../atoms/price/Price.vue'
import AImage from '../../atoms/image/Image.vue'
import ASwatch from '../../02-elements/swatch/Swatch.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'

// @vue/component
export default {
  components: {
    AIcon,
    AButton,
    ABadge,
    AImage,
    APrice,
    ASwatch,
    AList,
    AListItem
  },
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
     * Product badge text
     */
    badgeText: {
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
