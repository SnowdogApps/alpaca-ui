import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../app/App.vue'
import AlpacaRegister from './Register.vue'

storiesOf('Modules/Register', module).add('Default', () => ({
  components: { App, AlpacaRegister },
  template: `
    <app>
      <alpaca-register
        style="padding: 20px;"
        personal-information-legend="Personal information"
        sign-in-legend="Sign-In information"
        submit-button="Create an Account"
        go-to-login-button="or login to your account"
        @goToLogin="goToLogin"
        @register="register"
      />
    </app>
  `,
  methods: {
    register: action('Register'),
    goToLogin: action('Login view')
  }
}))
