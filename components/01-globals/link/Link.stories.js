import {storiesOf} from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaLink from './Link.vue'

storiesOf('Global/Link', module)
  .add('Default', () => ({
  components: {App, AlpacaLink},
  template: `
      <app>
        <alpaca-link href="http://google.com/">Test</alpaca-link>
        <alpaca-link href="http://google.com/" :invert="true">Test</alpaca-link>
        <alpaca-link href="http://google.com/" :secondary="true">Test</alpaca-link>
      </app>
    `
}))
