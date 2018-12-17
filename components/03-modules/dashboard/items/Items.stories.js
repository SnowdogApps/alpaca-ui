import { storiesOf } from '@storybook/vue'

import App from '../../../01-globals/app/App.vue'
import AlpacaDashboardItem from './Items.vue'

import items from './mocks/items.json'

storiesOf('Modules/Dashboard/Item', module)
  .add('Default', () => ({
    components: { App, AlpacaDashboardItem },
    data: () => ({
      items
    }),
    template: `
      <app>
        <alpaca-dashboard-item
         :informations="items.informations"
         :title="items.title"
       />
      </app>
    `
  }))
