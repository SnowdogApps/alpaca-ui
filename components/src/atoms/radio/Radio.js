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
    /**
     * Wrapper tag
     */
    wrapperTag: {
      type: String,
      default: 'div'
    },
    /**
     * Array with radio options. Every object should have keys: id, value and label.
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Input name
     */
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    change(ev) {
      /**
       * Event for change input
       * @type {Event}
       */
      this.$emit('change', ev.target.value)
    }
  }
}
