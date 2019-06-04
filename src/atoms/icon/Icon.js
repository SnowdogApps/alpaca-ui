// @vue/component
export default {
  props: {
    /**
     * Icon
     */
    icon: {
      type: String,
      required: true
    },
    /**
     * Title
     */
    title: {
      type: String,
      default: null
    }
  },
  computed: {
    url () {
      return `/assets/icons/sprite.svg#${this.icon}`
    },
    titleComputed () {
      return this.title || this.icon
    }
  }
}
