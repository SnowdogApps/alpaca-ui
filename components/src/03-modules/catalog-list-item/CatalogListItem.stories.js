import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ACatalogListItem from './CatalogListItem.vue'

import data from './mocks/catalogListItem'
import textSwatch from '../../02-elements/swatch/mocks/text-swatch'
import iconSwatch from '../../02-elements/swatch/mocks/icon-swatch'

storiesOf('Modules/Catalog list item', module)
  .add('Default', () => ({
    components: { ACatalogListItem },
    data: () => ({
      data,
      textSwatch,
      iconSwatch
    }),
    template: `
        <a-catalog-list-item
          href="#"
          :title="data.name"
          badgeText="New"
          badgeType="new"
          :textSwatch="textSwatch.options"
          :iconSwatch="iconSwatch.options"
          :addToCartButton="data.addToCartButton.text"
          :imageSrc="data.image.dataSrc"
          :imageAlt="data.image.alt"
          :price="data.price"
          @addToCart="addToCart"
          @addToWishList="addToWishList"
          @compare="compare"
        >
          Default link
         </a-catalog-list-item>
    `,
    methods: {
      addToCart: action('Added to cart'),
      addToWishList: action('Added to wish list'),
      compare: action('Compared')
    }
  }))
