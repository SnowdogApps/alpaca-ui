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
    removeButton: {
      type: String,
      default: ''
    },
    taxAmount: {
      type: [String, Number],
      default: 0
    },
    discountLabel: {
      type: String,
      default: 'Discount code'
    },
    discountButton: {
      type: String,
      default: 'Apply'
    }
  },
  data () {
    return {
      discountCode: null
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
    },
    applyDiscount () {
      this.$emit('applyDiscount', this.discountCode)
    }
  }
}
