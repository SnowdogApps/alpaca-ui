import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaSidebarBlock from './SidebarBlock.vue'
import products from './mocks/products.json'

storiesOf('Modules/Sidebar Block', module)
  .add('Default', () => ({
    components: { App, AlpacaSidebarBlock },
    data: () => ({
      products
    }),
    template: `
      <app>
        <alpaca-sidebar-block
          :products="products"
        />
      </app>
    `
  }))
