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
    button: {
      type: String,
      required: true
    },
    checkboxes: {
      type: Array,
      default: null
    },
    headingClass: {
      type: String,
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
      this.$emit('submit', { email: this.value, checkboxes: this.selected })
    }
  }
}
