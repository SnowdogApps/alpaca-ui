import AlpacaLink from '../../01-globals/link/Link.vue'
import AlpacaFieldset from '../../02-elements/form/fieldset/Fieldset.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaInput from '../../02-elements/form/input/Input.vue'

export default {
  components: {
    AlpacaLink,
    AlpacaFieldset,
    AlpacaButton,
    AlpacaInput
  },
  props: {
    mainHeading: {
      type: String,
      required: true
    },
    legend: {
      type: String,
      required: true
    },
    forgetPasswordText: {
      type: String,
      required: true
    },
    forgetPasswordLink: {
      type: String,
      required: true
    },
    linkHeading: {
      type: String,
      required: true
    },
    goToRegisterButton: {
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
    }
  }
}
