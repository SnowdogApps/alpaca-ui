import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import AQuantityUpdate from '../../03-modules/quantity-update/QuantityUpdate.vue'
import AProductItem from './ProductItem.vue'

import products from '../../../mocks/products'

storiesOf('Modules/Product item', module)
  .addDecorator(StoryRouter())
  // @vue/component
  .add('Default', () => ({
    components: { AProductItem },
    data: () => ({
      product: products[0]
    }),
    methods: {
      removeMethod: action('Remove')
    },
    template: `
        <a-product-item
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
    `
  }))
  // @vue/component
  .add('With Qty', () => ({
    components: { AProductItem, AQuantityUpdate },
    data: () => ({
      product: products[0]
    }),
    methods: {
      removeMethod: action('Remove'),
      changeMethod: action('Change')
    },
    template: `
      <a-product-item
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
          <a-quantity-update
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
      </a-product-item>
    `
  }))
