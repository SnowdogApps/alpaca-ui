import { storiesOf } from '@storybook/vue'

import data from '../data/catalog.json'

import Catalog from '../components/04-views/catalog/Catalog.vue'

storiesOf('Views|Catalog', module)
  .add('Default', () => ({
    components: { Catalog },
    data() {
      return data
    },
    template: `
      <catalog
        :products="products.items"
        :store-config="storeConfig"
        :filters="filters"
      />
    `,
  }))
