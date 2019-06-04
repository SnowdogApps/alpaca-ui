// @vue/component
export default {
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
