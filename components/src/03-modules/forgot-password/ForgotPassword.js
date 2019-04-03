import AButton from '../../molecules/button/Button.vue'
import AInput from '../../02-elements/input/Input.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'

export default {
  components: {
    AButton,
    AInput,
    AParagraph
  },
  props: {
    info: {
      type: String,
      required: true
    },
    submitButton: {
      type: String,
      required: true
    },
    returnButton: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      email: null
    }
  },
  methods: {
    submit() {
      this.$emit('submit', { email: this.email })
    },
    goToLogin() {
      this.$emit('goToLogin')
    }
  }
}
