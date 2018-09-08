import { storiesOf } from '@storybook/vue'

import App from '../components/01-globals/app/App.vue'
import AlpacaButton from '../components/02-elements/button/Button.vue'

storiesOf('Elements|Button', module)
  .add('Default', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button>
          test
        </alpaca-button>
      </app>
    `,
  }))
  .add('Icon', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button icon="search" />
      </app>
    `,
  }))
