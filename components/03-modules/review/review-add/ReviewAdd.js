import AlpacaHeading from '@/components/01-globals/heading/Heading.vue'
import AlpacaParagraph from '@/components/01-globals/paragraph/Paragraph.vue'
import AlpacaButton from '@/components/02-elements/button/Button.vue'
import AlpacaInput from '@/components/02-elements/form/input/Input.vue'
import AlpacaFieldset from '@/components/02-elements/form/fieldset/Fieldset.vue'
import AlpacaTextarea from '@/components/02-elements/form/input/textarea/Textarea.vue'

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
