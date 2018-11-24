import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaTable from './Table.vue'

import table from './mocks/table.json'

storiesOf('Elements/Table', module)
  .add('Default', () => ({
    components: { App, AlpacaTable },
    data: () => ({
      table
    }),
    template: `
      <app>
        <alpaca-table
          :caption="table.caption"
          :head-cells="table.headCells"
          :body-rows="table.bodyRows"
          :foot-cells="table.footCells"
        />
      </app>
    `
  }))
  .add('Odd Even', () => ({
    components: { App, AlpacaTable },
    data: () => ({
      table
    }),
    template: `
      <app>
        <alpaca-table
          class-name="table--odd-even"
          :caption="table.caption"
          :head-cells="table.headCells"
          :body-rows="table.bodyRows"
          :foot-cells="table.footCells"
        />
      </app>
    `
  }))
