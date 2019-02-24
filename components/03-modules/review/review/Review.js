import AlpacaHeading from '../../../01-globals/heading/Heading.vue'
import AlpacaParagraph from '../../../01-globals/paragraph/Paragraph.vue'

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
