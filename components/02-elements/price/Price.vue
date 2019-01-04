<template>
  <span
    :class="[
      'price',
      {
        'price--special': special,
        'price-old': old
      },
    ]"
  >
    <slot />
  </span>
</template>

<script>
  export default {
    props: {
      special: {
        type: Boolean,
        default: false
      },
      old: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">

  $price__color              : inherit !default;
  $price__color--special     : $green !default;
  $price__color--old         : inherit !default;
  $price__font-weight        : $font-weight-bold !default;
  $price__font-weight--old   : $font-weight-normal !default;
  $price__font-weight--old   : $font-weight-normal !default;

  .price {
    font-weight: $price__font-weight;
    &--old {
      text-decoration: line-through;
      font-weight: $price__font-weight--old;
    }
    &--special {
      color: $price__color--special;
      & > ins {
        text-decoration: none;
      }
    }
  }
</style>
