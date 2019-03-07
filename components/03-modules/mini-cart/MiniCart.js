import AlpacaHeading from '../../01-globals/heading/Heading.vue'
import AlpacaList from "../../02-elements/list/List.vue"
import AlpacaButton from "../../02-elements/button/Button.vue"
import AlpacaProductItem from "../../03-modules/product-item/ProductItem.vue"

export default {
  components: {
    AlpacaHeading,
    AlpacaList,
    AlpacaButton,
    AlpacaProductItem
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    totals: {
      type: Array[Object],
      required: true
    },
    removeButton: {
      type: String,
      default: ''
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
    },
    taxAmount: {
      type: [String, Number],
      default: 0
    }
  },
  methods: {
    returnToShopping() {
      this.$emit('returnToShopping')
    },
    goToCheckout() {
      this.$emit('goToCheckout')
    },
    onRemove(val) {
      this.$emit("remove", val)
    }
  }
}
