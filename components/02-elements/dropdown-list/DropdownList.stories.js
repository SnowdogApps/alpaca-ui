import { storiesOf } from "@storybook/vue";

import App from "../../01-globals/app/App.vue";
import AlpacaDropdownList from "./DropdownList.vue";
import AlpacaDropdownListItem from "./DropdownListItem";

import elements from "./mocks/dropdownList";

storiesOf("Elements/Dropdown list", module)
  .add("Default", () => ({
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
            label-class="link--inverted"
          >
           {{ element.contentElement }}
          </alpaca-dropdown-list-item>
          </alpaca-dropdown-list>
      </app>
    `
  }))
  .add("Secondary", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem },
    data: () => ({
      elements
    }),
    template: `
      <app>
        <alpaca-dropdown-list
          secondary
        >
          <alpaca-dropdown-list-item
            v-for="(element, i) in elements.dropdowns"
            :id="element.id"
            :key="i"
            :custom-class="element.class"
            :title="element.title"
            :tag="element.itemTag"
          >
            {{ element.contentElement }}
          </alpaca-dropdown-list-item>
          </alpaca-dropdown-list>
      </app>
    `
  }))
  .add("Dark", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem },
    data: () => ({
      elements
    }),
    template: `
      <app>
        <alpaca-dropdown-list
          dark
        >
          <alpaca-dropdown-list-item
            v-for="(element, i) in elements.dropdowns"
            :id="element.id"
            :key="i"
            :custom-class="element.class"
            :title="element.title"
            :tag="element.itemTag"
          >
            {{ element.contentElement }}
           </alpaca-dropdown-list-item>
          </alpaca-dropdown-list>
      </app>
    `
  }))
  .add("Dropdown list with nested", () => ({
    components: { App, AlpacaDropdownList, AlpacaDropdownListItem },
    data: () => ({
      elements
    }),
    template: `
      <app>
       <!--TODO Styles for nested-->
        <alpaca-dropdown-list
          nested
        >
          <alpaca-dropdown-list-item
            v-for="(element, i) in elements.variants[3].context.dropdowns"
            :id="element.id"
            :key="i"
            :custom-class="element.class"
            :title="element.title"
            :tag="element.itemTag"
            :level="0"
          >
                 
              <alpaca-dropdown-list-item
                v-for="(el, i) in element.listNested"
                :id="el.id"
                :key="i"
                :custom-class="el.class"
                :title="el.title"
                :tag="el.itemTag"
                :level="1"
               >
                               
             <alpaca-dropdown-list-item
                v-for="(e, i) in el.sublist"
                :id="e.id"
                :key="i"
                :custom-class="e.class"
                :title="e.title"
                :tag="e.itemTag"
                :level="2"
               >
                {{ element.contentElement }}
               </alpaca-dropdown-list-item>           
               </alpaca-dropdown-list-item>                   
            </alpaca-dropdown-list-item>     
          </alpaca-dropdown-list>
      </app>
    `
  }));
