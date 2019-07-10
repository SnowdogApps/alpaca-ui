// @vue/component

export default {
  props: {
    /**
     * Label text
     */
    label: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      inputId: null
    }
  },
  mounted () {
    const input = this.$slots.default[0].elm
    this.inputId = input.id
  }
}
