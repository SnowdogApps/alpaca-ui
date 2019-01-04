<template>
  <div
    class="price-box"
  >
    <slot />
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">

  $price__spacing            : $spacer !default;

  .price-box {
    > .price {
      margin-right: $price__spacing;
      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
