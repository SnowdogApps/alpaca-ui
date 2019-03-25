import { storiesOf } from '@storybook/vue'

import PasswordStrength from './PasswordStrength.vue'

storiesOf('Elements/PasswordStrength', module)
  .add('Default/No Password', () => ({
    components: { PasswordStrength },
    template: `
        <password-strength/>
    `
  }))
  .add('Weak', () => ({
    components: { PasswordStrength },
    template: `
        <password-strength :value="1"/>
    `
  }))
  .add('Medium', () => ({
    components: { PasswordStrength },
    template: `
        <password-strength :value="2"/>
    `
  }))
  .add('Strong', () => ({
    components: { PasswordStrength },
    template: `
        <password-strength :value="3"/>
    `
  }))
  .add('Very Strong', () => ({
    components: { PasswordStrength },
    template: `
        <password-strength :value="4"/>
    `
  }))
  .add('Custom strings', () => ({
    components: { PasswordStrength },
    template: `
        <password-strength
          label="Custom Label"
          :indicators="{
            0: 'No Password',
            1: 'Weak',
            2: 'Custom Medium',
            3: 'Strong',
            4: 'Very strong'
          }"
          :value="2"
        />
    `
  }))
