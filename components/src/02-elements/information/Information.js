import AlpacaHeading from '../../atoms/heading/Heading.vue'
import AlpacaParagraph from '../../atoms/paragraph/Paragraph.vue'

export default {
  components: {
    AlpacaHeading,
    AlpacaParagraph
  },
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
