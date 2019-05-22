import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import AProductGridItem from './ProductGridItem.vue'
import AIcon from '../../atoms/icon/Icon.vue'

const defaultData = {
  methods: {
    addToCart: action('Added to Cart'),
    addToWishList: action('Added to Wishlist'),
    addToCompare: action('Added to Compare')
  }
}

storiesOf('Molecules/Product grid item', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { AProductGridItem },
    ...defaultData,
    template: `
      <a-product-grid-item
        id="prod1"
        name="Some product name - very long name because that's important"
        price=""
        specialPrice="$100,00"
        oldPrice="$299,99"
        url="#"
        imageUrl="/images/catalog-grid-item/product-1_320_312.jpg"
        badgeText="Sale!"
        @addToCart="addToCart()"
        @addToWishList="addToWishList()"
        @addToCompare="addToCompare()"
      />
    `
  }))
  .add('With slots', () => ({
    components: {
      AProductGridItem,
      AIcon
    },
    ...defaultData,
    template: `
      <a-product-grid-item
        id="prod1"
        name="Some product name - very long name because that's important"
        price=""
        specialPrice="$100,00"
        oldPrice="$299,99"
        url="#"
        imageUrl="/images/catalog-grid-item/product-1_320_312.jpg"
        badgeText="Sale!"
        @addToCart="addToCart()"
        @addToWishList="addToWishList()"
        @addToCompare="addToCompare()"
      >
        <template #badge>
          <a-icon
            icon="youtube"
            style="position: absolute; left: 0;"
          />
        </template>

        <template #image>
          <img
            src="/images/catalog-grid-item/product-1_320_312.jpg"
            alt="Sample product"
            style="border:1px solid #00ff00; border-radius: 5px;"
          />
        </template>

        <template #name>
          <strong>Some product name - very very long name because that's important</strong>
        </template>

        <template #price>
          <div style="margin: 10px auto;">
            <strong style="color: #00ff00;">$100,00</strong>
            <small style="text-decoration: line-through;">$299,99"</small>
          </div>
        </template>

        <template #actions>
          <button onclick="alert('To remove!')">Delete!</button>
        </template>
      </a-product-grid-item>
    `
  }))
