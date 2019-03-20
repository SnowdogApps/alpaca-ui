import { storiesOf } from '@storybook/vue'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaMessage from './Message.vue'

storiesOf('Elements/Message', module)
  .add('Default', () => ({
    components: { App, AlpacaMessage },
    template: `
      <app>
        <alpaca-message 
          accept="Ok" 
          abort="Proceed to checkout"
        >
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
          success
          accept="Ok" 
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
          error
          abort="Ok" 
        >
          You added Jacket to your shopping cart.
        </alpaca-message>
      </app>
    `
  }))
