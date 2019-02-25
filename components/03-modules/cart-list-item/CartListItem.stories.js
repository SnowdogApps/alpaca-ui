import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import App from '../../01-globals/app/App.vue'
import AlpacaCartListItem from './CartListItem.vue'

import cartListItem from './mocks/cartListItem.json'

storiesOf('Modules/Cart list item', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaCartListItem },
    data: () => ({
      cartListItem
    }),
    template: `
      <app>
        <alpaca-cart-list-item
          :productImage="cartListItem.productImage"
          :productName="cartListItem.productName"
          :productPrice="cartListItem.price"
          :productId="cartListItem.productId"
          :productOptions="cartListItem.productOptions"
          :quantity="cartListItem.quantity"
          name="name"
          href="#"
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
