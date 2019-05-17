import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ALabel from '../../atoms/label/Label.vue'
import AProductListItem from './ProductListItem.vue'
import AQuantityUpdate from '../../molecules/quantity-update/QuantityUpdate.vue'

const info = 'Product List Item component'

// @vue/component
const defaultData = {
  components: {
    ALabel,
    AProductListItem,
    AQuantityUpdate
  },
  data () {
    return {
      id: 'prod1',
      qty: 1,
      options: [
        {
          'id': 'size_id_1',
          'label': 'Size',
          'value': 'XXL'
        },
        {
          'id': 'color_id_1',
          'label': 'Color',
          'value': 'Red'
        }
      ]
    }
  }
}

storiesOf('Molecules/Product List Item', module)
  .addParameters({ info })
  .add('Default', () => ({
    ...defaultData,
    methods: {
      removeMethod: action('Remove')
    },
    template: `
      <a-product-list-item
        :id="id"
        name="Ingrid Running Jacket"
        imageUrl="/images/product/cart-product-160_160.jpg"
        price=""
        specialPrice="$100,00"
        oldPrice="$299,99"
        url="#"
        :options="options"
        @remove="removeMethod"
      />
    `
  }))
  .add('With Qty', () => ({
    ...defaultData,
    methods: {
      removeMethod: action('Remove'),
      changeMethod: action('Change')
    },
    template: `
      <a-product-list-item
        :id="id"
        name="Ingrid Running Jacket"
        imageUrl="/images/product/cart-product-160_160.jpg"
        price=""
        specialPrice="$100,00"
        oldPrice="$299,99"
        url="#"
        :options="options"
        @remove="removeMethod"
      >
        <template #quantity>
          <a-quantity-update
            :value="qty"
            input-id="qty_1"
            class="product-list-item__qty"
            @update="changeMethod"
            decrement-aria-label="Decrease the quantity"
            decrement-icon-title="Minus mark"
            increment-aria-label="Increase the quantity"
            increment-icon-title="Plus mark"
          >
            <template #label>
              <a-label
                class="product-list-item__qty-label"
                for="qty_1"
              >
                Qty:
              </a-label>
            </template>
          </a-quantity-update>
        </template>
      </a-product-list-item>
    `
  }))
