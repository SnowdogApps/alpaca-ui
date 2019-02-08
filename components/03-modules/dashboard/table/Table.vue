<template>
  <div class="dashboard-table">
    <div class="dashboard-table__header">
      <alpaca-heading
        :level="5"
        class="dashboard-table__title"
      >
        {{ title }}
      </alpaca-heading>
      <alpaca-link
        :href="viewAllLink"
        class="dashboard-table__link"
      >
        {{ 'View all' }}
      </alpaca-link>
    </div>
    <div class="dashboard-table__content">
      <alpaca-table caption="This is a table">
        <thead>
          <alpaca-table-row>
            <alpaca-table-cell
              v-for="headCell in headCells"
              :key="headCell.id"
              tag="th"
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
      </alpaca-table>
    </div>
  </div>
</template>

<script>
  import AlpacaHeading from '../../../01-globals/heading/Heading'
  import AlpacaLink from '../../../01-globals/link/Link'
  import AlpacaTable from '../../../02-elements/table/Table'
  import AlpacaTableRow from '../../../02-elements/table/TableRow'
  import AlpacaTableCell from '../../../02-elements/table/TableCell'

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
</script>

<style lang="scss">
  $dashboard-table-margin: 30px !default;

  .dashboard-table {
    overflow: hidden;

    &--tab {
      padding: 10px;
      margin-bottom: $dashboard-table-margin;
      border: 1px solid $gray;

      .dashboard-table__content {
        margin-bottom: 0;
      }
    }

    &__header {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-end;
      margin-bottom: $dashboard-table-margin;
      padding-bottom: 10px;
      border-bottom: 1px solid $gray;
    }

    &__content {
      margin-bottom: $dashboard-table-margin;
      overflow-x: auto;
    }

    &__table {
      margin: 0;
    }

    &__link {
      display: inline-flex;
    }

    &__spacer {
      margin-right: $spacer;
    }

    &__title {
      margin-bottom: 0;
      margin-right: $dashboard-table-margin;
    }
  }
</style>
