import {storiesOf} from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaPreformatted from './Preformatted.vue'

storiesOf('Global/Typography', module).add('Preformatted', () => ({
  components: { App, AlpacaPreformatted },
  template: `
      <app>
        <alpaca-preformatted tag="div">Test</alpaca-preformatted>
        <alpaca-preformatted>Test</alpaca-preformatted>
      </app>
    `,
}))
