// @vue/component

export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    /**
     * Prop to handle v-model
     */
    checked: {
      type: Boolean,
      default: false
    },
    /**
     * Input value
     */
    value: {
      type: [String, Boolean],
      required: true
    },
    /**
     * Input id
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Input name
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Class for input
     */
    inputClass: {
      type: String,
      default: null
    }
  }
}
