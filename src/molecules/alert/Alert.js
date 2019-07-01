// @vue/component

export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    closeAriaLabel: {
      type: String,
      default: null
    }
  },
  methods: {
    close () {
      /**
       * Triggered close button
       * @type {Event}
       */
      this.$emit('close')
    }
  }
}
