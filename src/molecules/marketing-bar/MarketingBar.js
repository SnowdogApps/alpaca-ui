// @vue/component

export default {
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
