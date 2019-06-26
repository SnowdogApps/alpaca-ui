// @vue/component

export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    /**
     * To handle v-model
     */
    checked: {
      type: [String, Number, Boolean],
      default: null
    },
    /**
     * Input name
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Input value
     */
    value: {
      type: [String, Number, Boolean],
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
     * Custom input class
     */
    inputClass: {
      type: String,
      default: null
    }
  }
}
