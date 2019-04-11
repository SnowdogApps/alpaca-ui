import AlpacaHeading from '../../atoms/heading/Heading.vue'

export default {
  components:{ AlpacaHeading },
  props: {
    elements: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: null
    }
  }
}
