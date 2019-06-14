import { addDecorator, storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, number, object } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-vue-router'

import AProductGridItem from './ProductGridItem.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import ARating from '../../molecules/rating/Rating.vue'

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
      },
      badgeTextKnob: {
        default: text('Badge text', 'Sale!')
      },
      nameKnob: {
        default: text('Product name', 'Some product name - very long name because that is important')
      },
      imageUrlKnob: {
        default: text('Product image url', '/images/catalog-grid-item/product-1_320_312.jpg')
      }
    },
    ...defaultData,
    template: `
      <a-product-grid-item
        id="prod1"
        :name="nameKnob"
        url="#"
        :prices="pricesKnob"
        :imageUrl="imageUrlKnob"
        :badgeText="badgeTextKnob"
        @addToCart="addToCart"
        @addToWishList="addToWishList"
        @addToCompare="addToCompare"
      />
    `
  }))
  .add('With slots', () => ({
    components: {
      AProductGridItem,
      AIcon,
      ARating
    },
    props: {
      pricesKnob: {
        default: object('Product prices', defaultPrices)
      },
      badgeTextKnob: {
        default: text('Badge text', 'New!')
      },
      nameKnob: {
        default: text('Product name', 'Ingrid Running Jacket')
      },
      imageUrlKnob: {
        default: text('Product image url', '/images/catalog-grid-item/product-1_320_312.jpg')
      },
      averageRatingKnob: {
        default: number('Average', 4.5)
      }
    },
    ...defaultData,
    template: `
      <a-product-grid-item
        id="prod1"
        :name="nameKnob"
        :prices="pricesKnob"
        url="#"
        :imageUrl="imageUrlKnob"
        :badgeText="badgeTextKnob"
        @addToCart="addToCart"
        @addToWishList="addToWishList"
        @addToCompare="addToCompare"
      >
        <template #badge="{ productBadgeText }">
          <div style="display: flex; align-items: center; position: absolute; left: 0;">
            {{ productBadgeText }}
            <a-icon icon="youtube" />
          </div>
        </template>

        <template #image="{ productImageUrl, productImageAlt }">
          <img
            :src="productImageUrl"
            :alt="productImageAlt + ' image.'"
            style="border:1px solid #00ff00; border-radius: 5px;"
          />
        </template>

        <template #name="{ productName, productUrl }">
          <strong>Product: </strong> <a :href="productUrl">{{ productName.toUpperCase() }}</a>
        </template>

        <template #rating>
          <div class="a-product-grid-item__rating-wrapper">
            <a-rating
              :average="averageRatingKnob"
              button-class="a-product-grid-item__rating-button"
              icon-class="a-product-grid-item__rating-icon"
            />
            <span class="a-product-grid-item__rating-count">(34)</span>
          </div>
        </template>

        <template #prices="{ productPrices }">
          <div style="margin: 10px auto;">
            <strong style="color: #00ff00;">{{ productPrices.specialPrice }}</strong>
            <small style="text-decoration: line-through;">{{ productPrices.oldPrice }}</small>
          </div>
        </template>

        <template #addToCart="{ productAddToCart, productAddToCartText }">
          <button
            type="button"
            @click="productAddToCart"
          >
            {{ productAddToCartText }}
          </button>
        </template>
      </a-product-grid-item>
    `
  }))
