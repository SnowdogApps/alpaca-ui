import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import App from '../../01-globals/app/App.vue'
import AlpacaLogin from './Login.vue'

storiesOf('Modules/Login', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaLogin },
    template: `
      <app>
        <alpaca-login
          style="padding: 20px;"
          legend="Login form"
          go-to-forget-password-button="Forgot Your Password?"
          submit-button="Sign In"
          go-to-register-button="or register an account"
          @goToRegister="goToRegister"
          @goToForgotPassword="goToForgotPassword"
          @login="login"
        />
      </app>
    `,
    methods: {
      login: action('Login'),
      goToRegister: action('Register view'),
      goToForgotPassword: action('Forgot password view'),
    }
  }))
