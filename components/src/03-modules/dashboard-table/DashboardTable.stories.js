import { storiesOf } from '@storybook/vue'

import bodyRows from "./mocks/bodyRows"
import headCells from "./mocks/headCells"

import AlpacaDashboardTable from './DashboardTable.vue'

storiesOf('Modules/Dashboard', module)
  .add('Table', () => ({
    components: { AlpacaDashboardTable },
    data: () => ({
      bodyRows,
      headCells
    }),
    template: `
      <alpaca-dashboard-table
        title="Recent Orders"
        viewAllLink="#"
        :headCells="headCells"
        :bodyRows="bodyRows"
      />
    `
  }))
