import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import App from '../../01-globals/app/App.vue'
import AlpacaCartListItem from './CartListItem.vue'

import product from './mocks/product.json'

storiesOf('Modules/Cart list item', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaCartListItem },
    data: () => ({
      product
    }),
    template: `
      <app>
        <alpaca-cart-list-item
          :product="product"
          @remove="removeMethod"
          @change="changeMethod"
        />
      </app>
    `,
    methods: {
      removeMethod: action('Remove'),
      changeMethod: action('Change')
    }
  }))
