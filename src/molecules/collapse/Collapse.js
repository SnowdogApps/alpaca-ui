// @vue/component
export default {
  props: {
    /**
     * Title
     */
    title: {
      type: String,
      default: null
    },
    /**
     * Custom class for content
     */
    contentClass: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      collapseLocal: true
    }
  },
  computed: {
    ariaControls () {
      return this.title && this.title.replace(/ /g, '_')
    }
  },
  methods: {
    toggle () {
      this.collapseLocal = !this.collapseLocal
    }
  }
}
