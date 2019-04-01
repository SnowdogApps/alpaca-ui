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
    legendId: {
      type: String,
      required: true
    },
    legend: {
      type: String,
      required: true
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
