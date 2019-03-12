import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import data from './mocks/catalogGridItem.json'

import App from '@/components/01-globals/app/App.vue'
import AlpacaCatalogGridItem from './CatalogGridItem.vue'

storiesOf('Modules/Catalog grid item', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaCatalogGridItem },
    data: () => ({
      data
    }),
    template: `
      <app>
        <alpaca-catalog-grid-item
          :product="data.product"
          @addToCart="addToCart()"
          @addToWishList="addToWishList()"
          @addToCompare="addToCompare()"
        />
      </app>
    `,
    methods: {
      addToCart: action('Added to Cart'),
      addToWishList: action('Added to Wishlist'),
      addToCompare: action('Added to Compare')
    }
  }))
