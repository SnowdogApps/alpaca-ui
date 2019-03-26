import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import AlpacaSidebarBlock from './SidebarBlock.vue'

import products from './mocks/products.json'

storiesOf('Modules/Sidebar Block', module)
  .addDecorator(StoryRouter())
  .add('Compare', () => ({
    components: { AlpacaSidebarBlock },
    data: () => ({
      products
    }),
    template: `
        <alpaca-sidebar-block
          :products="products"
          @clearCompareList="clearCompareList"
          @removeFromCompare="removeFromCompare"
        />
    `,
    methods: {
      clearCompareList: action('Clear compare list'),
      removeFromCompare: action('Remove product from compare')
    }
  }))