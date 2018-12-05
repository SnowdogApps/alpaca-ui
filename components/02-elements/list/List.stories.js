import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaList from './List.vue'
import AlpacaImageList from './ImageList.vue'
import AlpacaDescriptionList from './DescriptionList.vue'

import listElements from './mocks/listElements.json'
import iconListElements from './mocks/iconListElements.json'
import imageListElements from './mocks/imageListElements.json'
import descListElements from './mocks/descListElements.json'
import linkListElements from './mocks/linkListElements.json'

storiesOf('Elements/List', module)
  .add('Default', () => ({
    components: { App, AlpacaList },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list :elements="listElements"/>
      </app>
    `
  }))
  .add('Native', () => ({
    components: { App, AlpacaList },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list
          :listClass="'list--native'"
          :elements="listElements"
        />
      </app>
    `
  }))
  .add('Horizontal', () => ({
    components: { App, AlpacaList },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list
          :listClass="'list--horizontal'"
          :elements="listElements"
        />
      </app>
    `
  }))
  .add('Horizontal Medium', () => ({
    components: { App, AlpacaList },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list
          :listClass="'list--horizontal@medium'"
          :elements="listElements"
        />
      </app>
    `
  }))
  .add('Icon', () => ({
    components: { App, AlpacaList },
    data: () => ({
      iconListElements
    }),
    template: `
      <app>
        <alpaca-list
          :listClass="'list--with-icon'"
          :elements="iconListElements"
        />
      </app>
    `
  }))
  .add('Image', () => ({
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
  .add('Divided', () => ({
    components: { App, AlpacaList },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list
          :listClass="'list--divided'"
          :elements="listElements"
        />
      </app>
    `
  }))
  .add('Center', () => ({
    components: { App, AlpacaList },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list
          :listClass="'list--center'"
          :elements="listElements"
        />
      </app>
    `
  }))
  .add('Center Horizontal', () => ({
    components: { App, AlpacaList },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list
          :listClass="'list--center list--horizontal'"
          :elements="listElements"
        />
      </app>
    `
  }))
  .add('Divided Horizontal', () => ({
    components: { App, AlpacaList },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list
          :listClass="'list--divided list--horizontal'"
          :elements="listElements"
        />
      </app>
    `
  }))
  .add('Divided Horizontal Medium', () => ({
    components: { App, AlpacaList },
    data: () => ({
      listElements
    }),
    template: `
      <app>
        <alpaca-list
          :listClass="'list--divided list--horizontal@medium'"
          :elements="listElements"
        />
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
    components: { App, AlpacaList },
    data: () => ({
      linkListElements
    }),
    template: `
      <app>
        <alpaca-list 
          :elementType="'link'"
          :elements="linkListElements"
        />
      </app>
    `
  }))
