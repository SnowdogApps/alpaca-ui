import {addDecorator, storiesOf} from "@storybook/vue"
import StoryRouter from 'storybook-vue-router'

import ADropdownList from "./DropdownList.vue"
import ADropdownListItem from "../dropdown-list-item/DropdownListItem.vue"
import ADropdownListLink from "../../atoms/dropdown-list-link/DropdownListLink.vue"

const info = `
  ---
  #### Use these modifiers with \`.dropdown-list\` class.
  - \`.dropdown-list--dark\` - Selector for applying dark styles
  - \`.dropdown-list--secondary\` - Selector for applying secondary styles
  - \`.dropdown-list--inner\` - Selector for applying inner styles
  - \`.dropdown-list@screen-m dropdown-list--is-open@screen-m\` - Selector for applying styles for smaller resolution
  ---
`

const dropdownListItems = [
  {
    "title": "dropdown title",
    "id": "dropdown-it-1",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore " +
      "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio"
  },
  {
    "title": "some longer longer and longer dropdown title",
    "id": "dropdown-it-2",
    "href": "#"
  }
]

const dropdownListItemsNested = [
  {
    "title": "All",
    "href": "#"
  },
  {
    "title": "dropdown title",
    "id": "dropdown-1",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
      " et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio"
  },
  {
    "title": "some longer longer and longer dropdown title",
    "id": "dropdown-2",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
      " et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio"
  },
  {
    "title": "dropdown title",
    "id": "dropdown-link-3",
    "href": "#"
  },
  {
    "title": "dropdown title",
    "id": "dropdown-link-4",
    "href": "#"
  },
  {
    "title": "some longer longer and longer dropdown title",
    "id": "dropdown-7",
    "content": [
      {
        "title": "dropdown title",
        "id": "dropdown-n-1",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore" +
          " et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio"
      },
      {
        "title": "some longer longer and longer dropdown title",
        "id": "dropdown-n-2",
        "href": "#"
      },
      {
        "title": "some longer longer and longer dropdown title",
        "id": "dropdown-8",
        "content": [
          {
            "title": "dropdown title",
            "id": "dropdown-link-9",
            "href": "#"
          },
          {
            "title": "dropdown title",
            "id": "dropdown-link-10",
            "href": "#"
          }
        ]
      }
    ]
  }
]

addDecorator(StoryRouter())
storiesOf("Molecules/Dropdown List", module)
  .addParameters({ info })
  .add(
    "Default",
    () => ({
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
    "Nested with items as props",
    () => ({
      components: { ADropdownList, ADropdownListItem, ADropdownListLink },
      data: () => ({
        dropdownListItemsNested
      }),
      template: `
        <a-dropdown-list :items="dropdownListItemsNested" />
      `
    })
  )
  .add(
    "Screen M",
    () => ({
      components: { ADropdownList, ADropdownListItem, ADropdownListLink },
      data: () => ({
        dropdownListItems
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
    "Dark",
    () => ({
      components: { ADropdownList, ADropdownListItem, ADropdownListLink },
      data: () => ({
        dropdownListItems
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
    "Secondary",
    () => ({
      components: { ADropdownList, ADropdownListItem, ADropdownListLink },
      data: () => ({
        dropdownListItems
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
    "Inner",
    () => ({
      components: { ADropdownList, ADropdownListItem, ADropdownListLink },
      data: () => ({
        dropdownListItems
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
    "With slots",
    () => ({
      components: { ADropdownList, ADropdownListItem, ADropdownListLink },
      data: () => ({
        dropdownListItems
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
