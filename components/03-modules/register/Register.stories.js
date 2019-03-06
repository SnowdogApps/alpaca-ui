import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
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
        @register="exampleMethod"
      />
    </app>
  `,
  methods: {
    exampleMethod: action('Clicked button')
  }
}))
