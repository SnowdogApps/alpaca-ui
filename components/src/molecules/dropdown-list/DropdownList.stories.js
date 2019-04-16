import { addDecorator, storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import ADropdownList from './DropdownList.vue'
import ADropdownListItem from '../dropdown-list-item/DropdownListItem.vue'
import ADropdownListLink from '../../atoms/dropdown-list-link/DropdownListLink.vue'

import items from './mocks/dropdownListItems.json'

const info = `
  ---
  #### Use these modifiers with \`.dropdown-list\` class.
  - \`.dropdown-list--dark\` - Selector for applying dark styles
  - \`.dropdown-list--secondary\` - Selector for applying secondary styles
  - \`.dropdown-list--inner\` - Selector for applying inner styles
  - \`.dropdown-list@screen-m dropdown-list--is-open@screen-m\` - Selector for applying styles for smaller resolution
  ---
`
addDecorator(StoryRouter())
storiesOf('Molecules/Dropdown List', module)
  .addParameters({ info })
  .add(
    'Default',
    () => ({
      components: { ADropdownList, ADropdownListItem, ADropdownListLink },
      data: () => ({
        ...items
      }),
      template: `
        <a-dropdown-list>
          <template v-for="element in dropdownListItems">
            <a-dropdown-list-item
              v-if="element.content"
              :title="element.title"
              :key="element.id"
              :collapse="true"
              :id="element.id"
            >
              {{element.content}}
             </a-dropdown-list-item>
            <a-dropdown-list-link
              v-else
              :key="element.id"
              :href="element.href"
            >
              {{ element.title }}
            </a-dropdown-list-link>
          </template>
        </a-dropdown-list>
      `
    })
  )
  .add(
    'Nested with items as props',
    () => ({
      components: { ADropdownList, ADropdownListItem, ADropdownListLink },
      data: () => ({
        ...items
      }),
      template: `
        <a-dropdown-list :items="dropdownListItemsNested" />
      `
    })
  )
  .add(
    'Screen M',
    () => ({
      components: { ADropdownList, ADropdownListItem, ADropdownListLink },
      data: () => ({
        ...items
      }),
      template: `
        <a-dropdown-list
          class="dropdown-list@screen-m dropdown-list--is-open@screen-m"
          :items="dropdownListItems"
        />
      `
    })
  )
  .add(
    'Dark',
    () => ({
      components: { ADropdownList, ADropdownListItem, ADropdownListLink },
      data: () => ({
        ...items
      }),
      template: `
        <a-dropdown-list
          class="dropdown-list--dark"
          :items="dropdownListItems"
        />
      `
    })
  )
  .add(
    'Secondary',
    () => ({
      components: { ADropdownList, ADropdownListItem, ADropdownListLink },
      data: () => ({
        ...items
      }),
      template: `
        <a-dropdown-list
          class="dropdown-list--secondary"
          :items="dropdownListItems"
        />
      `
    })
  )
  .add(
    'Inner',
    () => ({
      components: { ADropdownList, ADropdownListItem, ADropdownListLink },
      data: () => ({
        ...items
      }),
      template: `
        <a-dropdown-list
          class="dropdown-list--inner"
          :items="dropdownListItems"
        />
      `
    })
  )
  .add(
    'With slots',
    () => ({
      components: { ADropdownList, ADropdownListItem, ADropdownListLink },
      data: () => ({
        ...items
      }),
      template: `
        <a-dropdown-list>
          <template v-for="element in dropdownListItems">
            <a-dropdown-list-item
              v-if="element.content"
              :key="element.id"
              :collapse="true"
              :id="element.id"
            >
              <template #title>
                <span style="color: #613d7c"> 
                  {{ element.title}} 
                </span>
              </template>
              {{element.content}}
             </a-dropdown-list-item>
            <a-dropdown-list-link
              v-else
              :key="element.id"
            >
              <template #content>
                <a 
                  style="marginLeft: 15px;" 
                  :href="element.href"
                >
                  {{ element.title }}
                </a>
              </template>
            </a-dropdown-list-link>
          </template>
        </a-dropdown-list>
      `
    })
  )
