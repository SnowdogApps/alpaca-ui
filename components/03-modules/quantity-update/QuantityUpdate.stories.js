import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AlpacaQuantityUpdate from './QuantityUpdate.vue'

storiesOf('Modules/Quantity Update', module)
  .add('Default', () => ({
    components: { AlpacaQuantityUpdate },
    template: `
        <alpaca-quantity-update
          :value="4"
          @update="updateVal"
        />
    `,
    methods: {
      updateVal: action('Updated')
    }
  }))
