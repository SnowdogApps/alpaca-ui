import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
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
            v-for="(rows, i) in bodyRows"
            :key="i"
          >
            <alpaca-table-cell
              v-for="row in rows"
              :key="row.id"
              :data-th="row.mobileHeading"
            >
              {{ row.text }}
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
            v-for="rows in bodyRows"
            :key="rows.id"
          >
            <alpaca-table-cell
              v-for="row in rows"
              :key="row.id"
              :data-th="row.mobileHeading"
            >
              {{ row.text }}
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
