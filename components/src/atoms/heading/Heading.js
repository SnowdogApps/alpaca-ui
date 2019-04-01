export default {
  props: {
    /**
     * Heading level
     */
    level: {
      type: Number,
      required: true,
      validator: level => level >= 1 && level <= 6
    },
    /**
     * To use another tag instead of `h`
     */
    tag: {
      type: String,
      default: null
    }
  },
  computed: {
    levelClassName() {
      switch (this.level) {
        case 1:
          return 'first'
        case 2:
          return 'second'
        case 3:
          return 'third'
        case 4:
          return 'fourth'
        case 5:
          return 'fifth'
        case 6:
          return 'sixth'
        default:
          return null
      }
    }
  }
}
