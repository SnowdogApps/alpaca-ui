import { storiesOf } from '@storybook/vue'

import ATable from './Table.vue'
import ATableRow from '../table-row/TableRow.vue'
import ATableCell from '../table-cell/TableCell.vue'

import bodyRows from './mocks/bodyRows.json'
import headCells from './mocks/headCells.json'
import footCells from './mocks/footCells.json'

const info = `
  ---
  #### Use these modifiers with \`.table\` class.
  - \`.table--odd-even\` - Selector for applying odd-even styles
  ---
`

const defaultData = {
  components: { ATable, ATableRow, ATableCell },
  data: () => ({
    bodyRows,
    headCells,
    footCells
  })
}

storiesOf('Atoms/Table', module)
  // @vue/component
  .addParameters({ info })
  .add(
    'Default',
    () => ({
      ...defaultData,
      template: `
        <a-table caption="This is a table">
          <thead>
            <a-table-row>
              <a-table-cell
                tag="th"
                v-for="headCell in headCells"
                :key="headCell.id"
                :scope="headCell.scope"
              >
                {{ headCell.text }}
              </a-table-cell>
            </a-table-row>
          </thead>
          <tbody>
            <a-table-row
              v-for="row in bodyRows"
              :key="row.id"
            >
              <a-table-cell
                v-for="bodyCell in row"
                :key="bodyCell.id"
                :data-th="bodyCell.mobileHeading"
              >
                {{ bodyCell.text }}
              </a-table-cell>
            </a-table-row>
          </tbody>
          <tfoot>
            <a-table-row>
              <a-table-cell
                v-for="footCell in footCells"
                :key="footCell.id"
                :colspan="footCell.colspan"
              >
                {{ footCell.text }}
              </a-table-cell>
            </a-table-row>
          </tfoot>
        </a-table>
      `
    })
  )
  // @vue/component
  .add(
      'Odd Even',
    () => ({
    ...defaultData,
      template: `
        <a-table
          caption="This is a table"
          class="table--odd-even"
        >
          <thead>
            <a-table-row>
              <a-table-cell
                tag="th"
                v-for="headCell in headCells"
                :key="headCell.id"
                :scope="headCell.scope"
              >
                {{ headCell.text }}
              </a-table-cell>
            </a-table-row>
          </thead>
          <tbody>
            <a-table-row
              v-for="row in bodyRows"
              :key="row.id"
            >
              <a-table-cell
                v-for="bodyCell in row"
                :key="bodyCell.id"
                :data-th="bodyCell.mobileHeading"
              >
                {{ bodyCell.text }}
              </a-table-cell>
            </a-table-row>
          </tbody>
          <tfoot>
            <a-table-row>
              <a-table-cell
                v-for="footCell in footCells"
                :key="footCell.id"
                :colspan="footCell.colspan"
              >
                {{ footCell.text }}
              </a-table-cell>
            </a-table-row>
          </tfoot>
        </a-table>
      `
    })
  )
