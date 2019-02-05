import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaForgotPassword from './ForgotPassword.vue'

storiesOf('Views/Forgot Password', module).add('Default', () => ({
  components: { App, AlpacaForgotPassword },
  template: `
    <app>
      <alpaca-forgot-password
        :headingLevel="1"
        heading="Forgot your password"
        info="Please enter your email address below to receive a password reset link."
        submitButton="Reset my password"
        reloadButton="Reload Captcha"
        captchaSrc="/images/banner/banner-992_254.png"
        @submit="exampleMethod"
        @reload="exampleMethod"
      />
    </app>
  `,
  methods: {
    exampleMethod: action('Clicked button')
  }
}))
