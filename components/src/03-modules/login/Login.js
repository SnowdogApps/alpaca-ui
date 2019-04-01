import AFieldset from '../../atoms/fieldset/Fieldset.vue'
import AButton from '../../02-elements/button/Button.vue'
import AInput from '../../02-elements/input/Input.vue'

export default {
  components: {
    AFieldset,
    AButton,
    AInput
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
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login() {
      this.$emit('login', { email: this.email, password: this.password })
    },
    goToRegister() {
      this.$emit('goToRegister')
    },
    goToForgotPassword() {
      this.$emit('goToForgotPassword')
    }
  }
}
