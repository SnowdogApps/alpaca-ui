import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaRate from './Rate.vue'

storiesOf('Elements/Rate', module)
  .add('Default', () => ({
    components: { App, AlpacaRate },
    data: () => ({
      rating: 3
    }),
    template: `
      <app>
        <alpaca-rate 
         v-model="rating"
         :rating-items="5"
         legend="Your rating"
        >
        </alpaca-rate>
      </app>
    `
  }))
