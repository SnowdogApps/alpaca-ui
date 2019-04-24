import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ARate from './Rate.vue'

const info = `
  ---
  #### Use these modifiers with \`.radio\` class.
  - \`.rating--large\` - Selector for applying large styles
  ---
`

storiesOf('Molecules/Rate', module)
  .addParameters({ info })
  // @vue/component
  .add('Default', () => ({
    components: { ARate },
    data: () => ({
      rating: 2.4,
      ratingItems: 5
    }),
    template: `
       <a-rate 
        v-model="rating"
        :rating-items="ratingItems"
        disabled
        legend="Your rating"
       />
    `
  }))
  // @vue/component
  .add('Rate', () => ({
    components: { ARate },
    data: () => ({
      rating: 1,
      ratingItems: 4
    }),
    methods: {
      select: action('Selected'),
      ariaLabelRate () {
        return `Rate option, ${this.rating} of ${this.ratingItems}. Click to vote`
      }
    },
    template: `
      <a-rate 
       v-model="rating"
       :rating-items="ratingItems"
       :aria-label-rate="ariaLabelRate()"
       legend="Your rating"
       @change="select"
      />
    `
  }))
  // @vue/component
  .add('Large', () => ({
    components: { ARate },
    data: () => ({
      rating: 2.4,
      ratingItems: 5
    }),
    template: `
      <a-rate 
       class="rating--large"
       v-model="rating"
       :rating-items="ratingItems"
       disabled
       legend="Your rating"
      />
    `
  }))
  // @vue/component
  .add('With slot', () => ({
    components: { ARate },
    data: () => ({
      rating: 3,
      ratingItems: 3
    }),
    methods: {
      ariaLabelRate () {
        return `Rate option, ${this.rating} of ${this.ratingItems}. Click to vote`
      }
    },
    template: `
      <a-rate 
       v-model="rating"
       :rating-items="ratingItems"
       :aria-label-rate="ariaLabelRate()"
       legend="Your rating"
      >
        <template #item="data">
          <span>{{ data.item }}</span>
        </template>
      </a-rate>
    `
  }))
