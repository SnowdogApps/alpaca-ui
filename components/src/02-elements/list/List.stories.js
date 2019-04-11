import { storiesOf } from '@storybook/vue'

import AList from './List.vue'
import AListItem from '../list-item/ListItem.vue'
import AListImageItem from '../list-image-item/ListImageItem.vue'
import ADescriptionList from '../description-list/DescriptionList.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import ALink from '../../atoms/link/Link.vue'

import listElements from './mocks/listElements.json'
import iconListElements from './mocks/iconListElements.json'
import imageListElements from './mocks/imageListElements.json'
import descListElements from './mocks/descListElements.json'
import linkListElements from './mocks/linkListElements.json'

storiesOf('Elements/List', module)
  .add('Default', () => ({
    components: { AList, AListItem },
    data: () => ({
      listElements
    }),
    template: `
        <a-list>
          <a-list-item
            v-for="element in listElements"
            :key="element.id"
           >
         {{ element.text }}
         </a-list-item>
        </a-list>
    `
  }))
  .add('Native', () => ({
    components: { AList, AListItem },
    data: () => ({
      listElements
    }),
    template: `
        <a-list class="list--native">
          <a-list-item
            v-for="element in listElements"
            :key="element.id"
          >
           {{ element.text }}
           </a-list-item>
         </a-list>
    `
  }))
  .add('Horizontal', () => ({
    components: { AList, AListItem },
    data: () => ({
      listElements
    }),
    template: `
        <a-list class="list--horizontal">
          <a-list-item
            v-for="element in listElements"
            :key="element.id"
          >
           {{ element.text }}
           </a-list-item>
         </a-list>
    `
  }))
  .add('Horizontal Medium', () => ({
    components: { AList, AListItem },
    data: () => ({
      listElements
    }),
    template: `
        <a-list class="list--horizontal@medium">
          <a-list-item
            v-for="element in listElements"
            :key="element.id"
          >
          {{ element.text }}
           </a-list-item>
         </a-list>
    `
  }))
  .add('Icon', () => ({
    components: { AList, AListItem, AIcon },
    data: () => ({
      iconListElements
    }),
    template: `
        <a-list class="list--with-icon">
          <a-list-item
            v-for="element in iconListElements"
            :key="element.id"
          >
            <a-icon :icon="element.icon.iconId"/>
           </a-list-item>
         </a-list>
    `
  }))
  .add('Image', () => ({
    components: { AList, AListImageItem },
    data: () => ({
      imageListElements
    }),
    template: `
        <a-list class="list--with-image">
          <a-list-image-item
           v-for="item in imageListElements"
           :key="item.id"
           :src="item.image.src"
           :alt="item.image.alt"
          >
            {{ item.text }}
           </a-list-image-item>
         </a-list>
    `
  }))
  .add('Divided', () => ({
    components: { AList, AListItem },
    data: () => ({
      listElements
    }),
    template: `
        <a-list class="list--divided">
          <a-list-item
            v-for="element in listElements"
            :key="element.id"
          >
            {{ element.text }}
           </a-list-item>
         </a-list>
    `
  }))
  .add('Center', () => ({
    components: { AList, AListItem },
    data: () => ({
      listElements
    }),
    template: `
        <a-list class="list--center">
          <a-list-item
            v-for="element in listElements"
            :key="element.id"
           >
            {{ element.text }}
           </a-list-item>
         </a-list>
    `
  }))
  .add('Center Horizontal', () => ({
    components: { AList, AListItem },
    data: () => ({
      listElements
    }),
    template: `
        <a-list class="list--center list--horizontal">
          <a-list-item
            v-for="element in listElements"
            :key="element.id"
          >
            {{ element.text }}
           </a-list-item>
         </a-list>
    `
  }))
  .add('Divided Horizontal', () => ({
    components: { AList, AListItem },
    data: () => ({
      listElements
    }),
    template: `
        <a-list class="list--divided list--horizontal">
          <a-list-item
            v-for="element in listElements"
            :key="element.id"
           >
            {{ element.text }}
           </a-list-item>
         </a-list>
    `
  }))
  .add('Divided Horizontal Medium', () => ({
    components: { AList, AListItem },
    data: () => ({
      listElements
    }),
    template: `
        <a-list class="list--divided list--horizontal@medium">
          <a-list-item
            v-for="element in listElements"
            :key="element.id"
          >
           {{ element.text }}
           </a-list-item>
         </a-list>
    `
  }))
  .add('Description', () => ({
    components: { ADescriptionList },
    data: () => ({
      descListElements
    }),
    template: `
        <a-description-list
          :listClass="'list--divided'"
          :title="'A description List'"
          :elements="descListElements"
        />
    `
  }))
  .add('Link', () => ({
    components: { AList, AListItem, ALink },
    data: () => ({
      linkListElements
    }),
    template: `
        <a-list>
          <a-list-item
            v-for="element in linkListElements"
            :key="element.id"
            elementTag="link"
           >
            <a-link>
              {{ element.text }}
             </a-link>
           </a-list-item>
         </a-list>
    `
  }))
