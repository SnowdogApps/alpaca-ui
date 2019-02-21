import AlpacaHeading from '../heading/Heading'

export default {
  components: {
    AlpacaHeading
  },
  props: {
    grids: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    rowClass: {
      type: String,
      default: null
    }
  }
}
