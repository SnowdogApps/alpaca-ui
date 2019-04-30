import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AQuantityUpdate from './QuantityUpdate.vue'

const info = 'Check **Knobs** tab to edit component properties dynamically.'

storiesOf('Organisms/Quantity Update', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AQuantityUpdate },
    methods: {
      updateVal: action('Quantity')
    },
    template: `
      <a-quantity-update
        :value="4"
        @update="updateVal"
      />
    `
  }))
  .add('With slots', () => ({
    components: { AQuantityUpdate },
    methods: {
      updateVal: action('Updated')
    },
    data () {
      return {
        qty: 1
      }
    },
    template: `
      <a-quantity-update
        :value="qty"
        @update="updateVal"
      >
        <template #label>
          <label
            for="qty-update"
            style="display: block; margin-bottom: 5px; color: blue;"
          >
            Qty:
          </label>
        </template>
        <template #plus>
          <button @click="qty++">
            +
          </button>
        </template>
        <template #input>
          <input
            id="qty-update"
            type="number"
            v-model="qty"
            min="0"
            style="border: 0; text-align: center;"
          >
        </template>
        <template #minus>
          <button @click="qty > 0 ? qty-- : null">
            -
          </button>
        </template>
      </a-quantity-update>
    `
  }))
