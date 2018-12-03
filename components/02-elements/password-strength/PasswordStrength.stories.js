import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import PasswordStrength from './PasswordStrength.vue'

storiesOf('Elements/PasswordStrength', module)
  .add('Default/No Password', () => ({
    components: { App, PasswordStrength },
    template: `
      <app>
        <password-strength/>
      </app>
    `
  }))
  .add('Weak', () => ({
    components: { App, PasswordStrength },
    template: `
      <app>
        <password-strength :value="1"/>
      </app>
    `
  }))
  .add('Medium', () => ({
    components: { App, PasswordStrength },
    template: `
      <app>
        <password-strength :value="2"/>
      </app>
    `
  }))
  .add('Strong', () => ({
    components: { App, PasswordStrength },
    template: `
      <app>
        <password-strength :value="3"/>
      </app>
    `
  }))
  .add('Very Strong', () => ({
    components: { App, PasswordStrength },
    template: `
      <app>
        <password-strength :value="4"/>
      </app>
    `
  }))
  .add('Custom strings', () => ({
    components: { App, PasswordStrength },
    template: `
      <app>
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
      </app>
    `
  }))


