import AlpacaHeading from '../../atoms/heading/Heading.vue'
import AlpacaLink from '../../atoms/link/Link.vue'
import AlpacaTable from '../../02-elements/table/Table.vue'
import AlpacaTableRow from '../../02-elements/table-row/TableRow.vue'
import AlpacaTableCell from '../../02-elements/table-cell/TableCell.vue'

export default {
  components: {
    AlpacaHeading,
    AlpacaLink,
    AlpacaTable,
    AlpacaTableRow,
    AlpacaTableCell
  },
  props: {
    title: {
      type: String,
      required: true
    },
    viewAllLink: {
      type: String,
      required: true
    },
    headCells: {
      type: Array,
      required: true
    },
    bodyRows: {
      type: Array,
      required: true
    }
  }
}
