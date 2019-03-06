import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import App from '../../01-globals/app/App.vue'
import AlpacaProductItem from './ProductItem.vue'

import productItem from './mocks/productItem.json'

storiesOf('Modules/Product item', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaProductItem },
    data: () => ({
      productItem
    }),
    template: `
      <app>
        <alpaca-product-item
          :product-image="productItem.productImage"
          :product-name="productItem.productName"
          :product-price="productItem.price"
          :product-id="productItem.productId"
          :product-options="productItem.productOptions"
          :quantity="productItem.quantity"
          :remove-btn="productItem.removeBtn"
          :href="productItem.link"
          @remove="removeMethod"
          @change="changeMethod"
        />
      </app>
    `,
    methods: {
      removeMethod: action('Remove'),
      changeMethod: action('Change')
    }
  }))
  .add('Without Qty', () => ({
    components: { App, AlpacaProductItem },
    data: () => ({
      productItem
    }),
    template: `
      <app>
        <alpaca-product-item
          :product-image="productItem.productImage"
          :product-name="productItem.productName"
          :product-price="productItem.price"
          :product-id="productItem.productId"
          :product-options="productItem.productOptions"
          :remove-btn="productItem.removeBtn"
          name="name"
          href="#"
          @remove="removeMethod"
          @change="changeMethod"
        />
      </app>
    `,
    methods: {
      removeMethod: action('Remove'),
      changeMethod: action('Change')
    }
  }))
  .add('Without remove', () => ({
    components: { App, AlpacaProductItem },
    data: () => ({
      productItem
    }),
    template: `
      <app>
        <alpaca-product-item
          :product-image="productItem.productImage"
          :product-name="productItem.productName"
          :product-price="productItem.price"
          :product-id="productItem.productId"
          :product-options="productItem.productOptions"
          :quantity="productItem.quantity"
          name="name"
          href="#"
          @remove="removeMethod"
          @change="changeMethod"
        />
      </app>
    `,
    methods: {
      removeMethod: action('Remove'),
      changeMethod: action('Change')
    }
  }))
