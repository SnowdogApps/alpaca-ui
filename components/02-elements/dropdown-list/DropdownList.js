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
      default() { return this.nested }
    },
    screenM: {
      type: Boolean,
      default: false
    },
    listClass: {
      type: String,
      default: null
    },
    isListClass: {
      type: Boolean,
      default: true
    }
  }
}
