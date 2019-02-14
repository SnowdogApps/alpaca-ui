export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    type: {
      type: String,
      default: null,
      validate: type => ['new', 'sale'].indexOf(type)
    }
  }
}
