// @vue/component
export default {
  methods: {
    btnEvent (ev) {
      this.$emit('btn-event', ev)
    }
  }
}
