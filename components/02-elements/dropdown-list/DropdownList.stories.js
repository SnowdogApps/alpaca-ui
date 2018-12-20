import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaDropdownList from './DropdownList.vue'
import AlpacaDropdownListNested from './DropdownListNested.vue'

import elements from './mocks/dropdownList'

storiesOf('Elements/Dropdown list', module)
  .add('Default', () => ({
    components: { App, AlpacaDropdownList },
    data: () => ({
      elements
    }),
    template: `
      <app>
        <alpaca-dropdown-list
        :elements="elements.dropdowns"
        />
      </app>
    `
  }))
storiesOf('Elements/Dropdown list', module)
  .add('Dropdown list with nested', () => ({
    components: { App, AlpacaDropdownListNested },
    data: () => ({
      elements
    }),
    template: `
      <app>
        <alpaca-dropdown-list-nested
        :elements="elements.variants[3].context.dropdowns"
        />
      </app>
    `
  }))
