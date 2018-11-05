import {storiesOf} from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaBlockquote from './Blockquote.vue'

storiesOf('Global/Typography', module).add('Blockquote', () => ({
  components: { App, AlpacaBlockquote },
  template: `
      <app>
        <alpaca-blockquote blocquote="Test">Test</alpaca-blockquote>
        <alpaca-blockquote citeHref="http://google.com/" cite="Test" blockquote="Test"/>
      </app>
    `,
}))
