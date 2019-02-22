import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaLogin from './Login.vue'

storiesOf('Modules/Login', module)
  .add('Default', () => ({
    components: { App, AlpacaLogin },
    template: `
      <app>
        <alpaca-login
          main-heading="Login"
          link-heading="New Customer"
          legend=""
          forget-password-text="Forgot your password?"
          forget-password-link="#"
          go-to-register-button="or register an account"
          @login="exampleMethod"
        />
      </app>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
