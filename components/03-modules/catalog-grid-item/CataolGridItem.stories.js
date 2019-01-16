import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import data from './mocks/catalogGridItem.json'
import textSwatch from '../../02-elements/swatch/mocks/text-swatch'
import iconSwatch from '../../02-elements/swatch/mocks/icon-swatch'

import App from '../../01-globals/app/App.vue'
import AlpacaCatalogGridItem from './CatalogGridItem.vue'

storiesOf('Modules/Catalog grid item', module).add('Default', () => ({
  components: { App, AlpacaCatalogGridItem },
  data: () => ({
    data,
    textSwatch,
    iconSwatch
  }),
  template: `
    <app>
      <alpaca-catalog-grid-item
        badgeType="new"
        badgeText="New"
        :image="data.image.dataSrc"
        :alt="data.image.alt"
        :name="data.name"
        :textSwatch="textSwatch.options"
        :iconSwatch="iconSwatch.options"
        @addToCart="addToCart"
        @addToWishList="addToWishList"
        @compare="compare"
      />
    </app>
  `,
  methods: {
    addToCart: action('Added to cart'),
    addToWishList: action('Added to wish list'),
    compare: action('Compared')
  }
}))
