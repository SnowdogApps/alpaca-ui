import { storiesOf } from '@storybook/vue'

import App from '../../../01-globals/app/App.vue'
import AlpacaDashboardTable from './Table.vue'

import table from './mocks/table.json'

storiesOf('Modules/Dashboard/Table', module)
  .add('Default', () => ({
    components: { App, AlpacaDashboardTable },
    data: () => ({
      table
    }),
    computed: {
      headCells() {
        const headCells = table.table.mainTags
          .find(el => el.mainTag === 'thead');

        return headCells.rowTags[0].childTags;
      },
      bodyRows() {
        const bodyRows = table.table.mainTags
          .filter(el => el.mainTag === 'tbody');

        return bodyRows[0].rowTags.map(el => el.childTags);
      }
    },
    template: `
      <app>
        <alpaca-dashboard-table
          :title="table.title"
          :link="table.link"
          :headCells="headCells"
          :bodyRows="bodyRows"
       />
      </app>
    `
  }))
