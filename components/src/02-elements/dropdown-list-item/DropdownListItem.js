import AIcon from '../../atoms/icon/Icon.vue'

// @vue/component
export default {
  components: {
    AIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    collapse: {
      type: Boolean,
      default: true
    },
    labelClass: {
      type: String,
      default: null
    },
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
  watch: {
    collapse (val) {
      this.collapseLocal = val
    }
  },
  methods: {
    toggle () {
      this.collapseLocal = !this.collapseLocal
    }
  }
}
