import { select } from '@storybook/addon-knobs'

import bodyRows from './mocks/bodyRows.json'
import headCells from './mocks/headCells.json'
import footCells from './mocks/footCells.json'
import scopeRow from './mocks/scopeRow.json'

import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Table.selectors.json'

import ATable from './Table.vue'
import ATableRow from '../table-row/TableRow.vue'
import ATableCell from '../table-cell/TableCell.vue'

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

export default {
  title: 'Atoms/Table',
  component: ATable
}

export const Default = () => ({
  components: { ATable, ATableRow, ATableCell },
  props: {
    classKnobs: {
      default: select('BEM Modifier', classKnobsConfig)
    }
  },
  data: () => ({
    bodyRows,
    headCells,
    footCells
  }),
  template: `
    <a-table
      caption="This is a table"
      :class="classKnobs"
    >
      <thead>
        <a-table-row>
          <a-table-cell
            tag="th"
            role="columnheader"
            scope="col"
            v-for="headCell in headCells"
            :key="headCell.id"
          >
            {{ headCell.text }}
          </a-table-cell>
        </a-table-row>
      </thead>
      <tbody>
        <a-table-row
          v-for="(row, i) in bodyRows"
          :key="row.id"
        >
          <a-table-cell
            v-for="bodyCell in row"
            :key="bodyCell.id"
            :data-th="headCells[i].text"
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
            colspan="2"
          >
            {{ footCell.text }}
          </a-table-cell>
        </a-table-row>
      </tfoot>
    </a-table>
  `
})

export const ScopeRow = () => ({
  components: { ATable, ATableRow, ATableCell },
  data: () => ({
    scopeRow
  }),
  template: `
    <a-table
      caption="This is a table"
      class="table--scope-row"
    >
      <tbody>
        <a-table-row
          v-for="(row, i) in scopeRow"
          :key="row.id"
        >
          <a-table-cell
            v-for="bodyCell in row"
            :tag="bodyCell.tag"
            :role="bodyCell.role"
            :scope="bodyCell.tag === 'th' ? bodyCell.scope : null"
            :data-th="bodyCell.tag === 'td' ? bodyCell['data-th'] : null"
            :key="bodyCell.id"
          >
            {{ bodyCell.text }}
          </a-table-cell>
        </a-table-row>
      </tbody>
    </a-table>
  `
})
