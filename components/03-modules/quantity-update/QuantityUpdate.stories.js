import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import quantity from './mocks/quantity.json'

import App from '../../01-globals/app/App.vue'
import AlpacaQuantityUpdate from './QuantityUpdate.vue'

storiesOf('Modules/Quantity Update', module)
  .add('Default', () => ({
    data: () => ({
      quantity
    }),
    components: { App, AlpacaQuantityUpdate },
    template: `
      <app>
        <alpaca-quantity-update
          :input="quantity.input"
          :minusQtyButton="quantity.minusQtyButton"
          :plusQtyButton="quantity.plusQtyButton"
          @update="updateVal"
        />
      </app>
    `,
    methods: {
      updateVal: action('Clicked button')
    }
  }))
