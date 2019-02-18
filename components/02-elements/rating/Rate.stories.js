import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaRate from './Rate.vue'

storiesOf('Elements/Rate', module)
  .add('Default', () => ({
    components: { App, AlpacaRate },
    template: `
      <app>
        <alpaca-rate 
         v-model="2.4"
         :rating-items="5"
         disabled
         legend="Your rating"
        >
        </alpaca-rate>
      </app>
    `
  }))
  .add('Rate', () => ({
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
         @change="select"
        >
        </alpaca-rate>
      </app>
    `,
    methods: {
      select: action('Selected')
    }
  }))
