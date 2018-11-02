import {storiesOf} from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaParagraph from './Paragraph.vue'

storiesOf('Global/Typography', module).add('Paragraph', () => ({
  components: {App, AlpacaParagraph},
  template: `
      <app>
        <alpaca-paragraph>Test</alpaca-paragraph>
        <alpaca-paragraph tag="div">Test</alpaca-paragraph>
      </app>
    `
}))
