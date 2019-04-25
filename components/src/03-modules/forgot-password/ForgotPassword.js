import AButton from '../../atoms/button/Button.vue'
import AInput from '../../molecules/input/Input.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'

// @vue/component
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
  data () {
    return {
      email: null
    }
  },
  methods: {
    submit () {
      this.$emit('submit', { email: this.email })
    },
    goToLogin () {
      this.$emit('goToLogin')
    }
  }
}
