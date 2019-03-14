import { storiesOf } from '@storybook/vue'
import { action } from "@storybook/addon-actions"

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaFilters from './Filters.vue'

import swatchItems from '@alpaca-storybook/components/03-modules/filter/mocks/swatchItems.json'
import colorItems from '@alpaca-storybook/components/03-modules/filter/mocks/colorItems.json'
import checkboxItems from '@alpaca-storybook/components/03-modules/filter/mocks/checkboxItems.json'
import activeFilterItems from '@alpaca-storybook/components/03-modules/active-filters/mocks/active-filters.json'

storiesOf('Modules/Filters', module)
  .add('Default', () => ({
    components: { App, AlpacaFilters },
    data: () => ({
      swatchItems,
      colorItems,
      activeFilterItems,
      checkboxItems,
      val: [0, 1000]
    }),
    template: `
      <app>
        <alpaca-filters
          active-filters-heading="Now Shopping by"
          all-filters-heading="Shopping Options"
          :active-filter-items="activeFilterItems"
          :swatch-items="swatchItems"
          swatch-title="Swatch"
          :color-items="colorItems"
          color-title="color"
          :checkbox-items="checkboxItems"
          :min="0"
          :max="1000"
          :val="val"
          @selectOptions="selectOptions"
          @checkSwatch="checkSwatch"
          @checkColor="checkColor"
          @updateVal="updateVal"
        />
      </app>
    `,
    methods: {
      selectOptions: action('Updated val'),
      checkSwatch: action('Updated swatch'),
      checkColor: action('Updated color'),
      updateVal: action('Updated range')
    }
  }))
