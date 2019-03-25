import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AlpacaRegister from './Register.vue'

storiesOf('Modules/Register', module).add('Default', () => ({
  components: { AlpacaRegister },
  template: `
      <alpaca-register
        style="padding: 20px;"
        personal-information-legend="Personal information"
        sign-in-legend="Sign-In information"
        submit-button="Create an Account"
        go-to-login-button="or login to your account"
        @goToLogin="goToLogin"
        @register="register"
      />
  `,
  methods: {
    register: action('Register'),
    goToLogin: action('Login view')
  }
}))
