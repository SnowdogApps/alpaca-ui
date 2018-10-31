import {storiesOf} from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaHeading from '../heading/Heading.vue'

storiesOf('Global/Typography', module).add('Heading', () => ({
  components: {App, AlpacaHeading},
  template: `
      <app>
        <alpaca-heading level="1">H1</alpaca-heading>
        <alpaca-heading level="4" tag="span">Span level 4</alpaca-heading>
        <alpaca-heading level="6" :page="true">Page level 6</alpaca-heading>
      </app>
    `
}))
