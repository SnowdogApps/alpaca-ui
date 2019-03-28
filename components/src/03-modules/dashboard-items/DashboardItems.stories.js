import { storiesOf } from '@storybook/vue'

import AlpacaDashboardItems from './DashboardItems.vue'

import items from "./mocks/items"

storiesOf('Modules/Dashboard', module)
  .add('Items', () => ({
    components: { AlpacaDashboardItems },
    data: () => ({
      items
    }),
    template: `
      <alpaca-dashboard-items
       :elements="items"
       title="Addresses"
      />
    `
  }))
