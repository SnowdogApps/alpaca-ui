<template>
  <router-link
    class="logo"
    to="/"
  >
    <img
      class="logo__image"
      src="/icons/alpaca.svg"
    >
  </router-link>
</template>

<script>
export default {}
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  flex: 1 84px;
  justify-content: center;
  max-width: 84px;
  @include mq($screen-m) {
    flex: 1 112px;
    max-width: 112px;
  }
  &__image {
    height: 25px;
    @include mq($screen-m) {
      height: 34px;
    }
  }
}
</style>
