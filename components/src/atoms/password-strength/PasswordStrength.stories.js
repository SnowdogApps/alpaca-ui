import { storiesOf } from '@storybook/vue'

import PasswordStrength from './PasswordStrength.vue'

const info = `
  ------
  #### Available classes for \`Password Strength\` component:
  - \`password-none\`
  - \`password-weak\`
  - \`password-medium\`
  - \`password-strong\`
  - \`password-very-strong\`
  ------
`

storiesOf('Atoms/PasswordStrength', module)
  .add('No Password', () => ({
    components: { PasswordStrength },
    template: `
        <password-strength class="password-none">
          No password
        </password-strength>
    `
    }),
    { info }
  )
  .add('Weak', () => ({
    components: { PasswordStrength },
    template: `
      <password-strength class="password-weak">
        Weak
      </password-strength>
    `
    }),
    { info }
  )
  .add('Medium', () => ({
    components: { PasswordStrength },
    template: `
      <password-strength class="password-medium">
        Medium
      </password-strength>
    `
    }),
    { info }
  )
  .add('Strong', () => ({
    components: { PasswordStrength },
    template: `
      <password-strength class="password-strong">
        Strong
      </password-strength>
    `
    }),
    { info }
  )
  .add('Very Strong', () => ({
    components: { PasswordStrength },
    template: `
      <password-strength class="password-very-strong">
        Very strong
      </password-strength>
    `
    }),
    { info }
  )
