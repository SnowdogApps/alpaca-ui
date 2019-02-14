export default {
  props: {
    title: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    linkClass: {
      type: String,
      default: null
    },
    isLabelClass: {
      type: Boolean,
      default: true
    }
  }
}
