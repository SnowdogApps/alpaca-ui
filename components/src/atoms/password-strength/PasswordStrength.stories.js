import { storiesOf } from '@storybook/vue'

import APasswordStrength from './PasswordStrength.vue'

const info = `
  ------
  #### Use these modifiers with \`.password-strength\` class:
  - \`.password-strength--weak\` - Class for applying weak password styles
  - \`.password-strength--medium\` - Class for applying medium password styles
  - \`.password-strength--strong\` - Class for applying strong password styles
  - \`.password-strength--very-strong\` - Class for applying very strong password styles
  ------
`

storiesOf('Atoms/PasswordStrength', module)
  .addParameters({ info })
  // @vue/component
  .add('Default', () => ({
    components: { APasswordStrength },
    template: `
      <a-password-strength>
        No password
      </a-password-strength>
    `
  }))
  // @vue/component
  .add('Visible Label', () => ({
    components: { APasswordStrength },
    template: `
      <a-password-strength label="Passworf strength">
        No password
      </a-password-strength>
    `
  }))
  // @vue/component
  .add('Medium strength', () => ({
    components: { APasswordStrength },
    template: `
      <a-password-strength class="password-strength--medium">
        Medium
      </a-password-strength>
    `
  }))
