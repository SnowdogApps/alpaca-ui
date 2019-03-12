import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import App from '@/components/01-globals/app/App.vue'
import AlpacaSidebarBlock from './SidebarBlock.vue'

import products from './mocks/products.json'

storiesOf('Modules/Sidebar Block', module)
  .addDecorator(StoryRouter())
  .add('Compare', () => ({
    components: { App, AlpacaSidebarBlock },
    data: () => ({
      products
    }),
    template: `
      <app>
        <alpaca-sidebar-block
          :products="products"
          @clearCompareList="clearCompareList"
          @removeFromCompare="removeFromCompare"
        />
      </app>
    `,
    methods: {
      clearCompareList: action('Clear compare list'),
      removeFromCompare: action('Remove product from compare')
    }
  }))
