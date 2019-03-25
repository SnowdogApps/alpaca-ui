import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import AlpacaWishlist from './Wishlist.vue'

import products from '../../../mocks/products'

storiesOf('Modules/Wishlist', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { AlpacaWishlist },
    data: () => ({
      products
    }),
    template: `
        <alpaca-wishlist
          style="padding: 20px;"
          :products="products"
          remove-button="Remove this product from your wishlist"
          @remove="removeMethod"
        />
    `,
    methods: {
      removeMethod: action('Remove'),
    }
  }))
