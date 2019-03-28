import AHeading from '../heading/Heading.vue'
import AParagraph from '../paragraph/Paragraph.vue'

export default {
  components: {
    AHeading,
    AParagraph
  },
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      default: 5
    }
  }
}
