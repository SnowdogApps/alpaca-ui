import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaInput from '../../02-elements/input/Input.vue'
import AlpacaParagraph from '../../01-globals/paragraph/Paragraph.vue'

export default {
  components: {
    AlpacaButton,
    AlpacaInput,
    AlpacaParagraph
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
