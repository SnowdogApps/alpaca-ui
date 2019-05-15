import AIcon from '../../atoms/icon/Icon.vue'

// @vue/component
export default {
  components: {
    AIcon
  },
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
     * Custom class for title
     */
    titleClass: {
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
      collapseLocal: this.collapse
    }
  },
  methods: {
    toggle () {
      this.collapseLocal = !this.collapseLocal
    }
  }
}
