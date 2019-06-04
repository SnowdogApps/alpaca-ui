import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import APasswordStrength from './PasswordStrength.vue'

const info = `
  ------
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.a-password-strength--weak\` - Class for applying weak password styles
  - \`.a-password-strength--medium\` - Class for applying medium password styles
  - \`.a-password-strength--strong\` - Class for applying strong password styles
  - \`.a-password-strength--very-strong\` - Class for applying very strong password styles
  ------
`

const bemModifiers = [
  null,
  'a-password-strength--weak',
  'a-password-strength--medium',
  'a-password-strength--strong',
  'a-password-strength--very-strong'
]

storiesOf('Atoms/PasswordStrength', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { APasswordStrength },
    props: {
      classKnobs: {
        default: select('BEM Modifier', bemModifiers)
      },
      textKnobs: {
        default: text('Content', 'No password')
      },
      labelKnobs: {
        default: text('Label', 'Passworf strength')
      }
    },
    template: `
      <a-password-strength
        :class="classKnobs"
        :label="labelKnobs"
      >
        {{ textKnobs }}
      </a-password-strength>
    `
  }))
