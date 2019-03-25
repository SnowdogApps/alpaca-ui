import { storiesOf } from "@storybook/vue"
import StoryRouter from 'storybook-vue-router'

import AlpacaDropdownList from "./DropdownList.vue"
import AlpacaDropdownListItem from "./dropdown-list-item/DropdownListItem.vue"
import AlpacaDropdownListLink from "./dropdown-list-link/DropdownListLink.vue"

import dropdownListItemsNested from "./mocks/dropdownListItemsNested.json"
import dropdownListItems from "./mocks/dropdownListItems.json"

storiesOf("Elements/Dropdown List", module)
  .addDecorator(StoryRouter())
  .add("Default", () => ({
    components: { AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
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
    `
  }))
  .add("Nested with items as props", () => ({
    components: { AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItemsNested
    }),
    template: `
        <alpaca-dropdown-list :items="dropdownListItemsNested" />
    `
  }))
  .add("Screen M", () => ({
    components: { AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
        <alpaca-dropdown-list
          screenM
          :items="dropdownListItems"
        />
    `
  }))
  .add("Dark", () => ({
    components: { AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
        <alpaca-dropdown-list
          dark
          :items="dropdownListItems"
        />
    `
  }))
  .add("Secondary", () => ({
    components: { AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
        <alpaca-dropdown-list
          secondary
          :items="dropdownListItems"
        />
    `
  }))
  .add("Inner", () => ({
    components: { AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
        <alpaca-dropdown-list
          inner
          :items="dropdownListItems"
        />
    `
  }))
