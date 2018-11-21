import { storiesOf } from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaLink from './Link.vue'

storiesOf('Global/Link', module)
  .add('Default', () => ({
    components: { App, AlpacaLink },
    template: `
      <app>
        <alpaca-link
          href="#"
        >
          Default link
        </alpaca-link>
      </app>
    `
  }))
  .add('Inverted', () => ({
    components: { App, AlpacaLink },
    template: `
      <app>
        <alpaca-link
          href="#"
          inverted
        >
          Inverted link
        </alpaca-link>
      </app>
    `
  }))
  .add('Secondary', () => ({
    components: { App, AlpacaLink },
    template: `
      <app>
        <alpaca-link
          href="#"
          secondary
        >
          Secondary link
        </alpaca-link>
      </app>
    `
  }))
