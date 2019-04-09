import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import ADropdownList from './DropdownList.vue'
import ADropdownListItem from '../dropdown-list-item/DropdownListItem.vue'
import ADropdownListLink from '../dropdown-list-link/DropdownListLink.vue'

import dropdownListItemsNested from './mocks/dropdownListItemsNested.json'
import dropdownListItems from './mocks/dropdownListItems.json'

storiesOf('Elements/Dropdown List', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { ADropdownList, ADropdownListItem, ADropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
        <a-dropdown-list>
          <template v-for="element in dropdownListItems">
            <a-dropdown-list-item
              v-if="element.content"
              :title="element.title"
              :key="element.id"
              :collapse="true"
              id="element.id"
            >
              {{element.content}}
             </a-dropdown-list-item>
            <a-dropdown-list-link
              v-else
              :key="element.id"
              :title="element.title"
              :href="element.href"
            />
          </template>
         </a-dropdown-list>
    `
  }))
  .add('Nested with items as props', () => ({
    components: { ADropdownList, ADropdownListItem, ADropdownListLink },
    data: () => ({
      dropdownListItemsNested
    }),
    template: `
        <a-dropdown-list :items="dropdownListItemsNested" />
    `
  }))
  .add('Screen M', () => ({
    components: { ADropdownList, ADropdownListItem, ADropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
        <a-dropdown-list
          screenM
          :items="dropdownListItems"
        />
    `
  }))
  .add('Dark', () => ({
    components: { ADropdownList, ADropdownListItem, ADropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
        <a-dropdown-list
          dark
          :items="dropdownListItems"
        />
    `
  }))
  .add('Secondary', () => ({
    components: { ADropdownList, ADropdownListItem, ADropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
        <a-dropdown-list
          secondary
          :items="dropdownListItems"
        />
    `
  }))
  .add('Inner', () => ({
    components: { ADropdownList, ADropdownListItem, ADropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
        <a-dropdown-list
          inner
          :items="dropdownListItems"
        />
    `
  }))
