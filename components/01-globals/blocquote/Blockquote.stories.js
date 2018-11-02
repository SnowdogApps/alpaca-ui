import {storiesOf} from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaBlockquote from './Blockquote.vue'

storiesOf('Global/Typography', module).add('Blockquote', () => ({
  components: { App, AlpacaBlockquote },
  template: `
      <app>
        <alpaca-blockquote>Test</alpaca-blockquote>
        <alpaca-blockquote href="http://google.com/" name="Test" >Test</alpaca-blockquote>
      </app>
    `,
}))
