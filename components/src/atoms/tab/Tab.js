// @vue/component
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    selected: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    id () {
      return this.name.toLowerCase().replace(/ /g, '-')
    }
  },
  mounted () {
    this.isActive = this.selected
  }
}
