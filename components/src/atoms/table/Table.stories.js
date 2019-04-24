import { storiesOf } from '@storybook/vue'

import ATable from './Table.vue'
import ATableRow from '../table-row/TableRow.vue'
import ATableCell from '../table-cell/TableCell.vue'

const info = `
  ---
  #### Use these modifiers with \`.table\` class.
  - \`.table--odd-even\` - Selector for applying odd-even styles
  ---
`

const defaultData = {
  components: { ATable, ATableRow, ATableCell },
  data: () => ({
    bodyRows: [
      [
        {
          'mobileHeading': 'Mobile heading 1',
          'text': 'Example content 1',
          'id': 'rowId1'
        },
        {
          'mobileHeading': 'Mobile heading 2',
          'text': 'Example content 2',
          'id': 'rowId2'
        },
        {
          'mobileHeading': 'Mobile heading 3',
          'text': 'Example content 3',
          'id': 'rowId3'
        }
      ],
      [
        {
          'mobileHeading': 'Mobile heading 4',
          'text': 'Example content 4',
          'id': 'rowId4'
        },
        {
          'mobileHeading': 'Mobile heading 5',
          'text': 'Example content 5',
          'id': 'rowId5'
        },
        {
          'mobileHeading': 'Mobile heading 6',
          'text': 'Example content 6',
          'id': 'rowId6'
        }
      ],
      [
        {
          'mobileHeading': 'Mobile heading 7',
          'text': 'Example content 7',
          'id': 'rowId7'
        },
        {
          'mobileHeading': 'Mobile heading 8',
          'text': 'Example content 8',
          'id': 'rowId8'
        },
        {
          'mobileHeading': 'Mobile heading 9',
          'text': 'Example content 9',
          'id': 'rowId9'
        }
      ]
    ],
    headCells: [
      {
        'text': 'Example heading 1',
        'id': 'headId1'
      },
      {
        'text': 'Example heading 2',
        'id': 'headId2'
      },
      {
        'text': 'Example heading 3',
        'id': 'headId3'
      }
    ],
    footCells: [
      {
        'colspan': 2,
        'text': 'Footer content 1-2',
        'id': 'id1'
      },
      {
        'colspan': 1,
        'text': 'Footer content 3',
        'id': 'id2'
      }
    ]

  })
}

storiesOf('Atoms/Table', module)
  .addParameters({ info })
  // @vue/component
  .add('Default', () => ({
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
  }))
  // @vue/component
  .add('Odd Even', () => ({
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
  }))
