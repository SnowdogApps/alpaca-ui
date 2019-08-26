// @vue/component
export default {
  props: {
    /**
     * Icon title
     */
    title: {
      type: String,
      default: null
    },
    /**
     * Icon role
     */
    role: {
      type: String,
      default: 'img'
    }
  },
  computed: {
    id () {
      return this.title ? this.title.toLowerCase().replace(/ /g, '-') : ''
    }
  }
}
