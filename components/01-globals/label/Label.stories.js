import { storiesOf } from '@storybook/vue'

import AlpacaLabel from './Label.vue'

storiesOf('Global/Label', module)
  .add('Default', () => ({
    components: { AlpacaLabel },
    template: `
        <alpaca-label>
          Label
        </alpaca-label>
    `
  }))
  .add('Custom tag', () => ({
    components: { AlpacaLabel },
    template: `
        <alpaca-label
          tag="span"
        >
          Custom tag label
        </alpaca-label>
    `
  }))
  .add('Inline', () => ({
    components: { AlpacaLabel },
    template: `
        <alpaca-label inline>
          Inline label
        </alpaca-label>
    `
  }))
