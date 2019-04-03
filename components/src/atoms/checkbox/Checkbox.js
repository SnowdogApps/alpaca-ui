import AIcon from '../../atoms/icon/Icon.vue'

export default {
  components: { AIcon },
  model: {
    prop: 'selectedValue',
    event: 'change'
  },
  props: {
    selectedValue: {
      type: [String, Boolean, Number, Object],
      default: null
    },
    uncheckedValue: {
      type: [String, Boolean, Number, Object],
      default: null
    },
    /**
     * Input value
     */
    value: {
      type: [String, Boolean, Number, Object],
      default: null
    },
    /**
     * Input id
     */
    id: {
      type: String,
      default: null
    },
    /**
     * Input name
     */
    name: {
      type: String,
      default: null
    },
    /**
     * Class for icon
     */
    iconClass: {
      type: String,
      default: null
    },
    /**
     * Class for label
     */
    labelClass: {
      type: String,
      default: null
    },
    /**
     * Class for input
     */
    inputClass: {
      type: String,
      default: null
    }
  },
  methods: {
    change(checked) {
      /**
       * Event for select/unselect
       * @type {Event}
       */
      this.$emit('change', checked ? this.value : this.uncheckedValue)
    }
  }
}
