import { addDecorator, storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { object } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-vue-router'

import AProductGridItem from './ProductGridItem.vue'
import AIcon from '../../atoms/icon/Icon.vue'

const defaultPrices = {
  price: '',
  specialPrice: '$100.00',
  oldPrice: '$299.99'
}
const defaultData = {
  methods: {
    addToCart: action('Added to Cart'),
    addToWishList: action('Added to Wishlist'),
    addToCompare: action('Added to Compare')
  }
}

addDecorator(StoryRouter())
storiesOf('Molecules/Product grid item', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { AProductGridItem },
    props: {
      pricesKnob: {
        default: object('Product prices', defaultPrices)
      }
    },
    ...defaultData,
    template: `
      <a-product-grid-item
        id="prod1"
        name="Some product name - very long name because that's important"
        url="#"
        :prices="pricesKnob"
        imageUrl="/images/catalog-grid-item/product-1_320_312.jpg"
        badgeText="Sale!"
        @addToCart="addToCart"
        @addToWishList="addToWishList"
        @addToCompare="addToCompare"
      />
    `
  }))
  .add('With slots', () => ({
    components: {
      AProductGridItem,
      AIcon
    },
    props: {
      pricesKnob: {
        default: object('Product prices', defaultPrices)
      }
    },
    ...defaultData,
    template: `
      <a-product-grid-item
        id="prod1"
        name="Some product name - very long name because that's important"
        :prices="pricesKnob"
        url="#"
        imageUrl="/images/catalog-grid-item/product-1_320_312.jpg"
        badgeText="Sale!"
        @addToCart="addToCart"
        @addToWishList="addToWishList"
        @addToCompare="addToCompare"
      >
        <template #badge>
          <a-icon
            icon="youtube"
            style="position: absolute; left: 0;"
          />
        </template>

        <template #image="{ imageUrl, alt }">
          <img
            :src="imageUrl"
            :alt="alt + ' image.'"
            style="border:1px solid #00ff00; border-radius: 5px;"
          />
        </template>

        <template #name="{ productName, productUrl }">
          <strong>Product: </strong> <a :href="productUrl">{{ productName.toUpperCase() }}</a>
        </template>

        <template #prices="{ productPrices }">
          <div style="margin: 10px auto;">
            <strong style="color: #00ff00;">{{ productPrices.specialPrice }}</strong>
            <small style="text-decoration: line-through;">{{ productPrices.oldPrice }}</small>
          </div>
        </template>

        <template #addToCart="{ addToCart, addToCartText }">
          <button
            type="button"
            @click="addToCart"
          >
            {{ addToCartText }}
          </button>
        </template>
      </a-product-grid-item>
    `
  }))
