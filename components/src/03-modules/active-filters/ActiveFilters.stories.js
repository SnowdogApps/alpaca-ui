import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AlpacaActiveFilters from './ActiveFilters.vue'

import filters from './mocks/active-filters.json'

storiesOf('Modules/ActiveFilters', module)
  .add('Default', () => ({
    components: { AlpacaActiveFilters },
    data: () => ({
      filters
    }),
    template: `
        <alpaca-active-filters
          :items="filters"
          clear-button="Clear all"
          @clearAll="clearAll"
          @clearItem="clearItem"
        />
    `,
    methods: {
      clearAll: action('Clear all items'),
      clearItem: action('Clear single item')
    }
  }))
