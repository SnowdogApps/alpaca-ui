import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AQuantityUpdate from './QuantityUpdate.vue'

storiesOf('Modules/Quantity Update', module)
  .add('Default', () => ({
    components: { AQuantityUpdate },
    template: `
        <a-quantity-update
          :value="4"
          @update="updateVal"
        />
    `,
    methods: {
      updateVal: action('Updated')
    }
  }))
