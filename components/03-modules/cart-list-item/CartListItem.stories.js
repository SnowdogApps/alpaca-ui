import { storiesOf } from '@storybook/vue';

import App from '../../01-globals/app/App.vue';
import AlpacaCartListItem from './CartListItem.vue';

import cartListItem from './mocks/cartListItem.json'

storiesOf('Modules/Cart list item', module)
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
          :productPrice="cartListItem.productPrice"
          :qtyInput="cartListItem.qtyInput"
          :elements="cartListItem.attributes.elements"
          :editIcon="cartListItem.editIcon"
          :removeIcon="cartListItem.removeIcon"
          id="id"
          name="name"
          href="#"
        />
      </app>
    `
  }))
