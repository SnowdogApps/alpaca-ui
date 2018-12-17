import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaRatingRate from './RatingRate.vue'

storiesOf('Elements/Rate', module)
  .add('Default', () => ({
    components: { App, AlpacaRatingRate },
    template: `
      <app>
        <alpaca-rating-rate 
          title="xxx"
         aria-label="xxx"
        >
        </alpaca-rating-rate>
      </app>
    `
  }))
