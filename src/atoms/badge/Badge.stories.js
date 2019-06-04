import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import ABadge from './Badge.vue'

const info = `
  ---
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.a-badge--new\` - Selector for applying styles for new badge
  - \`.a-badge--sale\` - Selector for applying styles for sale badge
  ---
`

const bemModifiers = [
  null,
  'a-badge--new',
  'a-badge--sale'
]

storiesOf('Atoms/Badge', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ABadge },
    props: {
      textKnob: {
        default: text('Badge text', 'Default badge')
      },
      classKnob: {
        default: select('BEM Modifier', bemModifiers)
      }
    },
    template: `
      <a-badge :class="classKnob">
        {{ textKnob }}
      </a-badge>
    `
  }))
  .add('Custom tag', () => ({
    components: { ABadge },
    props: {
      textKnob: {
        default: text('Badge text', 'Custom tag')
      },
      classKnob: {
        default: select('BEM Modifier', bemModifiers)
      }
    },
    template: `
      <a-badge
        tag="span"
        :class="classKnob"
      >
        {{ textKnob }}
      </a-badge>
    `
  }))
