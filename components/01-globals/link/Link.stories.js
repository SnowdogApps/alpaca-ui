import { storiesOf } from '@storybook/vue'

import AlpacaLink from './Link.vue'

storiesOf('Global/Link', module)
  .add('Default', () => ({
    components: { AlpacaLink },
    template: `
        <alpaca-link
          href="#"
        >
          Default link
        </alpaca-link>
    `
  }))
  .add('Inverted', () => ({
    components: { AlpacaLink },
    template: `
        <alpaca-link
          href="#"
          inverted
        >
          Inverted link
        </alpaca-link>
    `
  }))
  .add('Secondary', () => ({
    components: { AlpacaLink },
    template: `
        <alpaca-link
          href="#"
          secondary
        >
          Secondary link
        </alpaca-link>
    `
  }))
