import { storiesOf } from "@storybook/vue"
import StoryRouter from 'storybook-vue-router'

import App from "../app/App.vue"
import AlpacaDropdownList from "./DropdownList.vue"
import AlpacaDropdownListItem from "./dropdown-list-item/DropdownListItem.vue"
import AlpacaDropdownListLink from "./dropdown-list-link/DropdownListLink.vue"

import dropdownListItemsNested from "./mocks/dropdownListItemsNested.json"
import dropdownListItems from "./mocks/dropdownListItems.json"

storiesOf("Elements/Dropdown List", module)
  .addDecorator(StoryRouter())
  .add("Default", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
      <app>
        <alpaca-dropdown-list>
          <template v-for="element in dropdownListItems">
            <alpaca-dropdown-list-item
              v-if="element.content"
              :title="element.title"
              :key="element.id"
              :collapse="true"
              id="element.id"
            >
              {{element.content}}
            </alpaca-dropdown-list-item>
            <alpaca-dropdown-list-link
              v-else
              :key="element.id"
              :title="element.title"
              :href="element.href"
            />
          </template>
        </alpaca-dropdown-list>
      </app>
    `
  }))
  .add("Nested with items as props", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItemsNested
    }),
    template: `
      <app>
        <alpaca-dropdown-list :items="dropdownListItemsNested" />
      </app>
    `
  }))
  .add("Screen M", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
      <app>
        <alpaca-dropdown-list
          screenM
          :items="dropdownListItems"
        />
      </app>
    `
  }))
  .add("Dark", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
      <app>
        <alpaca-dropdown-list
          dark
          :items="dropdownListItems"
        />
      </app>
    `
  }))
  .add("Secondary", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
      <app>
        <alpaca-dropdown-list
          secondary
          :items="dropdownListItems"
        />
      </app>
    `
  }))
  .add("Inner", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
      <app>
        <alpaca-dropdown-list
          inner
          :items="dropdownListItems"
        />
      </app>
    `
  }))
