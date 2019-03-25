import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../app/App.vue'
import AlpacaDropdownList from '@alpaca-storybook/components/02-elements/dropdown-list/DropdownList.vue'
import AlpacaCheckboxFilter from './checkbox-filter/CheckboxFilter.vue'
import AlpacaColorFilter from './color-filter/ColorFilter.vue'
import AlpacaSwatchFilter from './swatch-filter/SwatchFilter.vue'

import swatchItems from './mocks/swatchItems'
import colorItems from './mocks/colorItems'
import checkboxItems from './mocks/checkboxItems'

storiesOf('Modules/Filter', module)
  .add('Swatch', () => ({
    components: { App, AlpacaSwatchFilter, AlpacaDropdownList },
    data: () => ({
      swatchItems
    }),
    template: `
     <app>
       <alpaca-dropdown-list secondary>
          <alpaca-swatch-filter
            title="Swatch"
            id="swatchId"
            :items="swatchItems"
            @click="click"
          />
        </alpaca-dropdown-list>
      </app>
    `,
    methods: {
      click: action('Clicked'),
    }
  }))
  .add('Color', () => ({
    components: { App, AlpacaDropdownList, AlpacaColorFilter },
    data: () => ({
      colorItems
    }),
    template: `
     <app>
       <alpaca-dropdown-list secondary>
          <alpaca-color-filter
            title="Color"
            id="colorId"
            :items="colorItems"
            @click="click"
          />
        </alpaca-dropdown-list>
      </app>
    `,
    methods: {
      click: action('Clicked'),
    }
  }))
  .add('Checkbox', () => ({
    components: { App, AlpacaDropdownList, AlpacaCheckboxFilter },
    data: () => ({
      checkboxItems
    }),
    template: `
     <app>
       <alpaca-dropdown-list secondary>
          <alpaca-checkbox-filter
            title="Checkbox"
            id="checkboxId"
            :items="checkboxItems"
          />
        </alpaca-dropdown-list>
      </app>
    `
  }))
