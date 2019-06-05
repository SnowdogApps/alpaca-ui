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
     * Custom class for button
     */
    buttonClass: {
      type: String,
      default: null
    },
    /**
     * Custom class for content
     */
    contentClass: {
      type: String,
      default: null
    },
    /**
     * Attribute for disable button
     */
    disabled: {
      type: Boolean,
      default: false
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
