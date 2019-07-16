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
     * Title
     */
    iconTitle: {
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
      collapseLocal: true
    }
  },
  computed: {
    ariaControls () {
      return this.title && this.title.replace(/ /g, '_')
    }
  },
  watch: {
    collapse (newVal) {
      this.collapseLocal = newVal
    }
  },
  methods: {
    toggle () {
      this.collapseLocal = !this.collapseLocal
    }
  }
}
