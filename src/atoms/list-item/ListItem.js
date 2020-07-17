export default {
  props: {
    /**
     * To use another tag instead of `li`
     */
    tag: {
      type: String,
      default: 'li'
    }
  },
  computed: {
    tagClassName () {
      switch (this.tag) {
        case 'dt':
          return 'a-list-item--label'
        case 'dd':
          return 'a-list-item--value'
        default:
          return ''
      }
    }
  }
}
