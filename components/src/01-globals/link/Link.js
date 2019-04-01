export default {
  props: {
    href: {
      type: String,
      required: true
    },
    inverted: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: null
    }
  }
}
