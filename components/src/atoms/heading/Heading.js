export default {
  props: {
    level: {
      type: Number,
      required: true,
      validator: level => level >= 1 && level <= 6
    },
    tag: {
      type: String,
      required: true
    },
    page: {
      type: Boolean,
      default: false
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
