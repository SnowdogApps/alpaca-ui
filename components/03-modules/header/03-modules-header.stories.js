import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaHeader from './Header.vue'

storiesOf('Modules/Header', module)
  .add('Default', () => ({
    components: { App, AlpacaHeader },
    template: `
      <app>
        <alpaca-header />
      </app>
    `,
  }))
