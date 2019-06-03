import AHeading from '../../atoms/heading/Heading.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../atoms/input/Input.vue'
import ATextarea from '../../atoms/textarea/Textarea.vue'
import AInputWrapper from '../../molecules/input-wrapper/InputWrapper.vue'
import AFieldset from '../../atoms/fieldset/Fieldset.vue'

// @vue/component
export default {
  components: {
    AHeading,
    AParagraph,
    AButton,
    AInput,
    AInputWrapper,
    AFieldset,
    ATextarea
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
  data () {
    return {
      nickname: null,
      summary: null,
      review: null
    }
  },
  methods: {
    addReview () {
      this.$emit('addReview', {
        nickname: this.nickname,
        summary: this.summary,
        review: this.review
      })
    }
  }
}
