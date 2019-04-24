import AHeading from '../../atoms/heading/Heading.vue'
import AList from '../../atoms/list/List.vue'
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../02-elements/input/Input.vue'
import AProductItem from '../../03-modules/product-item/ProductItem.vue'

// @vue/component
export default {
  components: {
    AHeading,
    AList,
    AButton,
    AInput,
    AProductItem
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
  computed: {
    filteredTotals () {
      return this.totals.filter(total => total.code !== 'grand_total')
    },
    grandTotal () {
      return this.totals.find(total => total.code === 'grand_total')
    }
  },
  methods: {
    returnToShopping () {
      this.$emit('returnToShopping')
    },
    goToCheckout () {
      this.$emit('goToCheckout')
    }
  }
}
