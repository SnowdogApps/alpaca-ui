import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AlpacaDropdownList from '../../02-elements/dropdown-list/DropdownList.vue'
import AlpacaCheckboxFilter from '../checkbox-filter/CheckboxFilter.vue'
import AlpacaColorFilter from '../color-filter/ColorFilter.vue'
import AlpacaSwatchFilter from '../swatch-filter/SwatchFilter.vue'

import swatchItems from './mocks/swatchItems'
import colorItems from './mocks/colorItems'
import checkboxItems from './mocks/checkboxItems'

storiesOf('Modules/Filter', module)
  .add('Swatch', () => ({
    components: { AlpacaSwatchFilter, AlpacaDropdownList },
    data: () => ({
      swatchItems
    }),
    template: `
       <alpaca-dropdown-list secondary>
          <alpaca-swatch-filter
            title="Swatch"
            id="swatchId"
            :items="swatchItems"
            @click="click"
          />
        </alpaca-dropdown-list>
    `,
    methods: {
      click: action('Clicked'),
    }
  }))
  .add('Color', () => ({
    components: { AlpacaDropdownList, AlpacaColorFilter },
    data: () => ({
      colorItems
    }),
    template: `
       <alpaca-dropdown-list secondary>
          <alpaca-color-filter
            title="Color"
            id="colorId"
            :items="colorItems"
            @click="click"
          />
        </alpaca-dropdown-list>
    `,
    methods: {
      click: action('Clicked'),
    }
  }))
  .add('Checkbox', () => ({
    components: { AlpacaDropdownList, AlpacaCheckboxFilter },
    data: () => ({
      checkboxItems
    }),
    template: `
       <alpaca-dropdown-list secondary>
          <alpaca-checkbox-filter
            title="Checkbox"
            id="checkboxId"
            :items="checkboxItems"
          />
        </alpaca-dropdown-list>
    `
  }))
