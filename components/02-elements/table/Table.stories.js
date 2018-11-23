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
          caption="Tekst"
          :headCells="table.headCells"
          :bodyRows="table.bodyRows"
          :footCells="table.footCells"
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
          customClass="table--odd-even"
          caption="Tekst"
          :headCells="table.headCells"
          :bodyRows="table.bodyRows"
          :footCells="table.footCells"
        />
      </app>
    `
  }))
