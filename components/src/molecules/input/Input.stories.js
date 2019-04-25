import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import AInput from './Input.vue'

const info = `
  ---
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.input--inline\` - Selector for applying inline styles
  - \`.input--hidden-label\` - Selector for applying hidden-label styles
  ---
`

const bemModifiers = [
  null,
  'input--inline',
  'input--hidden-label'
]

storiesOf('Molecules/Input', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AInput },
    props: {
      label: {
        default: text('Label text', 'Default label')
      },
      customClass: {
        default: select('BEM modifier', bemModifiers)
      }
    },
    data: () => ({ value: null }),
    template: `
      <a-input
        :class="customClass"
        label="Default label"
        id="field_id"
        placeholder="First and last name"
        v-model="value"
      >
        {{ label }}
      </a-input>
    `
  }))
