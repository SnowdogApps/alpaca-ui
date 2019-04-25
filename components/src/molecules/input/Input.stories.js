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
    data: () => ({ value: null }),
    props: {
      customClass: {
        default: select('BEM modifier', bemModifiers)
      },
      label: {
        default: text('Label text', 'Default label')
      },
      placeholder: {
        default: text('Placeholder', 'First and last name')
      }
    },
    template: `
      <a-input
        :class="customClass"
        id="field_id"
        :placeholder="placeholder"
        v-model="value"
      >
        {{ label }}
      </a-input>
    `
  }))
  .add('With slot', () => ({
    components: { AInput },
    data: () => ({ value: null }),
    props: {
      customClass: {
        default: select('BEM modifier', bemModifiers)
      },
      label: {
        default: text('Label text', 'Default label')
      },
      placeholder: {
        default: text('Placeholder', 'First and last name')
      }
    },
    template: `
      <a-input
        :class="customClass"
        id="field_id"
        :placeholder="placeholder"
        v-model="value"
      >
        <span style="color: red">
          {{ label }}
        </span>
      </a-input>
    `
  }))
