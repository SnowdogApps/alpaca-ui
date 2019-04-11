import AIcon from '../../atoms/icon/Icon.vue'

export default {
  components: {
    AIcon
  },
  props: {
    /**
     * Item title
     */
    title: {
      type: String,
      required: null
    },
    /**
     * Item id
     */
    id: {
      type: String,
      required: null
    },
    /**
     * Item collapse
     */
    collapse: {
      type: Boolean,
      default: false
    },
    /**
     * Custom class for label
     */
    labelClass: {
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
  data() {
    return {
      collapseLocal: this.collapse
    }
  },
  methods: {
    toggle() {
      this.collapseLocal = !this.collapseLocal
    }
  },
  watch: {
    collapse(val) {
      this.collapseLocal = val
    }
  }
}
