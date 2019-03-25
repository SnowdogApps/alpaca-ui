import { storiesOf } from '@storybook/vue'

import AlpacaHeading from './Heading.vue'

storiesOf('Global/Heading', module)
  .add('Default', () => ({
    components: { AlpacaHeading },
    template: `
        <alpaca-heading
          :level="1"
        >
          Heading level 1
        </alpaca-heading>
    `
  }))
  .add('Custom tag', () => ({
    components: { AlpacaHeading },
    template: `
        <alpaca-heading
          :level="4"
          tag="span"
        >
          Span level 4
        </alpaca-heading>
    `
  }))
  .add('Page heading', () => ({
    components: { AlpacaHeading },
    template: `
        <alpaca-heading
          :level="6"
          :page="true"
        >
          Page level 6
        </alpaca-heading>
    `
  }))
