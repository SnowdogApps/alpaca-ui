import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaRate from './Rate.vue'

storiesOf('Elements/Rate', module)
  .add('Default', () => ({
    components: { App, AlpacaRate },
    data: () => ({
      rating: 2.4,
      ratingItems: 5
    }),
    template: `
      <app>
        <alpaca-rate 
         v-model="rating"
         :rating-items="ratingItems"
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
      rating: 3,
      ratingItems: 5
    }),
    template: `
      <app> 
        <alpaca-rate 
         v-model="rating"
         :rating-items="ratingItems"
         :aria-label-rate="ariaLabelRate()"
         legend="Your rating"
         @change="select"
        >
        </alpaca-rate>
      </app>
    `,
    methods: {
      select: action('Selected'),
      ariaLabelRate() {
        return `Rate option, ${this.rating} of ${this.ratingItems}. Click to vote`
      }
    }
  }))
