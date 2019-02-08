<template>
  <div class="tab">
    <slot />
  </div>
</template>

<style lang="scss">
  .tab {
    @include mq($screen-l) {
      display: flex;
      flex-flow: row wrap;
    }
  }
</style>
