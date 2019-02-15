import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaSideMenu from './SideMenu.vue'
import AlpacaSideBar from './side-bar/SideBar.vue'
import AlpacaDropdownList from "../../02-elements/dropdown-list/DropdownList.vue"
import AlpacaDropdownListItem from "../../02-elements/dropdown-list/dropdown-list-item/DropdownListItem.vue"
import AlpacaDropdownListLink from "../../02-elements/dropdown-list/dropdown-list-link/DropdownListLink.vue"

import nestedDropdownList from "../../02-elements/dropdown-list/mocks/nestedDropdownList.json"
import sideMenu from './mocks/sideMenu.json'

storiesOf('Modules/Side menu', module)
  .add('Default', () => ({
    components: { App, AlpacaSideMenu, AlpacaSideBar },
    data: () => ({
      sideMenu
    }),
    template: `
    <app>
      <alpaca-side-bar>
        <alpaca-side-menu 
          icon="mobile-menu"
          title="Menu"
        >
          <span>Simple content</span>
        </alpaca-side-menu>
      </alpaca-side-bar>
    </app>
  `,
  }))
  .add('Right', () => ({
    components: { App, AlpacaSideMenu, AlpacaSideBar },
    data: () => ({
      sideMenu
    }),
    template: `
    <app>
      <alpaca-side-bar>
        <alpaca-side-menu 
          icon="mobile-menu"
          title="Menu"
          right
        >
          <span>Simple content</span>
        </alpaca-side-menu>
      </alpaca-side-bar>
    </app>
  `,
  }))
  .add('Multi elements', () => ({
    components: { App, AlpacaSideMenu, AlpacaSideBar, AlpacaDropdownList, AlpacaDropdownListItem, AlpacaDropdownListLink },
    data: () => ({
      sideMenu,
      nestedDropdownList
    }),
    template: `
    <app>
      <alpaca-side-bar>
        <alpaca-side-menu 
          icon="mobile-menu"
          title="Menu"
        >
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
        </alpaca-side-menu>      
        <alpaca-side-menu 
          icon="shopping-cart"
          title="Cart"
        >
          <span>Simple content</span>
        </alpaca-side-menu>  
      </alpaca-side-bar>
    </app>
  `,
  }))
