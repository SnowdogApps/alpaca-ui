import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AlpacaRate from './Rate.vue'

const info = `
  ---
  #### Use these modifiers with \`.radio\` class.
  - \`.rating--large\` - Selector for applying large styles
  ---
`

storiesOf('Molecules/Rate', module)
  .addParameters({ info })
  .add(
    'Default',
    () => ({
      components: { AlpacaRate },
      data: () => ({
        rating: 2.4,
        ratingItems: 5
      }),
      template: `
        <alpaca-rate 
         v-model="rating"
         :rating-items="ratingItems"
         disabled
         legend="Your rating"
        />
      `
    })
  )
  .add(
    'Rate',
    () => ({
      components: { AlpacaRate },
      data: () => ({
        rating: 3,
        ratingItems: 5
      }),
      template: `
        <alpaca-rate 
         v-model="rating"
         :rating-items="ratingItems"
         :aria-label-rate="ariaLabelRate()"
         legend="Your rating"
         @change="select"
        />
      `,
      methods: {
        select: action('Selected'),
        ariaLabelRate() {
          return `Rate option, ${this.rating} of ${this.ratingItems}. Click to vote`
        }
      }
    })
  )
  .add(
    'Large',
    () => ({
      components: { AlpacaRate },
      data: () => ({
        rating: 2.4,
        ratingItems: 5
      }),
      template: `
        <alpaca-rate 
         class="rating--large"
         v-model="rating"
         :rating-items="ratingItems"
         disabled
         legend="Your rating"
        />
      `
    })
  )
