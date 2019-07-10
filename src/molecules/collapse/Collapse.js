// @vue/component
export default {
  props: {
    /**
     * Title
     */
    title: {
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
