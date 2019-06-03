import AHeading from '../../atoms/heading/Heading.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import ADivider from '../../templates/divider/Divider.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'

// @vue/component
export default {
  components: {
    AHeading,
    AIcon,
    AButton,
    ADivider,
    AList,
    AListItem
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
    productsCount () {
      return this.products.length
    }
  },
  methods: {
    removeFromCompare () {
      this.$emit('removeFromCompare')
    },
    clearCompareList () {
      this.$emit('clearCompareList')
    }
  }
}
