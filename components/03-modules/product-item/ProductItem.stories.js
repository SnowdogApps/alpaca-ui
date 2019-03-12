import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import App from '@/components/01-globals/app/App.vue'
import AlpacaQuantityUpdate from '@/components/03-modules/quantity-update/QuantityUpdate.vue'
import AlpacaProductItem from './ProductItem.vue'

import products from '@/mocks/products'

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
        />
      </app>
    `,
    methods: {
      removeMethod: action('Remove'),
    }
  }))
  .add('With Qty', () => ({
    components: { App, AlpacaProductItem, AlpacaQuantityUpdate },
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
        >
          <template #quantity>
            <alpaca-quantity-update
              :input-id="'qty' + product.id"
              input-aria-label="Change the quantity"
              decrement-aria-label="Decrease the quantity"
              decrement-icon-title="Minus mark"
              increment-aria-label="Increase the quantity"
              increment-icon-title="Plus mark"
              class="product-item__qty"
              label="Qty:"
              label-class="product-item__qty-label"
              @update="changeMethod"
            />
          </template>
        </alpaca-product-item>
      </app>
    `,
    methods: {
      removeMethod: action('Remove'),
      changeMethod: action('Change')
    }
  }))
