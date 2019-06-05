// @vue/component

export default {
  props: {
    closeAriaLabel: {
      type: String,
      default: null
    }
  },
  methods: {
    closeBar () {
      /**
       * Triggered close button
       * @type {Event}
       */
      this.$emit('close')
    }
  }
}
