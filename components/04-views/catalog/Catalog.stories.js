import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import data from './mocks/catalog.json'
import menu from '../../03-modules/header/mocks/menu.json'

import App from '../../01-globals/app/App.vue'
import AlpacaHeader from '../../03-modules/header/Header.vue'
import Catalog from './Catalog.vue'

storiesOf('Views/Catalog', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
  components: { App, AlpacaHeader, Catalog },
  data() {
    return {
      ...data,
      menu
    }
  },
  template: `
    <app>
      <alpaca-header 
        :menu="menu"
        src="./../images/logo/alpaca.svg"
        link="#"
      />
      <catalog
        :products="products.items"
        :store-config="storeConfig"
        :filters="products.filters"
      />
    </app>
  `
}))
