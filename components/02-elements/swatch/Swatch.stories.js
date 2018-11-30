import { storiesOf } from '@storybook/vue'

import textSwatch from './mocks/text-swatch.json'

import App from '../../01-globals/app/App.vue'
import AlpacaSwatch from './Swatch.vue'
import table from "../table/mocks/table";

storiesOf('Elements/Swatch', module)
  .add('Default', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      textSwatch
    }),
    template: `
      <app>
        <alpaca-swatch :options="textSwatch.options">
          
        </alpaca-swatch>
      </app>
    `
  }))
