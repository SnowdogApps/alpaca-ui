import { addDecorator, storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, number, object } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-vue-router'

import AProductGridItem from './ProductGridItem.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import ABadge from '../../atoms/badge/Badge.vue'
import ARating from '../../molecules/rating/Rating.vue'

const defaultPrices = {
  price: '$1684.00',
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
        url="#"
        add-to-cart-text="Add to cart"
        add-to-wish-list-text="Add to wishlist"
        add-to-compare-text="Add to compare"
        :name="nameKnob"
        :prices="pricesKnob"
        :image-url="imageUrlKnob"
        :badge-text="badgeTextKnob"
        @addToCart="addToCart"
        @addToWishList="addToWishList"
        @addToCompare="addToCompare"
      />
    `
  }))
  .add('With slots', () => ({
    components: {
      AProductGridItem,
      ABadge,
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
        url="#"
        add-to-cart-text="Add to cart"
        add-to-wish-list-text="Add to wishlist"
        add-to-compare-text="Add to compare"
        :name="nameKnob"
        :prices="pricesKnob"
        :image-url="imageUrlKnob"
        :badge-text="badgeTextKnob"
        @addToCart="addToCart"
        @addToWishList="addToWishList"
        @addToCompare="addToCompare"
      >
        <template #badge="{ productBadgeText }">
          <a-badge
            class="a-product-grid-item__badge"
            style="display: flex; align-items: center;"
          >
            {{ productBadgeText }}
            <a-icon icon="youtube" />
          </a-badge>
        </template>

        <template #image="{ productImageUrl, productImageAlt }">
          <a href="/" style="display:block; overflow: hidden;">
            <img
              :src="productImageUrl"
              :alt="productImageAlt + ' image.'"
              class="a-product-grid-item__image"
            />
          </a>
        </template>

        <template #name="{ productName, productUrl }">
          <strong>Product: </strong>
          <a
            :href="productUrl"
            class="a-product-grid-item__link a-product-grid-item__link--name"
          >
            {{ productName.toUpperCase() }}
          </a>
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
          {{ productPrices.price }}
        </template>

        <template #addToCart="{ productAddToCart, productAddToCartText }">
          <button
            type="button"
            @click="productAddToCart"
            style="padding: 10px; border: none; border-radius: 5px; background: #00ff00;"
          >
            {{ productAddToCartText }}
          </button>
        </template>
      </a-product-grid-item>
    `
  }))
