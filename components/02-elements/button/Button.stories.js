import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaButton from './Button.vue'

storiesOf('Elements/Button', module)
  .add('Default', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button>
          Default button
        </alpaca-button>
      </app>
    `
  }))
  .add('Secondary', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button
          secondary
        >
          Secondary button
        </alpaca-button>
      </app>
    `
  }))
  .add('Fluid', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button
          fluid
        >
          Fluid button
        </alpaca-button>
      </app>
    `
  }))
  .add('Link', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button
          tag="a"
          link="#"
        >
          Link button
        </alpaca-button>
      </app>
    `
  }))
  .add('Icon', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button icon="search" />
      </app>
    `
  }))
  .add('Icon and text', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button icon="search">
          Search
        </alpaca-button>
      </app>
    `
  }))
