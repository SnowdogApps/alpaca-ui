import { storiesOf } from '@storybook/vue'

import textSwatch from './mocks/text-swatch.json'
import iconSwatch from './mocks/icon-swatch.json'

import App from '../../01-globals/app/App.vue'
import AlpacaSwatch from './Swatch.vue'

storiesOf('Elements/Swatch', module)
  .add('Default', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      textSwatch
    }),
    template: `
      <app>
        <alpaca-swatch :options="textSwatch.options"/>
      </app>
    `
  }))
  .add('Icon', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      iconSwatch
    }),
    template: `
      <app>
        <alpaca-swatch :options="iconSwatch.options" :image="true"/>
      </app>
    `
  }))
