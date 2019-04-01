import { storiesOf } from '@storybook/vue'

import AlpacaMessage from './Message.vue'

storiesOf('Elements/Message', module)
  .add('Default', () => ({
    components: { AlpacaMessage },
    template: `
        <alpaca-message 
          accept="Ok" 
          abort="Proceed to checkout"
        >
          You added Jacket to your shopping cart.
        </alpaca-message>
    `
  }))
  .add('Success', () => ({
    components: { AlpacaMessage },
    template: `
        <alpaca-message 
          success
          accept="Ok" 
        >
          You added Jacket to your shopping cart.
        </alpaca-message>
    `
  }))
  .add('Error', () => ({
    components: { AlpacaMessage },
    template: `
        <alpaca-message 
          error
          abort="Ok" 
        >
          You added Jacket to your shopping cart.
        </alpaca-message>
    `
  }))
