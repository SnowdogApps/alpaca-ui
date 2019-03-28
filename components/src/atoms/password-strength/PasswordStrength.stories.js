import { storiesOf } from '@storybook/vue'

import APasswordStrength from './PasswordStrength.vue'

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
    components: { APasswordStrength },
    template: `
        <a-password-strength class="password-none">
          No password
        </a-password-strength>
    `
    }),
    { info }
  )
  .add('Weak', () => ({
    components: { APasswordStrength },
    template: `
      <a-password-strength class="password-weak">
        Weak
      </a-password-strength>
    `
    }),
    { info }
  )
  .add('Medium', () => ({
    components: { APasswordStrength },
    template: `
      <a-password-strength class="password-medium">
        Medium
      </a-password-strength>
    `
    }),
    { info }
  )
  .add('Strong', () => ({
    components: { APasswordStrength },
    template: `
      <a-password-strength class="password-strong">
        Strong
      </a-password-strength>
    `
    }),
    { info }
  )
  .add('Very Strong', () => ({
    components: { APasswordStrength },
    template: `
      <a-password-strength class="password-very-strong">
        Very strong
      </a-password-strength>
    `
    }),
    { info }
  )
