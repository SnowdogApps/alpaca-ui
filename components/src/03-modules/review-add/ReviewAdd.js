import AHeading from '../../atoms/heading/Heading.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../molecules/input/Input.vue'
import AFieldset from '../../atoms/fieldset/Fieldset.vue'
import ATextarea from '../../molecules/textarea/Textarea.vue'

// @vue/component
export default {
  components: {
    AHeading,
    AParagraph,
    AButton,
    AInput,
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
