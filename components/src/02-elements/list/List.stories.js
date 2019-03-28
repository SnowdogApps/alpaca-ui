import { storiesOf } from '@storybook/vue'

import AlpacaList from './List.vue'
import AlpacaListItem from '../list-item/ListItem.vue'
import AlpacaListImageItem from '../list-image-item/ListImageItem.vue'
import AlpacaDescriptionList from '../description-list/DescriptionList.vue'
import AlpacaIcon from '../../atoms/icon/Icon.vue'
import AlpacaLink from '../../01-globals/link/Link.vue'

import listElements from './mocks/listElements.json'
import iconListElements from './mocks/iconListElements.json'
import imageListElements from './mocks/imageListElements.json'
import descListElements from './mocks/descListElements.json'
import linkListElements from './mocks/linkListElements.json'

storiesOf('Elements/List', module)
  .add('Default', () => ({
    components: { AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
        <alpaca-list>
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
           >
         {{ element.text }}
        </alpaca-list-item>
       </alpaca-list>
    `
  }))
  .add('Native', () => ({
    components: { AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
        <alpaca-list class="list--native">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
          >
           {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
    `
  }))
  .add('Horizontal', () => ({
    components: { AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
        <alpaca-list class="list--horizontal">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
          >
           {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
    `
  }))
  .add('Horizontal Medium', () => ({
    components: { AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
        <alpaca-list class="list--horizontal@medium">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
          >
          {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
    `
  }))
  .add('Icon', () => ({
    components: { AlpacaList, AlpacaListItem, AlpacaIcon },
    data: () => ({
      iconListElements
    }),
    template: `
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
    `
  }))
  .add('Image', () => ({
    components: { AlpacaList, AlpacaListImageItem },
    data: () => ({
      imageListElements
    }),
    template: `
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
    `
  }))
  .add('Divided', () => ({
    components: { AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
        <alpaca-list class="list--divided">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
          >
            {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
    `
  }))
  .add('Center', () => ({
    components: { AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
        <alpaca-list class="list--center">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
           >
            {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
    `
  }))
  .add('Center Horizontal', () => ({
    components: { AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
        <alpaca-list class="list--center list--horizontal">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
          >
            {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
    `
  }))
  .add('Divided Horizontal', () => ({
    components: { AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
        <alpaca-list class="list--divided list--horizontal">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
           >
            {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
    `
  }))
  .add('Divided Horizontal Medium', () => ({
    components: { AlpacaList, AlpacaListItem },
    data: () => ({
      listElements
    }),
    template: `
        <alpaca-list class="list--divided list--horizontal@medium">
          <alpaca-list-item
            v-for="element in listElements"
            :key="element.id"
          >
           {{ element.text }}
          </alpaca-list-item>
        </alpaca-list>
    `
  }))
  .add('Description', () => ({
    components: { AlpacaDescriptionList },
    data: () => ({
      descListElements
    }),
    template: `
        <alpaca-description-list
          :listClass="'list--divided'"
          :title="'Alpaca description List'"
          :elements="descListElements"
        />
    `
  }))
  .add('Link', () => ({
    components: { AlpacaList, AlpacaListItem, AlpacaLink },
    data: () => ({
      linkListElements
    }),
    template: `
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
    `
  }))
