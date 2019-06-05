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
  },
  methods: {
    removeMethod: action('Remove'),
    changeMethod: action('Change')
  }
}

storiesOf('Molecules/Product List Item', module)
  .addParameters({ info })
  .add('Default', () => ({
    ...defaultData,
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
  .add('With slots', () => ({
    ...defaultData,
    methods: {
      removeMethod: action('Remove'),
      changeMethod: action('Change'),
      showAlert (msg) {
        alert(msg)
      }
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
        <template #image="{ alt, imageUrl }">
          <img
            :src="imageUrl"
            :alt="alt + ' image.'"
            style="border: 1px dashed #000; border-radius: 50%;"
          />
        </template>
        <template #name="{ productName, productUrl }">
          <strong style="margin-right: 5px;">Product:</strong>
          <a :href="productUrl">{{ productName.toUpperCase() }}</a>
        </template>
        <template #price="{ specialPrice, oldPrice }">
          <div style="margin-top: 10px; flex-basis: 100%;">
            <strong style="color: #00ff00;">{{ specialPrice }}</strong>
            <small style="text-decoration: line-through;">{{ oldPrice }}</small>
          </div>
        </template>
        <template #option="data">
          <li style="margin-top: 10px;">
            {{ data.option.label }} : {{ data.option.value }}
          </li>
        </template>
        <template #quantity>
          <input
            type="number"
            name="qty"
            min="10"
            max="100"
            value="11"
          >
        </template>
        <template #removeAction="{ itemRemove }">
          <button @click="() => { itemRemove(); showAlert('Item removed!'); }">
            Delete!
          </button>
        </template>
      </a-product-list-item>
    `
  }))
