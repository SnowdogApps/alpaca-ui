<template>
  <a
    class="logo"
    href="/"
  >
    <img
      class="logo__image"
      src="/images/logo/alpaca.svg"
    />
  </a>
</template>

<script>
  export default {

  }
</script>

<style>
  .logo {
    display: flex;
    align-items: center;
    flex: 1 84px;
    justify-content: center;
    max-width: 84px;
  }
  @media all and (min-width: 768px) {
    .logo {
      flex: 1 112px;
      max-width: 112px;
    }
  }
  .logo__image {
    height: 25px;
  }
  @media all and (min-width: 768px) {
    .logo__image {
      height: 34px;
    }
  }
</style>
