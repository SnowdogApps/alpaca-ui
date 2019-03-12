import AlpacaHeading from '@/components/01-globals/heading/Heading.vue'
import AlpacaButton from '@/components/02-elements/button/Button.vue'
import AlpacaDivider from '@/components/02-elements/divider/Divider.vue'
import AlpacaList from '@/components/02-elements/list/List.vue'
import AlpacaListItem from '@/components/02-elements/list/ListItem.vue'

export default {
  components: {
    AlpacaHeading,
    AlpacaButton,
    AlpacaDivider,
    AlpacaList,
    AlpacaListItem
  },
  props: {
    products: {
      type: Array,
      required: true
    },
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
    comparePageUrl: {
      type: String,
      required: false,
      default: 'compare'
    },
    noProductsMessage: {
      type: String,
      required: false,
      default: 'You have no items to compare.'
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
