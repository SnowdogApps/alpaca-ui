import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import products from '@/mocks/products'

import App from '@/components/01-globals/app/App.vue'
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
