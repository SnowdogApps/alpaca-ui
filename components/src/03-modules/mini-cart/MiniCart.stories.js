import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import AQuantityUpdate from '../../03-modules/quantity-update/QuantityUpdate.vue'
import AProductItem from '../../03-modules/product-item/ProductItem.vue'
import AMiniCart from './MiniCart.vue'

import totals from '../../../mocks/totals'
import products from '../../../mocks/products'

storiesOf('Modules/Mini Cart', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { AMiniCart, AProductItem, AQuantityUpdate },
    data: () => ({
      totals,
      products
    }),
    template: `
        <a-mini-cart
          style="padding: 20px;"
          :totals="totals"
          summary-title="Shopping summary"
          go-to-checkout-button="Go to Checkout"
          return-to-shopping-button="Return to shopping"
        >
          <template #products>
            <a-product-item
              v-for="product in products"
              :key="product.id"
              :id="product.id"
              :name="product.name"
              :url="product.url"
              :image="product.image"
              :price="product.price"
              :special-price="product.specialPrice"
              :old-price="product.oldPrice"
              :options="product.options"
              remove-button="Remove button"
              item-tag="li"
              class="minicart__product-item"
              @remove="removeMethod(product.id)"
            >
              <template #quantity>
                <span class="product-item__qty-text">Qty:</span>
                <a-quantity-update
                  :input-id="'qty' + product.id"
                  input-aria-label="Change the quantity"
                  decrement-aria-label="Decrease the quantity"
                  decrement-icon-title="Minus mark"
                  increment-aria-label="Increase the quantity"
                  increment-icon-title="Plus mark"
                  label=""
                  @update="changeMethod"
                />
              </template>
             </a-product-item>
          </template>
         </a-mini-cart>
    `,
    methods: {
      removeMethod: action('Remove'),
      changeMethod: action('Change')
    }
  }))
