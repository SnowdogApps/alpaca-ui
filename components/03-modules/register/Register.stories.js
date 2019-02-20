import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaRegister from './Register.vue'

storiesOf('Modules/Register', module).add('Default', () => ({
  components: { App, AlpacaRegister },
  template: `
    <app>
      <alpaca-register
        mainHeading="Create new customer account"
        personalSectionText="Personal information"
        :passwordStrength="3"
        signInSectionText="Sign-In information"
        checkboxLabel="Sign Up for Newsletter"
        buttonText="Create an Account"
        @register="exampleMethod"
      />
    </app>
  `,
  methods: {
    exampleMethod: action('Clicked button')
  }
}))
