export default {
  provide: {
    nested: true
  },
  inject: {
    nested: {
      default: false
    }
  },
  props: {
    secondary: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    inner: {
      type: Boolean,
      default: false
    },
    screenM: {
      type: Boolean,
      default: false
    }
  }
}
