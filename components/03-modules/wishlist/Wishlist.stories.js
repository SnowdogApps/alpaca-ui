import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import products from './mocks/products'

import App from '../../01-globals/app/App.vue'
import AlpacaWishlist from './Wishlist.vue'

storiesOf('Modules/Wishlist', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaWishlist },
    data: () => ({
      products
    }),
    template: `
      <app>
        <alpaca-wishlist :products="products" />
      </app>
    `
  }))
