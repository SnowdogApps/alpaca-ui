import {storiesOf} from '@storybook/vue'

import data from '../../../data/catalog.json'
import menu from '../../../data/menu.json'

import App from '../../01-globals/app/App.vue'
import AlpacaHeader from '../../03-modules/header/Header.vue'
import Catalog from './Catalog.vue'

storiesOf('Views/Catalog', module).add('Default', () => ({
  components: {App, AlpacaHeader, Catalog},
  data() {
    return {
      ...data,
      menu
    }
  },
  template: `
    <app>
      <alpaca-header :menu="menu"/>
      <catalog
        :products="products.items"
        :store-config="storeConfig"
        :filters="products.filters"
      />
    </app>
  `
}))
