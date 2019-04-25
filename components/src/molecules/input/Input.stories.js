import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import AInput from './Input.vue'
import ALabel from '../../atoms/label/Label.vue'

const info = `
  ---
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.input--inline\` - Selector for applying inline styles
  - \`.label--hidden\` - Label selector for applying hidden styles (slot)
  ---
`
const inputClasses = [null, 'input--inline']
const labelClasses = [null, 'label--hidden']

storiesOf('Molecules/Input', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AInput },
    props: {
      customClass: {
        default: select('Input class', inputClasses)
      },
      labelText: {
        default: text('Label text', 'Default label')
      },
      placeholder: {
        default: text('Placeholder', 'First and last name')
      }
    },
    data: () => ({ value: null }),
    template: `
      <a-input
        :class="customClass"
        :label="labelText"
        id="field_id"
        :placeholder="placeholder"
        v-model="value"
      />
    `
  }))
  .add('With slot', () => ({
    components: { AInput, ALabel },
    props: {
      customClass: {
        default: select('Input class', inputClasses)
      },
      labelClass: {
        default: select('Label class', labelClasses)
      },
      labelText: {
        default: text('Label text', 'Default label')
      },
      placeholder: {
        default: text('Placeholder', 'First and last name')
      }
    },
    data: () => ({ value: null }),
    template: `
      <a-input
        :class="customClass"
        id="field_id"
        :placeholder="placeholder"
        v-model="value"
      >
        <a-label
          for="field_id"
          :class="labelClass"
          style="font-weight: bold"
        >
          {{ labelText }}
        </a-label>
      </a-input>
    `
  }))
