import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import menu from '../../03-modules/header/mocks/menu.json'

import App from '../../01-globals/app/App.vue'
import AlpacaForgotPassword from './ForgotPassword.vue'

storiesOf('Views/Forgot Password', module).add('Default', () => ({
  components: { App, AlpacaForgotPassword },
  data: () => ({
    menu
  }),
  template: `
    <app>
      <alpaca-forgot-password
        :menu="menu"
        :headingLevel="1"
        heading="Forgot your password"
        info="Please enter your email address below to receive a password reset link."
        submitButton="Reset my password"
        reloadButton="Reload Captcha"
        logoSrc="../../images/logo/alpaca.svg"
        logoLink="#"
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
