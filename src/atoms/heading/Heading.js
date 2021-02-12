export default {
  props: {
    tag: {
      type: String,
      required: true
    },
    variant: {
      type: [String, Array],
      default: ''
    }
  }
}
