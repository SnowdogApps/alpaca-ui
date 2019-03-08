import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import totals from '../../../mocks/totals'
import products from '../../../mocks/products'

import App from '../../01-globals/app/App.vue'
import AlpacaMiniCart from './MiniCart.vue'

storiesOf('Modules/Mini Cart', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaMiniCart },
    data: () => ({
      totals,
      products,
      quantity: {
        text: 'Qty:',
        label: ''
      }
    }),
    template: `
      <app>
        <alpaca-mini-cart
          style="padding: 20px;"
          :products="products"
          :totals="totals"
          :quantity="quantity"
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
