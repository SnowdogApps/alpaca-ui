export default {
  props: {
    defaultClass: {
      type: Boolean,
      default: true
    },
    defaultButtonIconClass: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: null
    },
    iconClass: {
      type: String,
      default: null
    },
    iconTitle: {
      type: String,
      default: null
    },
    defaultIconClass: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  }
}
