import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import App from '../../01-globals/app/App.vue'
import AlpacaProductItem from './ProductItem.vue'

import products from '../../../mocks/product-list'

storiesOf('Modules/Product item', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaProductItem },
    data: () => ({
      product: products[0]
    }),
    template: `
      <app>
        <alpaca-product-item
          :id="product.id"
          :name="product.name"
          :url="product.url"
          :image="product.image"
          :price="product.price"
          :special-price="product.specialPrice"
          :old-price="product.oldPrice"
          :options="product.options"
          remove-button="Remove this product from your shopping cart"
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
      product: products[0]
    }),
    template: `
      <app>
        <alpaca-product-item
          :id="product.id"
          :name="product.name"
          :url="product.url"
          :image="product.image"
          :price="product.price"
          :special-price="product.specialPrice"
          :old-price="product.oldPrice"
          :options="product.options"
          remove-button="Remove this product from your shopping cart"
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
      product: products[0]
    }),
    template: `
      <app>
        <alpaca-product-item
          :id="product.id"
          :name="product.name"
          :url="product.url"
          :image="product.image"
          :price="product.price"
          :special-price="product.specialPrice"
          :old-price="product.oldPrice"
          :options="product.options"
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
