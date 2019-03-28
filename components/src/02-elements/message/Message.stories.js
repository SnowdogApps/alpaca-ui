import { storiesOf } from '@storybook/vue'

import AlpacaMessage from './Message.vue'

storiesOf('Elements/Message', module)
  .add('Default', () => ({
    components: { AlpacaMessage },
    template: `
        <alpaca-message>
          You added Jacket to your shopping cart.
        </alpaca-message>
    `
  }))
  .add('Success', () => ({
    components: { AlpacaMessage },
    template: `
        <alpaca-message
          type="success"
        >
          You added Jacket to your shopping cart.
        </alpaca-message>
    `
  }))
  .add('Error', () => ({
    components: { AlpacaMessage },
    template: `
        <alpaca-message
          type="error"
        >
          You added Jacket to your shopping cart.
        </alpaca-message>
    `
  }))
