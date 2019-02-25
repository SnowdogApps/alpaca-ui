import uniqueId from 'lodash.uniqueid'
import AlpacaHeading from '../../01-globals/heading/Heading.vue'
import AlpacaList from "../../02-elements/list/List.vue"
import AlpacaButton from "../../02-elements/button/Button.vue"
import AlpacaCartListItem from "../../03-modules/cart-list-item/CartListItem.vue"

export default {
  components: {
    AlpacaHeading,
    AlpacaList,
    AlpacaButton,
    AlpacaCartListItem
  },
  props: {
    taxAmount: {
      type: [String, Number],
      default: 0
    },
    cartItems: {
      type: Array[Object],
      required: true
    },
    summaryTitle: {
      type: String,
      required: true
    },
    returnToShoppingButton: {
      type: String,
      required: true
    },
    goToCheckoutButton: {
      type: String,
      required: true
    }
  },
  computed: {
    getImageWithKey() {
      return this.cartItems.map(item => ({ key: uniqueId("carItem"), item }))
    }
  },
  methods: {
    returnToShopping() {
      this.$emit('returnToShopping')
    },
    goToCheckout() {
      this.$emit('goToCheckout')
    }
  }
}
