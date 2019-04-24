import AList from '../../atoms/list/List.vue'
import AProductItem from '../../03-modules/product-item/ProductItem.vue'

// @vue/component
export default {
  components: {
    AList,
    AProductItem
  },
  props: {
    products: {
      type: Array[Object],
      required: true
    },
    removeButton: {
      type: String,
      default: null
    }
  },
  methods: {
    onRemove (val) {
      this.$emit('remove', val)
    }
  }
}
