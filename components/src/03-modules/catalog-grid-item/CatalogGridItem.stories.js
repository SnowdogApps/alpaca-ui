import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import ACatalogGridItem from './CatalogGridItem.vue'

import data from './mocks/catalogGridItem.json'

storiesOf('Modules/Catalog grid item', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { ACatalogGridItem },
    data: () => ({
      data
    }),
    template: `
        <a-catalog-grid-item
          :product="data.product"
          @addToCart="addToCart()"
          @addToWishList="addToWishList()"
          @addToCompare="addToCompare()"
        />
    `,
    methods: {
      addToCart: action('Added to Cart'),
      addToWishList: action('Added to Wishlist'),
      addToCompare: action('Added to Compare')
    }
  }))
