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
          newBadge
        >
          New badge
        </alpaca-badge>
      </app>
    `
  }))
  .add('Discount', () => ({
    components: { App, AlpacaBadge },
    template: `
      <app>
        <alpaca-badge 
          discountBadge
         >
          Discount badge
        </alpaca-badge>
      </app>
    `
  }))
