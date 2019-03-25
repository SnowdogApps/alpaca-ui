import AlpacaHeading from '../../01-globals/heading/Heading.vue'
import AlpacaParagraph from '../../01-globals/paragraph/Paragraph.vue'

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
