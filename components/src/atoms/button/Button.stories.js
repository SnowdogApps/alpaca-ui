import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import AButton from './Button.vue'
import AIcon from '../icon/Icon.vue'

const info = `
  ---
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.a-button--secondary\` - Selector for applying secondary styles
  - \`.a-button--blank\` - Selector for applying blank styles
  - \`.a-button--fluid\` - Selector for applying fluid styles (width: 100%)
  ---
`

const bemModifiers = [
  null,
  'a-button--secondary',
  'a-button--blank',
  'a-button--fluid'
]

storiesOf('Atoms/Button', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AButton },
    props: {
      classKnobs: {
        default: select('BEM Modifier', bemModifiers)
      },
      textKnobs: {
        default: text('Text', 'Button text')
      }
    },
    template: `
      <a-button :class="classKnobs">
        {{ textKnobs }}
      </a-button>
    `
  }))
  .add('With slot', () => ({
    components: { AButton, AIcon },
    props: {
      classKnobs: {
        default: select('BEM Modifier', bemModifiers)
      }
    },
    template: `
      <a-button
        :class="classKnobs"
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
