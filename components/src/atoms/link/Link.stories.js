import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import ALink from './Link.vue'

const info = `
  ---
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.a-link--inverted\` - Selector for applying inverted styles
  - \`.a-link--secondary\` -  Selector for applying secondary styles
  ---
`
const bemModifiers = [
  null,
  'a-link--inverted',
  'a-link--secondary'
]

storiesOf('Atoms/Link', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ALink },
    props: {
      textKnob: {
        default: text('Link text', 'Default link')
      },
      classKnob: {
        default: select('BEM Modifier', bemModifiers)
      }
    },
    template: `
      <a-link 
        href="#"
        :class="classKnob"
      >
        {{ textKnob }}
      </a-link>
    `
  }))
  .add('Inverted', () => ({
    components: { ALink },
    props: {
      textKnob: {
        default: text('Link text', 'Inverted')
      },
      classKnob: {
        default: select('BEM Modifier', bemModifiers)
      }
    },
    template: `
      <a-link
        href="#"
        :class="classKnob"
      >
        {{ textKnob }}
      </a-link>
    `
  }))
  .add('Secondary', () => ({
    components: { ALink },
    props: {
      textKnob: {
        default: text('Link text', 'Secondary')
      },
      classKnob: {
        default: select('BEM Modifier', bemModifiers)
      }
    },
    template: `
      <a-link
        href="#"
        :class="classKnob"
      >
        {{ textKnob }}
      </a-link>
    `
  }))
