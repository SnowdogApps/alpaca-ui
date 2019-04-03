export default {
  props: {
    /**
     * Class for default styles. Use `false` value for disable styles from component
     */
    defaultClass: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick(event) {
      /**
       * Event click for button
       * @type {Event}
       */
      this.$emit('click', event)
    }
  }
}
