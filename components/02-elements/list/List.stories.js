import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaList from './List.vue'
import AlpacaListItem from './list-item/ListItem.vue'
import AlpacaListImageItem from './list-image-item/ListImageItem.vue'
import AlpacaDescriptionList from './description-list/DescriptionList.vue'
import AlpacaIcon from '../../01-globals/icon/Icon.vue'
import AlpacaLink from '../../01-globals/link/Link.vue'

import listElements from './mocks/listElements.json'
import iconListElements from './mocks/iconListElements.json'
import imageListElements from './mocks/imageListElements.json'
import descListElements from './mocks/descListElements.json'
import linkListElements from './mocks/linkListElements.json'

storiesOf('Elements/List', module)
  .add('Default', () => ({
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
           >
         {{ element.text }}
        </alpaca-list-item>
       </alpaca-list>
      </app>
    `
  }))
  .add('Native', () => ({
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
          >
           {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add('Horizontal', () => ({
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
          >
           {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add('Horizontal Medium', () => ({
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
          >
          {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add('Icon', () => ({
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
          >
            <alpaca-icon
              :icon="element.icon.iconId"
            />
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add('Image', () => ({
    components: { App, AlpacaList, AlpacaListImageItem },
    data: () => ({
      imageListElements
    }),
    template: `
      <app>
        <alpaca-list class="list--with-image">
          <alpaca-list-image-item
           v-for="item in imageListElements"
           :key="item.id"
           :src="item.image.src"
           :alt="item.image.alt"
          >
            {{ item.text }}
          </alpaca-list-image-item>
        </alpaca-list>
      </app>
    `
  }))
  .add('Divided', () => ({
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
          >
            {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add('Center', () => ({
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
           >
            {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add('Center Horizontal', () => ({
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
          >
            {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add('Divided Horizontal', () => ({
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
           >
            {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add('Divided Horizontal Medium', () => ({
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
          >
           {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
  .add('Description', () => ({
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
  .add('Link', () => ({
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
            elementTag="link"
           >
            <alpaca-link>
              {{ element.text }}
            </alpaca-link>
          </alpaca-list-item>
        </alpaca-list>
      </app>
    `
  }))
