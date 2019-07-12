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
     * Item collapse
     */
    collapse: {
      type: Boolean,
      default: true
    },
    /**
     * Custom class for content
     */
    contentClass: {
      type: String,
      default: null
    },
    /**
     * Transition effect name
     */
    transitionName: {
      type: String,
      default: 'slide-down'
    }
  },
  data () {
    return {
      collapseLocal: this.collapse
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
