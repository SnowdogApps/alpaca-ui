import { storiesOf } from "@storybook/vue";

import App from "../../01-globals/app/App.vue";
import AlpacaList from "./List.vue";
import AlpacaListItem from "./ListItem.vue";
import AlpacaImageList from "./ImageList.vue";
import AlpacaDescriptionList from "./DescriptionList.vue";
import AlpacaIcon from "./../../01-globals/icon/Icon.vue";
import AlpacaLink from "./../../01-globals/link/Link.vue";

import listElements from "./mocks/listElements.json";
import iconListElements from "./mocks/iconListElements.json";
import imageListElements from "./mocks/imageListElements.json";
import descListElements from "./mocks/descListElements.json";
import linkListElements from "./mocks/linkListElements.json";

storiesOf("Elements/List", module)
  .add("Default", () => ({
    components: { App, AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list>
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
            :element="element"
           >
         {{ element.text }}
        </alpaca-list-item>
       </alpaca-list>
      </app>
    `
  }))
  .add("Native", () => ({
    components: { App, AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list class="list--native">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
            :element="element"
          >
           {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add("Horizontal", () => ({
    components: { App, AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list class="list--horizontal">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
            :element="element"
          >
           {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add("Horizontal Medium", () => ({
    components: { App, AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list class="list--horizontal@medium">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
            :element="element"
          >
          {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add("Icon", () => ({
    components: { App, AlpacaList, AlpacaListItem, AlpacaIcon },
    data: () => ({
      iconListElements
    }),
    template: `
      <app>   
        <alpaca-list class="list--with-icon">
          <alpaca-list-item
            v-for="element in iconListElements"
            :key="element.id"
            :element="element"
          >
            <alpaca-icon
              :icon="element.icon.iconId"
            />
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add("Image", () => ({
    components: { App, AlpacaImageList },
    data: () => ({
      imageListElements
    }),
    template: `
      <app>
        <alpaca-image-list
          :listClass="'list--with-image'"
          :elements="imageListElements"
        />
      </app>
    `
  }))
  .add("Divided", () => ({
    components: { App, AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
      <app>        
        <alpaca-list class="list--divided">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
            :element="element"
          >
            {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add("Center", () => ({
    components: { App, AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list class="list--center">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
            :element="element"
           >
            {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add("Center Horizontal", () => ({
    components: { App, AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list class="list--center list--horizontal">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
            :element="element"
          >
            {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add("Divided Horizontal", () => ({
    components: { App, AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list class="list--divided list--horizontal">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
            :element="element"
           >
            {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add("Divided Horizontal Medium", () => ({
    components: { App, AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list class="list--divided list--horizontal@medium">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
            :element="element"
          >
           {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add("Description", () => ({
    components: { App, AlpacaDescriptionList },
    data: () => ({
      descListElements
    }),
    template: `
      <app>
        <alpaca-description-list
          :listClass="'list--divided'"
          :title="'Alpaca description List'"
          :elements="descListElements"
        />
      </app>
    `
  }))
  .add("Link", () => ({
    components: { App, AlpacaList, AlpacaListItem, AlpacaLink },
    data: () => ({
      linkListElements
    }),
    template: `
      <app>
        <alpaca-list>
          <alpaca-list-item
            v-for="element in linkListElements"
            :key="element.id"
            :element="element"
            elementTag="link"
           >
            <alpaca-link>
              {{ element.text }}
            </alpaca-link>
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }));
