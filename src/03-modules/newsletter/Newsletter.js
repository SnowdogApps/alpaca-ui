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
      selected: {},
      value: null
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', { email: this.value })
    }
  }
}
