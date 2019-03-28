import AlpacaIcon from '../../atoms/icon/Icon.vue'

export default {
  components: { AlpacaIcon },
  props: {
    type: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  },
  computed: {
    messageClass() {
      switch (this.type) {
        case 'success':
          return 'message--success'

        case 'error':
          return 'message--error'

        default:
          return 'message--warning'
      }
    },
    getIcon() {
      if (this.icon) return this.icon

      switch (this.type) {
        case 'success':
          return 'check'

        case 'error':
          return 'error'

        default:
          return 'warning'
      }
    }
  }
}
