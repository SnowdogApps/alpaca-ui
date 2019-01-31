import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaCartListItem from './CartListItem.vue'

import cartListItem from './mocks/cartListItem.json'

storiesOf('Modules/Cart list item', module)
  .add('Default', () => ({
    components: { App, AlpacaCartListItem },
    data: () => ({
      cartListItem,
      quantity: 1
    }),
    template: `
      <app>
        <alpaca-cart-list-item
          :productImage="cartListItem.productImage"
          :productName="cartListItem.productName"
          :productPrice="cartListItem.productPrice"
          :qtyInput="cartListItem.qtyInput"
          :productDetails="cartListItem.productDetails"
          :edit="cartListItem.editIcon"
          :remove="cartListItem.removeIcon"
          name="name"
          :maxInputValue="5"
          href="#"
          :quantity="quantity"
          @edit="editMethod"
          @remove="removeMethod"
          @change="changeMethod"
        />
      </app>
    `,
    methods: {
      editMethod: action('Edit'),
      removeMethod: action('Remove'),
      changeMethod: action('Change')
    }
  }))
