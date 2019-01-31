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
          @clear="clearMethod"
          @clearSingleFilter="clearSingleMethod"
        />
      </app>
    `,
    methods: {
      clearMethod: action('Clear all'),
      clearSingleMethod: action('Clear single element')
    }
  }))
