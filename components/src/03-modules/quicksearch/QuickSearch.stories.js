import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AQuickSearch from './QuickSearch.vue'

import products from './mocks/products.json'
import categories from './mocks/categories.json'
import manufacturers from './mocks/manufacturers.json'

storiesOf('Modules/Quick search', module)
  .add('Default', () => ({
    data: () => ({
      products,
      categories,
      manufacturers
    }),
    components: { AQuickSearch },
    template: `
        <a-quick-search
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
