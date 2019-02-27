import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaForgotPassword from './ForgotPassword.vue'

storiesOf('Modules/Forgot Password', module).add('Default', () => ({
  components: { App, AlpacaForgotPassword },
  template: `
    <app>
      <alpaca-forgot-password
        :heading-level="2"
        heading="Forgot your password"
        info="Please enter your email address below to receive a password reset link."
        submit-button="Reset my password"
        return-button="or return to log in"
        @submit="exampleMethod"
      />
    </app>
  `,
  methods: {
    exampleMethod: action('Clicked button')
  }
}))
