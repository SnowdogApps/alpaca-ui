<template>
  <tr role="row">
    <slot />
  </tr>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  $table__padding      : $spacer--medium !default;
  $table__border-radius: $border-radius !default;
  $table__border       : 1px solid $gray-light !default;

  .table {
    thead {
      tr {
        padding: 0;
        border-bottom: 0;

        @include mq($screen-m) {
          border-top-left-radius: $table__border-radius;
          border-top-right-radius: $table__border-radius;
        }
      }

      th {
        &:first-child {
          @include mq($screen-m) {
            border-top-left-radius: $table__border-radius;
          }
        }

        &:last-child {
          @include mq($screen-m) {
            border-top-right-radius: $table__border-radius;
          }
        }
      }
    }

    tr {
      display: block;
      padding: $table__padding 0;
      border-bottom: $table__border;

      @include mq($screen-m) {
        padding: 0;
        border-bottom: 0;
        display: table-row;
      }
    }
  }
</style>
