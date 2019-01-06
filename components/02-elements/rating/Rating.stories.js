import { storiesOf } from '@storybook/vue'

import ratingItems from './mocks/ratingItems'
import rating from './mocks/rating'

import App from '../../01-globals/app/App.vue'
import AlpacaRatingRate from './RatingRate.vue'
import AlpacaRating from './Rating.vue'


storiesOf('Elements/Rate', module)
  .add('Default', () => ({
    components: { App, AlpacaRating },
    data: () => ({
      rating
    }),
    template: `
      <app>
        <alpaca-rating 
         :title="rating.title"
         :aria-label="rating.ariaLabel"
        >
        </alpaca-rating>
      </app>
    `
  }))
  .add('Rate', () => ({
    components: { App, AlpacaRatingRate },
    data: () => ({
      ratingItems,
      rating: 3
    }),
    template: `
      <app>
        <alpaca-rating-rate 
         v-model="rating"
         :rating-items="ratingItems.items"
         legend="Your rating"
        >
        </alpaca-rating-rate>
      </app>
    `
  }))
