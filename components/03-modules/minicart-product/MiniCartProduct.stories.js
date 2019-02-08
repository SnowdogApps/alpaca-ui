import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions'

import data from './mocks/miniCartProduct'

import App from '../../01-globals/app/App.vue';
import AlpacaMiniCartProduct from './MiniCartProduct.vue';

storiesOf('Modules/Minicart product', module)
  .add('Default', () => ({
    components: { App, AlpacaMiniCartProduct },
    data: () => ({
      data
    }),
    template: `
      <app>
        <alpaca-mini-cart-product
          :imageSrc="data.image.dataSrc"
          :imageAlt="data.image.alt"
          productLink="#"
          :productName="data.name"
          label="Qty:"
          placeholder="32"
          :updateButton="data.updateButtonText"
          :price="data.price"
          @edit="edit"
          @remove="remove"
          @update="update"
        />
      </app>
    `,
    methods: {
      edit: action('Edited'),
      remove: action('Removed'),
      update: action('Updated'),
    }
  }))
