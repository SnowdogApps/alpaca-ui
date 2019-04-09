import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import AWishlist from './Wishlist.vue'

import products from '../../../mocks/products'

storiesOf('Modules/Wishlist', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { AWishlist },
    data: () => ({
      products
    }),
    template: `
        <a-wishlist
          style="padding: 20px;"
          :products="products"
          remove-button="Remove this product from your wishlist"
          @remove="removeMethod"
        />
    `,
    methods: {
      removeMethod: action('Remove')
    }
  }))
