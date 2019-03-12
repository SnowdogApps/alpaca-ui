import AlpacaFieldset from '@alpaca-storybook/components/02-elements/form/fieldset/Fieldset.vue'
import AlpacaButton from '@alpaca-storybook/components/02-elements/button/Button.vue'
import AlpacaInput from '@alpaca-storybook/components/02-elements/form/input/Input.vue'

export default {
  components: {
    AlpacaFieldset,
    AlpacaButton,
    AlpacaInput
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
    goToForgetPasswordButton: {
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
