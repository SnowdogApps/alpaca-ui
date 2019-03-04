import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import App from '../../01-globals/app/App.vue'
import AlpacaProductItem from './ProductItem.vue'

import ProductItem from './mocks/productItem.json'

storiesOf('Modules/Product item', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaProductItem },
    data: () => ({
      ProductItem
    }),
    template: `
      <app>
        <alpaca-product-item
          :product-image="ProductItem.productImage"
          :product-name="ProductItem.productName"
          :product-price="ProductItem.price"
          :product-id="ProductItem.productId"
          :product-options="ProductItem.productOptions"
          :quantity="ProductItem.quantity"
          :remove-btn="ProductItem.removeBtn"
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
  .add('Without Qty', () => ({
    components: { App, AlpacaProductItem },
    data: () => ({
      ProductItem
    }),
    template: `
      <app>
        <alpaca-product-item
          :product-image="ProductItem.productImage"
          :product-name="ProductItem.productName"
          :product-price="ProductItem.price"
          :product-id="ProductItem.productId"
          :product-options="ProductItem.productOptions"
          :remove-btn="ProductItem.removeBtn"
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
      ProductItem
    }),
    template: `
      <app>
        <alpaca-product-item
          :product-image="ProductItem.productImage"
          :product-name="ProductItem.productName"
          :product-price="ProductItem.price"
          :product-id="ProductItem.productId"
          :product-options="ProductItem.productOptions"
          :quantity="ProductItem.quantity"
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
