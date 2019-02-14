import AlpacaHeading from '../../../01-globals/heading/Heading.vue'
import AlpacaParagraph from '../../../01-globals/paragraph/Paragraph.vue'
import AlpacaButton from '../../../02-elements/button/Button.vue'
import AlpacaInput from '../../../02-elements/form/input/Input.vue'
import AlpacaFieldset from '../../../02-elements/form/fieldset/Fieldset.vue'

export default {
  components: {
    AlpacaHeading,
    AlpacaParagraph,
    AlpacaButton,
    AlpacaInput,
    AlpacaFieldset
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
