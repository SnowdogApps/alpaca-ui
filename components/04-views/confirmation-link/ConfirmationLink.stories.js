import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaConfirmationLink from './ConfirmationLink.vue'

storiesOf('Views/Confirmation link', module).add('Default', () => ({
  components: { App, AlpacaConfirmationLink },
  template: `
    <app>
      <alpaca-confirmation-link 
        :headingLevel="1"
        heading="Send confirmation link"
        info="Please enter your email below and we will send you the confirmation link."
        link="Back to Sign In"
        href="#"
        button="Send confirmation link"
        placeholder="Email"
        name="Default"
        label="Email"
        @submit="exampleMethod"
      />
    </app>
  `,
  methods: {
    exampleMethod: action('Clicked button')
  }
}))
