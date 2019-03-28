export default {
  props: {
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
