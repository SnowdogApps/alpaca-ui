import AlpacaHeading from '../../atoms/heading/Heading.vue'
import AlpacaParagraph from '../../atoms/paragraph/Paragraph.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaInput from '../../02-elements/input/Input.vue'
import AlpacaFieldset from '../../02-elements/fieldset/Fieldset.vue'
import AlpacaTextarea from '../../02-elements/textarea/Textarea.vue'

export default {
  components: {
    AlpacaHeading,
    AlpacaParagraph,
    AlpacaButton,
    AlpacaInput,
    AlpacaFieldset,
    AlpacaTextarea
  },
  props: {
    productTitle: {
      type: String,
      required: true
    },
    legendText: {
      type: String,
      required: true
    },
    headingText: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      nickname: null,
      summary: null,
      review: null
    }
  },
  methods: {
    addReview() {
      this.$emit('addReview', {
        nickname: this.nickname,
        summary: this.summary,
        review: this.review
      })
    }
  }
}
