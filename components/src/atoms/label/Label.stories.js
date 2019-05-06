import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import ALabel from './Label.vue'

const info = `
  ---
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.a-label--inline\` - Selector for applying inline styles
  - \`.a-label--hidden\` - Selector for applying hidden styles, mainly used for accessibility purposes
  ---
`

const bemModifiers = [null, 'a-label--inline', 'a-label--hidden']

storiesOf('Atoms/Label', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ALabel },
    props: {
      classKnobs: {
        default: select('BEM Modifier', bemModifiers)
      },
      textKnobs: {
        default: text('Text', 'Label')
      }
    },
    template: `
      <a-label :class="classKnobs">
        {{ textKnobs }}
      </a-label>
    `
  }))
  .add('Custom tag', () => ({
    components: { ALabel },
    props: {
      classKnobs: {
        default: select('BEM Modifier', bemModifiers)
      },
      textKnobs: {
        default: text('Text', 'Custom tag label')
      }
    },
    template: `
      <a-label
        tag="span"
        :class="classKnobs"
      >
        {{ textKnobs }}
      </a-label>
    `
  }))
