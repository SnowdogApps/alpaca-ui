import AlpacaHeading from '../../atoms/heading/Heading.vue'
import AlpacaParagraph from '../../atoms/paragraph/Paragraph.vue'

export default {
  components: {
    AlpacaHeading,
    AlpacaParagraph
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
