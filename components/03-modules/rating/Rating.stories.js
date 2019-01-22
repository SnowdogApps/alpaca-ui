import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaRatingRate from './RatingRate.vue'

storiesOf('Modules/Rating', module)
  .add('Default', () => ({
    components: { App, AlpacaRatingRate },
    data: () => ({
      rating: 3
    }),
    template: `
      <app>
        <alpaca-rating-rate 
         width="72%"
         legend="Rating"
        >
        </alpaca-rating-rate>
      </app>
    `
  }))
  .add('Rate', () => ({
    components: { App, AlpacaRatingRate },
    data: () => ({
      rating: 3
    }),
    template: `
      <app>
        <alpaca-rating-rate 
         v-model="rating"
         :rating-items="5"
         legend="Your rating"
        >
        </alpaca-rating-rate>
      </app>
    `
  }))
