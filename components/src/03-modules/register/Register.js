import AlpacaFieldset from '../../02-elements/fieldset/Fieldset.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaInput from '../../02-elements/input/Input.vue'

export default {
  components: {
    AlpacaFieldset,
    AlpacaButton,
    AlpacaInput
  },
  props: {
    personalInformationLegend: {
      type: String,
      required: true
    },
    signInLegend: {
      type: String,
      required: true
    },
    submitButton: {
      type: String,
      required: true
    },
    goToLoginButton: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      passwordConfirmation: null,
      newsletter: false
    }
  },
  methods: {
    register() {
      this.$emit('register', {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        newsletter: this.newsletter
      })
    },
    goToLogin() {
      this.$emit('goToLogin')
    }
  }
}
