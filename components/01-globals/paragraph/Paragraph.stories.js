import {storiesOf} from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaParagraph from './Paragraph.vue'

storiesOf('Global/Paragraph', module)
  .add('Default', () => ({
    components: {App, AlpacaParagraph},
    template: `
      <app>
        <alpaca-paragraph>Test</alpaca-paragraph>
        <alpaca-paragraph tag="div">Test</alpaca-paragraph>
      </app>
    `
  }))
