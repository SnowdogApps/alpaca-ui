<template>
  <div class="divider">
    <span class="divider__left" /> <span class="divider__right" />
  </div>
</template>

<style lang="scss">
  $divider__color--left : $color-primary !default;
  $divider__color--right: $gray-lightest !default;
  $divider__size        : 8px !default;

  .divider {
    display: flex;

    &__left,
    &__right {
      border-top: $divider__size solid;
      flex: 1;
    }

    &__left {
      border-color: $divider__color--left;
      flex-grow: 1;
    }

    &__right {
      border-color: $divider__color--right;
      flex-grow: 2;
    }
  }
</style>
