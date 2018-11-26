import { storiesOf } from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaHeading from './Heading.vue'

storiesOf('Global/Heading', module)
  .add('Default', () => ({
    components: { App, AlpacaHeading },
    template: `
      <app>
        <alpaca-heading
          :level="1"
        >
          Heading level 1
        </alpaca-heading>
      </app>
    `
  }))
  .add('Custom tag', () => ({
    components: { App, AlpacaHeading },
    template: `
      <app>
        <alpaca-heading
          :level="4"
          tag="span"
        >
          Span level 4
        </alpaca-heading>
      </app>
    `
  }))
  .add('Page heading', () => ({
    components: { App, AlpacaHeading },
    template: `
      <app>
        <alpaca-heading
          :level="6"
          :page="true"
        >
          Page level 6
        </alpaca-heading>
      </app>
    `
  }))
