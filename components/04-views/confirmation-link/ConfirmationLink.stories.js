import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaConfirmationLink from './ConfirmationLink.vue'

import menu from './mocks/confirmation-link.json'

storiesOf('Views/Confirmation link', module).add('Default', () => ({
  components: { App, AlpacaConfirmationLink },
  data: () => ({
    menu
  }),
  template: `
    <app>
      <alpaca-confirmation-link 
        :menu="menu"
        :headingLevel="1"
        heading="Send confirmation link"
        info="Please enter your email below and we will send you the confirmation link."
        link="Back to Sign In"
        href="#"
        button="Send confirmation link"
        placeholder="Email"
        label="Email"
        logoSrc="../../images/logo/alpaca.svg"
        logoLink="#"
      />
    </app>
  `
}))
