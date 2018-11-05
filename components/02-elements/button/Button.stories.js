import {storiesOf} from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaButton from './Button.vue'

storiesOf('Elements/Button', module)
  .add('Default', () => ({
    components: {App, AlpacaButton},
    template: `
      <app>
        <alpaca-button>Test </alpaca-button>
        <alpaca-button link="true">Test</alpaca-button>
        <alpaca-button tag="div">Test</alpaca-button>
      </app>
    `
  }))
  .add('Icon', () => ({
    components: {App, AlpacaButton},
    template: `
      <app>
        <alpaca-button icon="search"/>
      </app>
    `
  }))
