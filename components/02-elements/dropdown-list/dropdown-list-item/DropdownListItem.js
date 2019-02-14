import AlpacaIcon from '../../../01-globals/icon/Icon.vue'

export default {
  components: {
    AlpacaIcon
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
