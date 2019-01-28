import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import menu from '../../03-modules/header/mocks/menu.json'

import App from '../../01-globals/app/App.vue'
import AlpacaRegister from './Register.vue'

storiesOf('Views/Register', module).add('Default', () => ({
  components: { App, AlpacaRegister },
  data: () => ({
    menu
  }),
  template: `
    <app>
      <alpaca-register
        :menu="menu"
        logoSrc="../../images/logo/alpaca.svg"
        logoLink="#"
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
