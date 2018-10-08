import { storiesOf } from '@storybook/vue'

import data from '../data/catalog.json'

import App from '../components/01-globals/app/App.vue'
import AlpacaHeader from '../components/03-modules/header/Header.vue'
import Catalog from '../components/04-views/catalog/Catalog.vue'

storiesOf('Views/Catalog', module)
  .add('Default', () => ({
    components: { App, AlpacaHeader, Catalog },
    data() {
      return data
    },
    template: `
      <app>
        <alpaca-header />
        <catalog
          :products="products.items"
          :store-config="storeConfig"
          :filters="products.filters"
        />
      </app>
    `,
  }))
