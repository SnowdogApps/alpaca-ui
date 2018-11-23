import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaMessage from './Message.vue'

storiesOf('Elements/Message', module)
  .add('Default', () => ({
    components: { App, AlpacaMessage },
    template: `
      <app>
        <alpaca-message>
          You added Jacket to your shopping cart.
        </alpaca-message>
      </app>
    `
  }))
  .add('Success', () => ({
    components: { App, AlpacaMessage },
    template: `
      <app>
        <alpaca-message
          type="success"
        >
          You added Jacket to your shopping cart.
        </alpaca-message>
      </app>
    `
  }))
  .add('Error', () => ({
    components: { App, AlpacaMessage },
    template: `
      <app>
        <alpaca-message
          type="error"
        >
          You added Jacket to your shopping cart.
        </alpaca-message>
      </app>
    `
  }))