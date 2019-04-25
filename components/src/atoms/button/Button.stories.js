import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import AButton from './Button.vue'
import AIcon from '../icon/Icon.vue'

const info = `
  ---
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.button--secondary\` - Selector for applying secondary styles
  - \`.button--blank\` - Selector for applying blank styles
  - \`.button--fluid\` - Selector for applying fluid styles (width: 100%)
  ---
`

const bemModifiers = [
  null,
  'button--secondary',
  'button--blank',
  'button--fluid'
]

storiesOf('Atoms/Button', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AButton },
    props: {
      customClass: {
        default: select('BEM Modifier', bemModifiers)
      },
      text: {
        default: text('Text', 'Button text')
      }
    },
    template: `
      <a-button :class="customClass">
        {{ text }}
      </a-button>
    `
  }))
  .add('With slot', () => ({
    components: { AButton, AIcon },
    props: {
      customClass: {
        default: select('BEM Modifier', bemModifiers)
      }
    },
    template: `
      <a-button
        :class="customClass"
        style="padding: 0;"
      >
        <a-icon
          icon="search"
          class="button__icon"
          title="iconTitle"
        />
      </a-button>
    `
  }))
