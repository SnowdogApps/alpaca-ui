import { storiesOf } from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaTable from './Table.vue'
import AlpacaTableRow from './TableRow.vue'
import AlpacaTableCell from './TableCell.vue'

import bodyRows from './mocks/bodyRows.json'
import headCells from './mocks/headCells.json'
import footCells from './mocks/footCells.json'

storiesOf('Elements/Table', module)
  .add('Default', () => ({
    components: { App, AlpacaTable, AlpacaTableRow, AlpacaTableCell },
    data: () => ({
      bodyRows,
      headCells,
      footCells
    }),
    template: `
      <app>
        <alpaca-table caption="This is a table">
          <thead>
            <alpaca-table-row>
              <alpaca-table-cell
                tag="th"
                v-for="headCell in headCells"
                :key="headCell.id"
                :scope="headCell.scope"
              >
                {{ headCell.text }}
              </alpaca-table-cell>
            </alpaca-table-row>
          </thead>
          <tbody>
            <alpaca-table-row
              v-for="row in bodyRows"
              :key="row.id"
            >
              <alpaca-table-cell
                v-for="bodyCell in row"
                :key="bodyCell.id"
                :data-th="bodyCell.mobileHeading"
              >
                {{ bodyCell.text }}
              </alpaca-table-cell>
            </alpaca-table-row>
          </tbody>
          <tfoot>
            <alpaca-table-row>
              <alpaca-table-cell
                v-for="footCell in footCells"
                :key="footCell.id"
                :colspan="footCell.colspan"
              >
                {{ footCell.text }}
              </alpaca-table-cell>
            </alpaca-table-row>
          </tfoot>
        </alpaca-table>
      </app>
    `
  }))
  .add('Odd Even', () => ({
    components: { App, AlpacaTable, AlpacaTableRow, AlpacaTableCell },
    data: () => ({
      bodyRows,
      headCells,
      footCells
    }),
    template: `
      <app>
        <alpaca-table
          caption="This is a table"
          class="table--odd-even"
        >
          <thead>
            <alpaca-table-row>
              <alpaca-table-cell
                tag="th"
                v-for="headCell in headCells"
                :key="headCell.id"
                :scope="headCell.scope"
              >
                {{ headCell.text }}
              </alpaca-table-cell>
            </alpaca-table-row>
          </thead>
          <tbody>
            <alpaca-table-row
              v-for="row in bodyRows"
              :key="row.id"
            >
              <alpaca-table-cell
                v-for="bodyCell in row"
                :key="bodyCell.id"
                :data-th="bodyCell.mobileHeading"
              >
                {{ bodyCell.text }}
              </alpaca-table-cell>
            </alpaca-table-row>
          </tbody>
          <tfoot>
            <alpaca-table-row>
              <alpaca-table-cell
                v-for="footCell in footCells"
                :key="footCell.id"
                :colspan="footCell.colspan"
              >
                {{ footCell.text }}
              </alpaca-table-cell>
            </alpaca-table-row>
          </tfoot>
        </alpaca-table>
      </app>
    `
  }))
