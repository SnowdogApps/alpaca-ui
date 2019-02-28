import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import data from './mocks/minicart'

import App from '../../01-globals/app/App.vue'
import AlpacaMiniCart from './MiniCart.vue'

storiesOf('Modules/Minicart', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaMiniCart },
    data: () => ({
      data
    }),
    template: `
      <app>
        <alpaca-mini-cart
          :cart-items="data.cartItems"
          :totals="data.totals"
          summary-title="Shopping summary"
          go-to-checkout-button="Go to Checkout"
          return-to-shopping-button="Return to shopping"
        />
      </app>
    `
  }))
