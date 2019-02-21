import { storiesOf } from "@storybook/vue"

import App from "../../01-globals/app/App.vue"
import DropdownList from "./DropdownList.vue"

import nestedItems from './mocks/dropdownList.json'
import items from './mocks/dropdownItems.json'

storiesOf("Elements/Dropdown v2", module)
  .add("Default", () => ({
    components: { App, DropdownList },
    data: () => ({
      nestedItems
    }),
    template: `
      <app>
        <dropdown-list
          inner
          :nodes="nestedItems.nodes" 
          :depth="0"   
          label="All"
        />
      </app>
    `
  }))

storiesOf("Elements/Dropdown v2", module)
  .add("Secondary", () => ({
    components: { App,  DropdownList },
    data: () => ({
      items
    }),
    template: `
      <app>
        <dropdown-list
          secondary
          :nodes="items" 
          :depth="0"   
          label="All"
        />
      </app>
    `
  }))

