export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    }
  },
  computed: {
    url() {
      return `/assets/icons/sprite.svg#${this.icon}`
    }
  }
}
