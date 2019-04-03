export default {
  props: {
    defaultClass: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  }
}
