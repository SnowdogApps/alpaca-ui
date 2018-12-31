<template>
  <router-link
    class="logo"
    :to="to"
  >
    <img
      class="logo__image"
      :src="src"
    >
  </router-link>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
}
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
