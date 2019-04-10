import AIcon from '../../atoms/icon/Icon.vue'

export default {
  components: {
    AIcon
  },
  props: {
    title: {
      type: String,
      required: null
    },
    id: {
      type: String,
      required: null
    },
    collapse: {
      type: Boolean,
      default: null
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
