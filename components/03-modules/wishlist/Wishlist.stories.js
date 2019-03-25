import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaWishlist from './Wishlist.vue'

import products from '../../../mocks/products'

storiesOf('Modules/Wishlist', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaWishlist },
    data: () => ({
      products
    }),
    template: `
      <app>
        <alpaca-wishlist
          style="padding: 20px;"
          :products="products"
          remove-button="Remove this product from your wishlist"
          @remove="removeMethod"
        />
      </app>
    `,
    methods: {
      removeMethod: action('Remove'),
    }
  }))
