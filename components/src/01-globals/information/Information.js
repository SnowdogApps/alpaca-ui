import AHeading from '../../atoms/heading/Heading.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'

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
