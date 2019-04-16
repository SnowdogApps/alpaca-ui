// @vue/component
export default {
  props: {
    elements: {
      type: Array,
      required: true
    },
    labelClass: {
      type: String,
      default: null
    },
    valueClass: {
      type: String,
      default: null
    }
  }
}
