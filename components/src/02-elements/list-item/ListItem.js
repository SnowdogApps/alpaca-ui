// @vue/component
export default {
  props: {
    elementTag: {
      type: String,
      default: 'li'
    },
    defaultClass: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
