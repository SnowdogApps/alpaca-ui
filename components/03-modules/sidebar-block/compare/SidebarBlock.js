import AlpacaHeading from '../../../01-globals/heading/Heading'
import AlpacaButton from '../../../02-elements/button/Button.vue'
import AlpacaDivider from '../../../02-elements/divider/Divider'

export default {
  components: {
    AlpacaHeading,
    AlpacaButton,
    AlpacaDivider
  },
  props: {
    heading: {
      type: String,
      required: false,
      default: 'Compare Products'
    },
    compareButton: {
      type: String,
      required: false,
      default: 'Compare'
    },
    clearAllButton: {
      type: String,
      required: false,
      default: 'Clear All'
    },
    products: {
      type: Array,
      required: true
    },
    comparePageUrl: {
      type: String,
      requited: false,
      default: 'compare'
    }
  },
  computed: {
    productsCount() {
      return this.products.length
    }
  },
  methods: {
    removeFromCompare() {
      this.$emit('removeFromCompare')
    },
    clearCompareList() {
      this.$emit('clearCompareList')
    }
  }
}
