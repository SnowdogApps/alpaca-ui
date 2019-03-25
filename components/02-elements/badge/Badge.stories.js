import {storiesOf} from '@storybook/vue'

import AlpacaBadge from './Badge.vue'

storiesOf('Elements/Badge', module)
  .add('Default', () => ({
    components: { AlpacaBadge },
    template: `
        <alpaca-badge>
          Default badge
        </alpaca-badge>
    `
  }))
  .add('Custom tag', () => ({
    components: { AlpacaBadge },
    template: `
        <alpaca-badge
          tag="span"
        >
          Custom tag
        </alpaca-badge>
    `
  }))
  .add('New', () => ({
    components: { AlpacaBadge },
    template: `
        <alpaca-badge
          type="new"
        >
          New badge
        </alpaca-badge>
    `
  }))
  .add('Sale', () => ({
    components: { AlpacaBadge },
    template: `
        <alpaca-badge
          type="sale"
        >
          Sale badge
        </alpaca-badge>
    `
  }))
