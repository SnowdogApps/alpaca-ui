import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import products from './mocks/products.json'
import categories from './mocks/categories.json'
import manufacturers from './mocks/manufacturers.json'

import AlpacaQuickSearch from './QuickSearch.vue'

storiesOf('Modules/Quick search', module)
  .add('Default', () => ({
    data: () => ({
      products,
      categories,
      manufacturers
    }),
    components: { AlpacaQuickSearch },
    template: `
        <alpaca-quick-search
          resultText="Results for your request:"
          noResultText="No search results found."
          resultTyped="Ni"
          :products="products"
          :categories="categories"
          :manufacturers="manufacturers"
          @seeAll="seeAll"
        />
    `,
    methods: {
      seeAll: action('See all')
    }
  }))
