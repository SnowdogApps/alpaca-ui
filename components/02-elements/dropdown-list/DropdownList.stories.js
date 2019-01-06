import { storiesOf } from "@storybook/vue";

import App from "../../01-globals/app/App.vue";
import AlpacaDropdownList from "./DropdownList.vue";
import AlpacaDropdownListItem from "./DropdownListItem";
import AlpacaDropdownListNested from "./DropdownListNested.vue";

import elements from "./mocks/dropdownList";

storiesOf("Elements/Dropdown list", module).add("Default", () => ({
  components: { App, AlpacaDropdownList, AlpacaDropdownListItem },
  data: () => ({
    elements
  }),
  template: `
      <app>
        <alpaca-dropdown-list
        >
          <alpaca-dropdown-list-item
            v-for="(element, i) in elements.dropdowns"
            :id="element.id"
            :key="i"
            :custom-class="element.class"
            :title="element.title"
            :tag="element.itemTag"
          >{{ element.contentElement }}</alpaca-dropdown-list-item>
          </alpaca-dropdown-list>
      </app>
    `
}));

storiesOf("Elements/Dropdown list", module).add(
  "Dropdown list with nested",
  () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem },
    data: () => ({
      elements
    }),
    template: `
      <app>
        <alpaca-dropdown-list>
          <alpaca-dropdown-list-item
            v-for="(element, i) in elements.dropdowns"
            :id="element.id"
            :key="i"
            :custom-class="element.class"
            :title="element.title"
            :tag="element.itemTag"
          >
            <alpaca-dropdown-list>
              <alpaca-dropdown-list-item
                v-for="(element, i) in elements.dropdowns"
                :id="element.id"
                :key="i"
                :custom-class="element.class"
                :title="element.title"
                :tag="element.itemTag"
               >{{ element.contentElement }}</alpaca-dropdown-list-item>
              </alpaca-dropdown-list>
            </alpaca-dropdown-list-item>
          </alpaca-dropdown-list>
      </app>
    `
  })
);
