import AHeading from '../../atoms/heading/Heading.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'

export default {
  components: {
    AHeading,
    AParagraph
  },
  props: {
    author: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
