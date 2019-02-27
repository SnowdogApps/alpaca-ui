import {storiesOf} from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaBadge from './Badge.vue'

storiesOf('Elements/Badge', module)
  .add('Default', () => ({
    components: { App, AlpacaBadge },
    template: `
      <app>
        <alpaca-badge>
          Default badge
        </alpaca-badge>
      </app>
    `
  }))
  .add('Custom tag', () => ({
    components: { App, AlpacaBadge },
    template: `
      <app>
        <alpaca-badge
          tag="span"
        >
          Custom tag
        </alpaca-badge>
      </app>
    `
  }))
  .add('New', () => ({
    components: { App, AlpacaBadge },
    template: `
      <app>
        <alpaca-badge
          type="new"
        >
          New badge
        </alpaca-badge>
      </app>
    `
  }))
  .add('Sale', () => ({
    components: { App, AlpacaBadge },
    template: `
      <app>
        <alpaca-badge
          type="sale"
        >
          Sale badge
        </alpaca-badge>
      </app>
    `
  }))
