import AlpacaFieldset from '../../02-elements/form/fieldset/Fieldset.vue'
import AlpacaDivider from '../../02-elements/divider/Divider.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaInput from '../../02-elements/form/input/Input.vue'

export default {
  components: {
    AlpacaFieldset,
    AlpacaDivider,
    AlpacaButton,
    AlpacaInput
  },
  props: {
    mainHeading: {
      type: String,
      required: true
    },
    personalSectionText: {
      type: String,
      required: true
    },
    signInSectionText: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
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
    }
  }
}
