<template>
  <table
    class="table"
    tabindex="0"
    role="table"
  >
    <caption
      v-if="caption"
      class="table__caption"
    >
      {{ caption }}
    </caption>

    <slot />
  </table>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
$table__color                    : $black !default;
$table__background               : $white !default;
$table__font-size                : $font-size-small !default;
$table__border-radius            : $border-radius !default;
$table__border                   : 1px solid $gray-light !default;

.table {
  width: 100%;
  background: $table__background;
  margin: 1em 0;
  border: $table__border;
  border-radius: $table__border-radius;
  color: $table__color;
  border-collapse: separate;
  border-spacing: 0;
  font-size: $table__font-size;

  &__caption {
    @include visually-hidden();
  }
}
</style>
