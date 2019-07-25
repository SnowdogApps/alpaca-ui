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
     * Icon title
     */
    iconTitle: {
      type: String,
      default: null
    },
    /**
     * Initial visibility (To make the <a-collapse> show initially, set the visible prop)
     */
    visible: {
      type: Boolean,
      default: false
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
      visibility: this.visible
    }
  },
  computed: {
    ariaControls () {
      return this.title && this.title.replace(/ /g, '_')
    }
  },
  watch: {
    visible (value) {
      this.visibility = value
    }
  },
  methods: {
    toggle () {
      this.visibility = !this.visibility
    }
  }
}
