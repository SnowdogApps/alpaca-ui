import AFieldset from '../../atoms/fieldset/Fieldset.vue'
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../atoms/input/Input.vue'
import AInputWrapper from '../../molecules/input-wrapper/InputWrapper.vue'

// @vue/component
export default {
  components: {
    AFieldset,
    AButton,
    AInput,
    AInputWrapper
  },
  props: {
    legend: {
      type: String,
      required: true
    },
    emailLabel: {
      type: String,
      default: 'Email'
    },
    emailPlaceholder: {
      type: String,
      default: 'Email'
    },
    passwordLabel: {
      type: String,
      default: 'Password'
    },
    passwordPlaceholder: {
      type: String,
      default: 'Password'
    },
    goToForgotPasswordButton: {
      type: String,
      required: true
    },
    goToRegisterButton: {
      type: String,
      required: true
    },
    submitButton: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login () {
      this.$emit('login', { email: this.email, password: this.password })
    },
    goToRegister () {
      this.$emit('goToRegister')
    },
    goToForgotPassword () {
      this.$emit('goToForgotPassword')
    }
  }
}
