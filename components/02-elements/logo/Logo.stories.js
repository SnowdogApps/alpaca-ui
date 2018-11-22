import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaLogo from './Logo.vue'

storiesOf('Elements/Logo', module)
  .add('Default', () => ({
    components: { App, AlpacaLogo },
    template: `
      <app>
        <alpaca-logo 
          src="/icons/alpaca.svg"
          to="/"
        />
       </app>
    `
  }))
