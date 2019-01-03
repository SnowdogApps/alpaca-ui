import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaActiveFilters from './ActiveFilters.vue'

import listElements from './mocks/active-filters.json'

storiesOf('Modules/ActiveFilters', module)
  .add('Default', () => ({
    components: { App, AlpacaActiveFilters },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-active-filters 
          :items="listElements.filters"
          :clear-action="listElements.clear"
        />
      </app>
    `
  }))
