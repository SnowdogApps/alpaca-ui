export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    type: {
      type: String,
      default: null,
      validate: type => ['new', 'discount'].indexOf(type)
    }
  }
}
