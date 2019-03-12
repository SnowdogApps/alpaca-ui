import AlpacaHeading from '@alpaca-storybook/components/01-globals/heading/Heading.vue'
import AlpacaList from "@alpaca-storybook/components/02-elements/list/List.vue"
import AlpacaButton from "@alpaca-storybook/components/02-elements/button/Button.vue"
import AlpacaProductItem from "@alpaca-storybook/components/03-modules/product-item/ProductItem.vue"

export default {
  components: {
    AlpacaHeading,
    AlpacaList,
    AlpacaButton,
    AlpacaProductItem
  },
  props: {
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
  }
}
