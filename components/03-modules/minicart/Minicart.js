import uniqueId from 'lodash.uniqueid'
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
    taxAmount: {
      type: [String, Number],
      default: 0
    },
    products: {
      type: Array[Object],
      required: true
    },
    totals: {
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
    getProductsWithKey() {
      return this.products.map(product => ({ key: uniqueId("minicartItem"), product }))
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
