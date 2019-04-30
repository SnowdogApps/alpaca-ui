import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AQuantityUpdate from './QuantityUpdate.vue'

storiesOf('Organisms/Quantity Update', module)
  // @vue/component
  .add('Default', () => ({
    components: { AQuantityUpdate },
    methods: {
      updateVal: action('Updated')
    },
    template: `
      <a-quantity-update
        :value="4"
        @update="updateVal"
      />
    `
  }))
