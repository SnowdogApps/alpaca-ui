import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaActiveFilters from './ActiveFilters.vue'

import filters from './mocks/active-filters.json'

storiesOf('Modules/ActiveFilters', module)
  .add('Default', () => ({
    components: { App, AlpacaActiveFilters },
    data: () => ({
      filters
    }),
    template: `
      <app>
        <alpaca-active-filters 
          :items="filters"
          clear-button="Clear all"
          @clearAll="clearAll"
          @clearItem="clearItem"
        />
      </app>
    `,
    methods: {
      clearAll: action('Clear all items'),
      clearItem: action('Clear single item')
    }
  }))
