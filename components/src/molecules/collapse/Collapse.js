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
      required: true
    },
    /**
     * Item collapse
     */
    collapse: {
      type: Boolean,
      default: true
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
