import { storiesOf } from "@storybook/vue"
import StoryRouter from 'storybook-vue-router'

import App from "../../01-globals/app/App.vue"
import AlpacaDropdownList from "./DropdownList.vue"
import AlpacaDropdownListItem from "./dropdown-list-item/DropdownListItem.vue"
import AlpacaDropdownListLink from "./dropdown-list-link/DropdownListLink.vue"

import dropdownListItems from "./mocks/dropdownListItems.json"
import nestedDropdownList from "./mocks/nestedDropdownList.json"

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
              v-if="element.contentElement"
              :title="element.title"
              :key="element.id"
              :collapse="true"
              id="element.id"
            >

              {{ element.contentElement }}
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
  .add("Screen M", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
      <app>
        <alpaca-dropdown-list screenM>
          <template v-for="element in dropdownListItems">
            <alpaca-dropdown-list-item
              v-if="element.contentElement"
              :title="element.title"
              :key="element.id"
              :collapse="true"
              id="element.id"
            >
              {{ element.contentElement }}
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
  .add("Dark", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
      <app>
        <alpaca-dropdown-list dark>
          <template v-for="element in dropdownListItems">
            <alpaca-dropdown-list-item
              v-if="element.contentElement"
              :title="element.title"
              :key="element.id"
              :collapse="true"
              id="element.id"
            >
              {{ element.contentElement }}
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
  .add("Secondary", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
      <app>
        <alpaca-dropdown-list secondary>
          <template v-for="element in dropdownListItems">
            <alpaca-dropdown-list-item
              v-if="element.contentElement"
              :title="element.title"
              :key="element.id"
              :collapse="true"
              id="element.id"
            >
              {{ element.contentElement }}
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
  .add("Inner", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      dropdownListItems
    }),
    template: `
      <app>
        <alpaca-dropdown-list inner>
          <template v-for="element in dropdownListItems">
            <alpaca-dropdown-list-item
              v-if="element.contentElement"
              :title="element.title"
              :key="element.id"
              :collapse="true"
              id="element.id"
            >
              {{ element.contentElement }}
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
  .add("With nested", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      nestedDropdownList
    }),
    template: `
      <app>
        <alpaca-dropdown-list>
          <template v-for="element in nestedDropdownList">
            <alpaca-dropdown-list-item
              v-if="element.sublist"
              :id="element.id"
              :title="element.title"
              :key="element.id"
            >
              <alpaca-dropdown-list>
                <template v-for="subElement1 in element.sublist">
                  <alpaca-dropdown-list-item
                    v-if="subElement1.sublist"
                    :id="subElement1.id"
                    :title="subElement1.title"
                    :key="subElement1.id"
                  >
                    <alpaca-dropdown-list>
                      <template v-for="subElement2 in subElement1.sublist">
                        <alpaca-dropdown-list-item
                          v-if="subElement2.sublist"
                          :id="subElement2.id"
                          :title="subElement2.title"
                          :key="subElement2.id"
                        />
                        <alpaca-dropdown-list-link
                          v-else
                          :title="subElement2.title"
                          :key="subElement2.id"
                          href="#"
                        />
                      </template>
                    </alpaca-dropdown-list>
                  </alpaca-dropdown-list-item>
                  <alpaca-dropdown-list-link
                    v-else
                    :title="subElement1.title"
                    :key="subElement1.id"
                    href="#"
                  />
                </template>
              </alpaca-dropdown-list>
            </alpaca-dropdown-list-item>
            <alpaca-dropdown-list-link
              v-else
              :title="element.title"
              :key="element.id"
              href="#"
            />
          </template>
        </alpaca-dropdown-list>
      </app>
    `
  }))
