import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import data from './mocks/mini-cart.json'

import App from '../../01-globals/app/App.vue'
import AlpacaMiniCart from './MiniCart.vue'

storiesOf('Modules/Mini Cart', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaMiniCart },
    data: () => ({
      data
    }),
    template: `
      <app>
        <alpaca-mini-cart
          :products="data.products"
          :totals="data.totals"
          summary-title="Shopping summary"
          go-to-checkout-button="Go to Checkout"
          return-to-shopping-button="Return to shopping"
        />
      </app>
    `
  }))
