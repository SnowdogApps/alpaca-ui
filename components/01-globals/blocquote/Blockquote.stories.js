import {storiesOf} from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaBlockquote from './Blockquote.vue'

storiesOf('Global/Typography', module).add('Blockquote', () => ({
  components: { App, AlpacaBlockquote },
  template: `
      <app>
        <alpaca-blockquote>Test</alpaca-blockquote>
        <alpaca-blockquote tag="span">Test</alpaca-blockquote>
      </app>
    `,
}))
