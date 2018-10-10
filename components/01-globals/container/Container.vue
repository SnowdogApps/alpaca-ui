<template>
  <main class="container">
    <slot />
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .container {
    max-width: var(--container__max-width);
    margin: 0 var(--container__margin);
  }

  /* This MQ is hardcoded result of */
  /* calc(var(--container__max-width) + 2 * var(--container__margin)) */
  @media all and (min-width: 1344px) {
    .container {
      margin: 0 auto;
    }
  }
</style>
