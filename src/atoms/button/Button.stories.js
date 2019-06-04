import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'
import generateVueInfoTable from '../../../utils/vue-info-table.js'

import AButton from './Button.vue'
import AIcon from '../icon/Icon.vue'

const bemModifiersConfig = [
  {
    name: '.a-button--secondary',
    description: 'Selector for applying secondary styles'
  },
  {
    name: '.a-button--blank',
    description: 'Selector for applying blank styles'
  },
  {
    name: '.a-button--fluid',
    description: 'Selector for applying fluid styles (width: 100%)'
  }
]

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(bemModifiersConfig, 'BEM modifiers')}
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
