import {storiesOf} from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaLabel from './Label.vue'

storiesOf('Global/Typography', module).add('Label', () => ({
  components: {App, AlpacaLabel},
  template: `
      <app>
        <alpaca-label>Test</alpaca-label>
        <alpaca-label :inline="true">Test</alpaca-label>
        <alpaca-label :hidden="true">Test</alpaca-label>
        <alpaca-label tag="span">Test</alpaca-label>
      </app>
    `
}))
