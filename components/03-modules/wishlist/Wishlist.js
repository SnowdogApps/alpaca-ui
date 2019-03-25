import AlpacaList from "../../02-elements/list/List.vue"
import AlpacaProductItem from "../../03-modules/product-item/ProductItem.vue"

export default {
  components: {
    AlpacaList,
    AlpacaProductItem
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
    onRemove(val) {
      this.$emit("remove", val)
    },
  }
}
