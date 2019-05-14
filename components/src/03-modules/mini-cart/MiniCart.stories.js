import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import ALabel from '../../atoms/label/Label.vue'
import AQuantityUpdate from '../../molecules/quantity-update/QuantityUpdate.vue'
import AProductItem from '../../03-modules/product-item/ProductItem.vue'
import AMiniCart from './MiniCart.vue'

import totals from '../../../mocks/totals'
import products from '../../../mocks/products'

storiesOf('Modules/Mini Cart', module)
  .addDecorator(StoryRouter())
  // @vue/component
  .add('Default', () => ({
    components: { ALabel, AMiniCart, AProductItem, AQuantityUpdate },
    data: () => ({
      totals,
      products
    }),
    methods: {
      removeMethod: action('Remove'),
      changeMethod: action('Change'),
      discountMethod: action('Discount code')
    },
    template: `
      <a-mini-cart
        style="padding: 20px;"
        :totals="totals"
        summary-title="Shopping summary"
        go-to-checkout-button="Go to Checkout"
        return-to-shopping-button="Return to shopping"
        @applyDiscount="discountMethod"
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
              <a-quantity-update
                :value="product.qty"
                :input-id="'qty' + product.id"
                class="product-item__qty"
                @update="changeMethod"
                decrement-aria-label="Decrease the quantity"
                decrement-icon-title="Minus mark"
                increment-aria-label="Increase the quantity"
                increment-icon-title="Plus mark"
              >
                <template #label>
                  <a-label
                    class="product-item__qty-label"
                    :for="'qty' + product.id"
                  >
                    Qty:
                  </a-label>
                </template>
              </a-quantity-update>
            </template>
          </a-product-item>
        </template>
      </a-mini-cart>
    `
  }))
