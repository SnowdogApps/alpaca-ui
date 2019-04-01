import AHeading from '../heading/Heading.vue'
import AParagraph from '../paragraph/Paragraph.vue'

export default {
  components: {
    AHeading,
    AParagraph
  },
  props: {
    /**
     * Information title
     */
    title: {
      type: String,
      required: true
    },
    /**
     * Information content
     */
    text: {
      type: String,
      required: true
    },
    /**
     * Heading level of information title
     */
    level: {
      type: Number,
      default: 5
    }
  }
}
