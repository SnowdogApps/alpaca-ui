import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaQuantityUpdate from './QuantityUpdate.vue'

storiesOf('Modules/Quantity Update', module)
  .add('Default', () => ({
    components: { App, AlpacaQuantityUpdate },
    template: `
      <app>
        <alpaca-quantity-update
          :value="4"
          @update="updateVal"
        />
      </app>
    `,
    methods: {
      updateVal: action('Updated')
    }
  }))
