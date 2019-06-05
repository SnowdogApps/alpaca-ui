import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import AProductGridItem from './ProductGridItem.vue'
import AIcon from '../../atoms/icon/Icon.vue'

const defaultData = {
  methods: {
    addToCart: action('Added to Cart'),
    addToWishList: action('Added to Wishlist'),
    addToCompare: action('Added to Compare'),
    showAlert (msg) { alert(msg) }
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

        <template #price="{ specialPrice, oldPrice }">
          <div style="margin: 10px auto;">
            <strong style="color: #00ff00;">{{ specialPrice }}</strong>
            <small style="text-decoration: line-through;">{{ oldPrice }}</small>
          </div>
        </template>

        <template #addToCart="{ addToCart }">
          <button
            type="button"
            @click="() => { addToCart(); showAlert('Added!'); }"
          >
            Add
          </button>
        </template>
      </a-product-grid-item>
    `
  }))
