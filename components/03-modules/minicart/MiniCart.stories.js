import { storiesOf } from '@storybook/vue'

import data from './mocks/minicart'

import App from '../../01-globals/app/App.vue'
import AlpacaMiniCart from './MiniCart.vue'

storiesOf('Modules/Minicart', module)
  .add('Default', () => ({
    components: { App, AlpacaMiniCart },
    data: () => ({
      data
    }),
    template: `
      <app>
        <alpaca-mini-cart
          :cartItems="data.cartItems"
          summary-title="Shopping summary"
          go-to-checkout-button="Go to Checkout"
          return-to-shopping-button="Return to shopping"
          tax-amount="12"
        />
      </app>
    `
  }))
