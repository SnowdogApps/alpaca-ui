import {storiesOf} from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaBadge from './Badge.vue'

storiesOf('Elements/Badge', module)
  .add('Default', () => ({
    components: {App, AlpacaBadge},
    template: `
      <app>
        <alpaca-badge>Test</alpaca-badge>
        <alpaca-badge :newBadge="true">Test</alpaca-badge>
        <alpaca-badge tag="span" :discountBadge="true">Test</alpaca-badge>
      </app>
    `
  }))
