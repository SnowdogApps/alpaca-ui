<template>
  <div
    class="price-box"
    :class="customClass"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    customClass: {
      type: String,
      default: null
    }
  }
}
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
