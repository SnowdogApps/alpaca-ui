import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import ATextarea from './Textarea.vue'
import ALabel from '../../atoms/label/Label.vue'

const info = `
  ---
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.textarea--inline\` - Selector for applying inline styles
  - \`.label--hidden\` - Label selector for applying hidden styles (slot)
  ---
`
const textareaClasses = [null, 'textarea--inline']
const labelClasses = [null, 'label--hidden']

storiesOf('Molecules/Textarea', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ATextarea },
    props: {
      customClass: {
        default: select('Textarea class', textareaClasses)
      },
      labelText: {
        default: text('Label text', 'Default label')
      },
      placeholder: {
        default: text('Placeholder', 'Comment')
      }
    },
    data: () => ({ value: null }),
    template: `
      <a-textarea
        :class="customClass"
        :label="labelText"
        id="field_id"
        :placeholder="placeholder"
        v-model="value"
      />
    `
  }))
  .add('With slot', () => ({
    components: { ATextarea, ALabel },
    props: {
      customClass: {
        default: select('Textarea class', textareaClasses)
      },
      labelClass: {
        default: select('Label class', labelClasses)
      },
      labelText: {
        default: text('Label text', 'Default label')
      },
      placeholder: {
        default: text('Placeholder', 'Comment')
      }
    },
    data: () => ({ value: null }),
    template: `
      <a-textarea
        :class="customClass"
        :label="labelText"
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
      </a-textarea>
    `
  }))
