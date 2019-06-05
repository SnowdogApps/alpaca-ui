// @vue/component
export default {
  props: {
    /**
     * Custom heading text
     */
    heading: {
      type: String,
      default: null
    },
    /**
     * Input object
     */
    input: {
      type: Object,
      default: null
    },
    /**
     * Button text
     */
    buttonText: {
      type: String,
      default: null
    },
    /**
     * Array with checkboxes
     */
    checkboxes: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      selected: {},
      currentValue: null
    }
  },
  methods: {
    onSubmit () {
      /**
       * Triggered when form is submit
       * @type {Event}
       */
      this.$emit('submit', {
        email: this.currentValue,
        checkboxes: this.selected
      })
    }
  }
}
