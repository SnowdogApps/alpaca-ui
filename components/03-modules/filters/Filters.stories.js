import { storiesOf } from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaFilters from './Filters.vue'

import swatchItems from '@alpaca-storybook/components/03-modules/filter/mocks/swatchItems'
import colorItems from '@alpaca-storybook/components/03-modules/filter/mocks/colorItems'
import checkboxItems from '@alpaca-storybook/components/03-modules/filter/mocks/checkboxItems'
import activeFilterItems from '@alpaca-storybook/components/03-modules/active-filters/mocks/active-filters.json'

storiesOf('Modules/Filters', module)
  .add('Default', () => ({
    components: { App, AlpacaFilters },
    data: () => ({
      swatchItems,
      colorItems,
      activeFilterItems,
      checkboxItems
    }),
    template: `
      <app>
        <alpaca-filters
          active-filters-heading="Now Shopping by"
          all-filters-heading="Shopping Options"
          :active-filter-items="activeFilterItems"
          :swatch-items="swatchItems"
          :color-items="colorItems"
          :checkbox-items="checkboxItems"
        />
      </app>
    `
  }))
