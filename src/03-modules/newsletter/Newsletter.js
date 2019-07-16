// @vue/component
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    input: {
      type: Object,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    checkbox: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      email: null
    }
  },
  methods: {
    onSubmit () {
      /**
       * Triggered when form is submit
       * @type { Event }
       */
      this.$emit('submit', {
        email: this.email,
        checkbox: this.checkbox.status
      })
    }
  }
}
