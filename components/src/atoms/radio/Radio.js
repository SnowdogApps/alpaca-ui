export default {
  model: {
    prop: 'checkedValue',
    event: 'change'
  },
  props: {
    checkedValue: {
      type: [String, Object, Number, Boolean],
      default: null,
    },
    wrapperTag: {
      type: String,
      default: 'div'
    },
    optionTag: {
      type: String,
      default: 'div'
    },
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
