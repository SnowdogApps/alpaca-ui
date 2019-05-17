import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AProductListItem from './ProductListItem.vue'

const info = 'Product List Item component'

// @vue/component
const defaultData = {
  components: { AProductListItem },
  data () {
    return {
      id: 'prod1',
      qty: 2,
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
        :qty="qty"
        @remove="removeMethod"
        @change="changeMethod"
      />
    `
  }))
  .add('Without Qty', () => ({
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
        hideQty
        @remove="removeMethod"
      />
    `
  }))
