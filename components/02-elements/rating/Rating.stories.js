import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaRating from './Rating.vue'
import AlpacaRatingRate from './RatingRate.vue'

storiesOf('Elements/Rate', module)
  .add('Default', () => ({
    components: { App, AlpacaRating, AlpacaRatingRate },
    template: `
      <app>
        <alpaca-rating 
          title="xxx"
         aria-label="xxx"
        >
        </alpaca-rating>
      </app>
    `
  }))
