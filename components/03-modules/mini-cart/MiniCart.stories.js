import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import data from './mocks/mini-cart.json'
import products from '../../../mocks/product-list'

import App from '../../01-globals/app/App.vue'
import AlpacaMiniCart from './MiniCart.vue'

storiesOf('Modules/Mini Cart', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaMiniCart },
    data: () => ({
      data,
      products
    }),
    template: `
      <app>
        <alpaca-mini-cart
          style="padding: 20px;"
          :products="products"
          :totals="data.totals"
          remove-button="Remove button"
          summary-title="Shopping summary"
          go-to-checkout-button="Go to Checkout"
          return-to-shopping-button="Return to shopping"
          @remove="removeMethod"
        />
      </app>
    `,
    methods: {
      removeMethod: action('Remove'),
    }
  }))
