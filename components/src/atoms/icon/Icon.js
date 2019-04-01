export default {
  props: {
    /**
     * Icon
     */
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    url() {
      return `/assets/icons/sprite.svg#${this.icon}`
    }
  }
}
