import { storiesOf } from '@storybook/vue';

import data from './mocks/miniCartProduct'

import App from '../../01-globals/app/App.vue';
import AlpacaMiniCartProduct from './MiniCartProduct.vue';

storiesOf('Modules/Mini cart product', module)
  .add('Default', () => ({
    components: { App, AlpacaMiniCartProduct },
    data: () => ({
      data
    }),
    template: `
      <app>
        <alpaca-mini-cart-product
          :imageSrc="data.productImage.dataSrc"
          :imageAlt="data.productImage.alt"
          productLink="#"
          :productName="data.productName"
          :input="data.productQty"
          :updateButton="data.updateQty.text"
          :editIcon="data.editIcon.iconId"
          :removeIcon="data.removeIcon.iconId"
        />
      </app>
    `
  }))
